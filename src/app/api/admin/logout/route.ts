import { NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import type { AdminSession } from "@/lib/auth/session";
import { getSessionOptions } from "@/lib/auth/session";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const response = NextResponse.json({ ok: true });
  const session = await getIronSession<AdminSession>(request, response, getSessionOptions());
  session.destroy();
  return response;
}
