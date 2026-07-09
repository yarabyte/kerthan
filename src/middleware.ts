import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getIronSession } from "iron-session";
import type { AdminSession } from "@/lib/auth/session";
import { ADMIN_SESSION_COOKIE, getSessionOptions } from "@/lib/auth/session";
import { isMaintenanceModeEnv } from "@/lib/maintenance-env";

const ASSET_PATHS = ["/assets", "/icon.png", "/favicon.ico"];

function isStaticAsset(pathname: string): boolean {
  return ASSET_PATHS.some((path) => pathname.startsWith(path));
}

function isAdminPath(pathname: string): boolean {
  return pathname.startsWith("/admin") || pathname.startsWith("/api/admin");
}

async function fetchMaintenanceStatus(request: NextRequest): Promise<boolean> {
  if (isMaintenanceModeEnv()) return true;

  try {
    const url = new URL("/api/maintenance-status", request.url);
    const res = await fetch(url.toString(), {
      headers: { "x-internal": "1" },
      next: { revalidate: 30 },
    });
    if (!res.ok) return false;
    const data = (await res.json()) as { enabled?: boolean };
    return data.enabled === true;
  } catch {
    return false;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    const session = await getIronSession<AdminSession>(
      request,
      NextResponse.next(),
      getSessionOptions(),
    );
    if (!session.isLoggedIn) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  if (pathname === "/admin/login") {
    const session = await getIronSession<AdminSession>(
      request,
      NextResponse.next(),
      getSessionOptions(),
    );
    if (session.isLoggedIn) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }

  const maintenance =
    !isAdminPath(pathname) && !pathname.startsWith("/api/maintenance-status")
      ? await fetchMaintenanceStatus(request)
      : false;

  if (maintenance) {
    if (
      pathname === "/coming-soon" ||
      pathname.startsWith("/api/") ||
      isStaticAsset(pathname)
    ) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/coming-soon", request.url));
  }

  if (pathname === "/coming-soon") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
