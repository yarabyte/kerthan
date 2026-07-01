/** Next.js expands `$` in .env — store bcrypt as base64 instead. */
export function getAdminPasswordHash(): string | undefined {
  const b64 = process.env.ADMIN_PASSWORD_HASH_B64?.trim();
  if (b64) {
    return Buffer.from(b64, "base64").toString("utf8");
  }
  return process.env.ADMIN_PASSWORD_HASH?.trim();
}
