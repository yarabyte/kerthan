import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { requireAdminSession } from "@/lib/auth/guards";
import { publishAll } from "@/lib/db/queries/content";

export const runtime = "nodejs";

export async function POST() {
  try {
    await requireAdminSession();
    await publishAll();
    revalidatePath("/", "layout");
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
  }
}
