import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { authRoutes, protectedRoutes } from "./routes";

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("currentUser");

  console.log("current user", currentUser);
  if (
    protectedRoutes.includes(request.nextUrl.pathname) &&
    (!currentUser || Date.now() > JSON.parse(currentUser).expiredAt)
  ) {
    request.cookies.delete("currentUser");
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.delete("currentUser");

    return response;
  }

  if (authRoutes.includes(request.nextUrl.pathname) && currentUser) {
    console.log("REDIRECT");
    return NextResponse.redirect(new URL("/admin", request.url));
  }
}
