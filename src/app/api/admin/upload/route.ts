import { NextResponse } from "next/server";
import { requireAdminSession } from "@/lib/auth/guards";
import {
  getMaxImageBytes,
  isAllowedImageType,
  saveUploadedImage,
} from "@/lib/admin/image-storage";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    await requireAdminSession();

    const form = await request.formData();
    const file = form.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "Fichier manquant." }, { status: 400 });
    }

    if (!isAllowedImageType(file.type)) {
      return NextResponse.json(
        { error: "Format non supporté. Utilisez JPG, PNG, WebP ou GIF." },
        { status: 400 },
      );
    }

    if (file.size > getMaxImageBytes()) {
      return NextResponse.json(
        { error: "Image trop lourde (max. 5 Mo)." },
        { status: 400 },
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const url = await saveUploadedImage(buffer, file.type, file.name);

    return NextResponse.json({ url });
  } catch (error) {
    if (error instanceof Error && error.message === "Unauthorized") {
      return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
    }
    return NextResponse.json({ error: "Échec de l'envoi." }, { status: 500 });
  }
}
