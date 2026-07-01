import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { requireAdminSession } from "@/lib/auth/guards";
import { setMaintenanceMode } from "@/lib/db/queries/content";

export const runtime = "nodejs";

export async function PATCH(request: Request) {
  try {
    await requireAdminSession();
    const body = (await request.json()) as { enabled?: boolean };
    if (typeof body.enabled !== "boolean") {
      return NextResponse.json({ error: "Champ enabled requis." }, { status: 400 });
    }
    await setMaintenanceMode(body.enabled);
    revalidatePath("/", "layout");
    return NextResponse.json({ ok: true, enabled: body.enabled });
  } catch {
    return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
  }
}
