import { NextResponse } from "next/server";
import { requireAdminSession } from "@/lib/auth/guards";
import type { ContentItemType, SiteSettingsKey } from "@/lib/content-types";
import { getDraftContent, saveDraftItems, saveDraftSettings } from "@/lib/db/queries/content";

export const runtime = "nodejs";

export async function GET() {
  try {
    await requireAdminSession();
    const content = await getDraftContent();
    return NextResponse.json(content);
  } catch {
    return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
  }
}

interface PutBody {
  settings?: Partial<Record<SiteSettingsKey, unknown>>;
  items?: Partial<Record<ContentItemType, unknown[]>>;
}

export async function PUT(request: Request) {
  try {
    await requireAdminSession();
    const body = (await request.json()) as PutBody;

    if (body.settings) {
      for (const [key, value] of Object.entries(body.settings)) {
        await saveDraftSettings(key as SiteSettingsKey, value);
      }
    }

    if (body.items) {
      for (const [itemType, items] of Object.entries(body.items)) {
        await saveDraftItems(itemType as ContentItemType, items ?? []);
      }
    }

    const content = await getDraftContent();
    return NextResponse.json(content);
  } catch {
    return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
  }
}
