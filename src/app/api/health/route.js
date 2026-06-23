// app/api/health/route.js
import {
  HEALTH_SECRET,
  AI_KEY,
  RESEND_KEY,
  AI_MODEL,
  AI_MAX_TOKENS,
  IS_PROD,
} from "../../../lib/petitionBackend";
import { NextResponse } from "next/server";

export async function GET(request) {
  const url = new URL(request.url);
  const authed =
    HEALTH_SECRET && url.searchParams.get("token") === HEALTH_SECRET;
  if (!authed) return NextResponse.json({ status: "ok" });
  return NextResponse.json({
    status: "ok",
    aiConfigured: Boolean(AI_KEY),
    emailConfigured: Boolean(RESEND_KEY),
    model: AI_MODEL,
    maxTokens: AI_MAX_TOKENS,
    ts: new Date().toISOString(),
  });
}
