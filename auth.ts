import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

export const { handlers, signIn, signOut, auth } = NextAuth({
    debug: true,
    theme: {
        colorScheme: "dark",
        brandColor: "#1E1E1E",
        logo: "https://beta.cbat.pro/favicon.ico",
    },
    providers: [GitHub],
})