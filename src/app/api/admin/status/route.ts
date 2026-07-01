import { NextResponse } from "next/server";
import { requireAdminSession } from "@/lib/auth/guards";
import { countUnreadSubmissions, hasUnpublishedChanges } from "@/lib/db/queries/content";

export const runtime = "nodejs";

export async function GET() {
  try {
    await requireAdminSession();
    const [unread, hasDraftChanges] = await Promise.all([
      countUnreadSubmissions(),
      hasUnpublishedChanges(),
    ]);
    return NextResponse.json({ unread, hasDraftChanges });
  } catch {
    return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
  }
}
