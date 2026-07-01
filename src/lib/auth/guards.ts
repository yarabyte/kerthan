import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import type { AdminSession } from "./session";
import { getSessionOptions } from "./session";

export async function getAdminSession(): Promise<AdminSession> {
  const session = await getIronSession<AdminSession>(await cookies(), getSessionOptions());
  return session;
}

export async function requireAdminSession(): Promise<AdminSession> {
  const session = await getAdminSession();
  if (!session.isLoggedIn) {
    throw new Error("Unauthorized");
  }
  return session;
}
