import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const UPLOAD_DIR = "public/assets/uploads";
const MAX_BYTES = 5 * 1024 * 1024;

const MIME_TO_EXT: Record<string, string> = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
  "image/gif": ".gif",
};

export function isAllowedImageType(mime: string): boolean {
  return mime in MIME_TO_EXT;
}

export function getMaxImageBytes(): number {
  return MAX_BYTES;
}

function safeBaseName(name: string): string {
  const base = path.basename(name, path.extname(name));
  const cleaned = base
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return cleaned.slice(0, 48) || "image";
}

export async function saveUploadedImage(
  buffer: Buffer,
  mime: string,
  originalName: string,
): Promise<string> {
  const ext = MIME_TO_EXT[mime];
  if (!ext) {
    throw new Error("Type de fichier non autorisé.");
  }

  const fileName = `${Date.now()}-${safeBaseName(originalName)}${ext}`;
  const dir = path.join(process.cwd(), UPLOAD_DIR);
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, fileName), buffer);

  return `/assets/uploads/${fileName}`;
}
