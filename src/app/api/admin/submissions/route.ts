import { NextResponse } from "next/server";
import { requireAdminSession } from "@/lib/auth/guards";
import { listContactSubmissions, markSubmissionRead } from "@/lib/db/queries/content";

export const runtime = "nodejs";

export async function GET() {
  try {
    await requireAdminSession();
    const submissions = await listContactSubmissions();
    return NextResponse.json(submissions);
  } catch {
    return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
  }
}

export async function PATCH(request: Request) {
  try {
    await requireAdminSession();
    const body = (await request.json()) as { id?: string };
    if (!body.id) {
      return NextResponse.json({ error: "ID requis." }, { status: 400 });
    }
    await markSubmissionRead(body.id);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
  }
}
