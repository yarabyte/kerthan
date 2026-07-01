import { NextResponse } from "next/server";
import { getMaintenanceMode } from "@/lib/db/queries/content";

export const runtime = "nodejs";

export async function GET(request: Request) {
  if (request.headers.get("x-internal") !== "1") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  const enabled = await getMaintenanceMode();
  return NextResponse.json({ enabled });
}
