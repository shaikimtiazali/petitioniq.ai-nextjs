// app/api/contact/route.js
import { NextResponse } from "next/server";
import { getIPFromRequest } from "../../helpers/ip";
import {
  checkRate,
  cap,
  esc,
  resendEmail,
  TO_EMAIL,
} from "../../../lib/petitionBackend";

export async function POST(request) {
  const clientIP = getIPFromRequest(request);
  if (!checkRate(clientIP, 20))
    return NextResponse.json({ error: "Too many requests." }, { status: 429 });

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const email =
    typeof body.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)
      ? body.email.slice(0, 120)
      : null;
  if (!email)
    return NextResponse.json(
      { error: "Valid email required." },
      { status: 400 },
    );

  const type = cap(body.type, "role");
  const name = esc(
    `${cap(body.firstName, "firstName")} ${cap(body.lastName, "lastName")}`.trim() ||
      "Unknown",
  );
  const role = esc(cap(body.role, "role"));
  const visa = esc(cap(body.visa, "visa"));
  const field = esc(cap(body.field, "field"));
  const note = esc(cap(body.note || body.field2, "note"));
  const ts = new Date().toISOString();

  let subject = `[PetitionIQ] Contact - ${name}`;
  let html = `<p>Type: ${esc(type)}</p><p>From: ${name} (${esc(email)})</p><p>Time: ${ts}</p>`;

  if (type === "stage_a_lead") {
    subject = `[PetitionIQ] New Stage A Lead - ${name}`;
    html = `<h2>New Stage A Lead</h2><table>${trow("Name", name)}${trow("Email", esc(email))}${trow("Role", role)}${trow("Time", ts)}</table>`;
  } else if (type === "b1_interest") {
    subject = `[PetitionIQ] B1 Request - ${name}`;
    html = `<h2>Stage B1 Consultation Request</h2><table>${trow("Name", name)}${trow("Email", esc(email))}${trow("Role", role)}${trow("Visa", visa)}${trow("Field", field)}${trow("Note", note)}${trow("Time", ts)}</table>`;
  }

  console.log(`[contact] ${ts} | ${type} | ${name} | ${esc(email)}`);

  try {
    await resendEmail({ to: [TO_EMAIL], subject, html, replyTo: email });
  } catch (err) {
    console.error("[contact] Email failed:", err.message);
  }

  return NextResponse.json({ success: true });
}

function trow(label, value) {
  return `<tr><td style="padding:8px;border:1px solid #ccc;font-weight:bold;background:#f2f4f7;width:160px">${esc(label)}</td><td style="padding:8px;border:1px solid #ccc">${esc(String(value || "-"))}</td></tr>`;
}
