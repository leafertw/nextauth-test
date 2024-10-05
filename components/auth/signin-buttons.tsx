//  https://authjs.dev/getting-started/session-management/login
// https://next-auth.js.org/getting-started/example#frontend---add-react-hook

import { signIn, signOut } from "@/auth"

export function SignIn() {
  return (
    <button onClick={() => signIn("github", { redirectTo: "/profile" })}>
      引導師登入
    </button>
  )
}

export function SignOut() {
  return <button onClick={() => signOut()}>登出</button>
}