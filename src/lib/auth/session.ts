import type { SessionOptions } from "iron-session";

export interface AdminSession {
  isLoggedIn: boolean;
  email: string;
}

export const ADMIN_SESSION_COOKIE = "kerthan_admin_session";

export function getSessionOptions(): SessionOptions {
  const password =
    process.env.SESSION_SECRET ??
    (process.env.NODE_ENV === "development"
      ? "dev-only-secret-minimum-32-characters-long"
      : undefined);

  if (!password || password.length < 32) {
    throw new Error("SESSION_SECRET must be at least 32 characters.");
  }

  return {
    password,
    cookieName: ADMIN_SESSION_COOKIE,
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    },
  };
}
