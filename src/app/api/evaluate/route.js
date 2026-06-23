// app/api/evaluate/route.js
import { NextResponse } from "next/server";
import { getIPFromRequest } from "../../helpers/ip";
import {
  AI_KEY,
  CRITERIA,
  buildPrompt,
  checkRate,
  callAI,
  logUPLAck,
  emailResults,
  cap,
} from "../../../lib/petitionBackend";

export async function POST(request) {
  if (!AI_KEY)
    return NextResponse.json(
      { error: "AI service not configured." },
      { status: 503 },
    );

  const clientIP = getIPFromRequest(request);
  if (!checkRate(clientIP, 5))
    return NextResponse.json(
      { error: "Evaluation limit reached. Please try again later." },
      { status: 429 },
    );

  let body;
  try {
    body = await request.json();
  } catch (err) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const visa = ["EB1A", "NIW", "O1A"].includes(body.visa) ? body.visa : null;
  const email =
    typeof body.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)
      ? body.email.slice(0, 120)
      : null;
  const field = cap(body.field, "field");
  const degree = cap(body.degree, "degree");
  const experience = cap(body.experience, "experience");
  const summary = cap(body.summary, "summary");
  const name =
    `${cap(body.firstName, "firstName")} ${cap(body.lastName, "lastName")}`.trim() ||
    "Unknown";

  const categoryCriteria = CRITERIA[visa] || [];
  const rawCriteria = Array.isArray(body.criteriaIndices)
    ? body.criteriaIndices
    : [];
  const criteriaIndices = rawCriteria
    .filter(
      (index) =>
        Number.isInteger(index) &&
        index >= 0 &&
        index < categoryCriteria.length,
    )
    .slice(0, categoryCriteria.length);

  if (!visa)
    return NextResponse.json(
      { error: "Valid visa category required (EB1A, NIW, O1A)." },
      { status: 400 },
    );
  if (!email)
    return NextResponse.json(
      { error: "Valid email address required." },
      { status: 400 },
    );
  if (!field)
    return NextResponse.json(
      { error: "Professional field required." },
      { status: 400 },
    );

  let aiResult;
  try {
    aiResult = await callAI(
      buildPrompt({
        visa,
        field,
        degree,
        experience,
        summary,
        criteriaIndices,
      }),
    );
  } catch (err) {
    console.error("[evaluate] AI call failed:", err.message);
    return NextResponse.json(
      { error: "AI evaluation service temporarily unavailable." },
      { status: 502 },
    );
  }

  let parsed;
  try {
    const rawText =
      aiResult.content?.find((block) => block.type === "text")?.text || "";
    parsed = JSON.parse(rawText.replace(/```json|```/g, "").trim());
    if (!parsed.overallStrength || !Array.isArray(parsed.criteriaAssessment))
      throw new Error("Invalid AI response schema");
    parsed.strengthNote = String(parsed.strengthNote || "").slice(0, 300);
    parsed.criteriaAssessment = parsed.criteriaAssessment
      .slice(0, categoryCriteria.length)
      .map((criterion) => ({
        name: String(criterion.name || "").slice(0, 60),
        status: [
          "Appears Consistent",
          "Needs Development",
          "Unclear from Profile",
        ].includes(criterion.status)
          ? criterion.status
          : "Unclear from Profile",
        note: String(criterion.note || "").slice(0, 200),
      }));
    parsed.keyConsiderations = (parsed.keyConsiderations || [])
      .slice(0, 4)
      .map((i) => String(i).slice(0, 200));
    parsed.nextSteps = (parsed.nextSteps || [])
      .slice(0, 4)
      .map((i) => String(i).slice(0, 200));
  } catch (err) {
    console.error("[evaluate] Parse failed:", err.message);
    return NextResponse.json(
      { error: "Could not process AI response. Please try again." },
      { status: 500 },
    );
  }

  logUPLAck({
    email,
    visa,
    ip: clientIP,
    ua: request.headers.get("user-agent") || "",
  });

  // fire-and-forget email
  try {
    emailResults({
      name,
      email,
      visa,
      field,
      parsed,
      categoryCriteria,
      criteriaIndices,
    }).catch((e) => console.error("[evaluate] email failed", e.message));
  } catch (e) {
    console.error(e.message);
  }

  return NextResponse.json({ success: true, result: parsed });
}
