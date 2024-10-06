//  https://authjs.dev/getting-started/session-management/protecting
//  Example repo: https://github.com/nextauthjs/next-auth/blob/main/apps/examples/nextjs-pages/middleware.ts
//export { auth as middleware } from "@/auth"

//  https://authjs.dev/getting-started/migrating-to-v5#authentication-methods
//  use the auth method as a wrapper to implement more logic inside the middleware
import { auth } from "@/auth"

export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname !== "/profile") {
    const newUrl = new URL("/profile", req.nextUrl.origin)
    return Response.redirect(newUrl)
  }
})

// only run on these paths
export const config = {
    matcher: ['/certify/(.*)', '/admin/(.*)'],
}