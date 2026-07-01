import { NextResponse } from "next/server";
import { compare } from "bcryptjs";
import { getIronSession } from "iron-session";
import { getAdminPasswordHash } from "@/lib/auth/admin-credentials";
import type { AdminSession } from "@/lib/auth/session";
import { getSessionOptions } from "@/lib/auth/session";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: string; password?: string };
    const email = body.email?.trim() ?? "";
    const password = body.password ?? "";

    const adminEmail = process.env.ADMIN_EMAIL;
    const adminHash = getAdminPasswordHash();

    if (!adminEmail || !adminHash) {
      return NextResponse.json(
        { error: "Configuration admin manquante." },
        { status: 500 },
      );
    }

    if (email !== adminEmail) {
      return NextResponse.json({ error: "Identifiants incorrects." }, { status: 401 });
    }

    const valid = await compare(password, adminHash);
    if (!valid) {
      return NextResponse.json({ error: "Identifiants incorrects." }, { status: 401 });
    }

    const response = NextResponse.json({ ok: true });
    const session = await getIronSession<AdminSession>(request, response, getSessionOptions());
    session.isLoggedIn = true;
    session.email = email;
    await session.save();

    return response;
  } catch {
    return NextResponse.json({ error: "Erreur de connexion." }, { status: 500 });
  }
}
