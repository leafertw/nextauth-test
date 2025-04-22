//  https://authjs.dev/getting-started/session-management/protecting
//  Example repo: https://github.com/nextauthjs/next-auth/blob/main/apps/examples/nextjs-pages/middleware.ts
//export { auth as middleware } from "@/auth"

//  https://authjs.dev/getting-started/migrating-to-v5#authentication-methods
//  use the auth method as a wrapper to implement more logic inside the middleware

//  Example: https://github.com/plasmicapp/plasmic-next-auth-example/blob/master/middleware.ts

import { auth } from "@/auth"

export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname !== "/profile") {
    const newUrl = new URL("/profile", req.nextUrl.origin)
    return Response.redirect(newUrl)
  }
})

// Only run on these paths
// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
// Also exclude plasmic-host path from the middleware
export const config = {
  matcher: [
    "/:path((?!_next/|api/|favicon\\.ico|plasmic-host).*)",
    "/certify/(.*)",
    "/admin/(.*)"
  ]
};