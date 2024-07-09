import NextAuth from "next-auth";

import authConfig from "@/auth.config";

const { auth } = NextAuth(authConfig);

//@ts-ignore
export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith('/api/auth');

  if (isApiAuthRoute) {
    return null;
  }

  if (nextUrl.pathname === "/login") {
    if (isLoggedIn) {
      return Response.redirect(new URL('/dashboard', nextUrl));
    }
    return null;
  }

  if (!isLoggedIn && nextUrl.pathname !== "/") {
    return Response.redirect(new URL("/login", nextUrl));
  }
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};