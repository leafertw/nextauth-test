import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

import { ensurePlasmicAppUser } from "@plasmicapp/auth-api";

export const { handlers, signIn, signOut, auth } = NextAuth({
    callbacks: {
        async session({ session }) {
            // Ensure the Plasmic user
            const PLASMIC_APP_SECRET = process.env.PLASMIC_APP_SECRET;

            const result = await ensurePlasmicAppUser({
                email: session.user.email, // Use the user's email from the session
                appSecret: PLASMIC_APP_SECRET!, // Use your app secret from environment variables
            });

            // Handle potential errors
            if (result.error) {
                console.error(result.error);
                // Optionally, you could return an empty session or handle the error as needed
                return session; // Return the session as is, or modify it based on your error handling
            }

            // If successful, extract the Plasmic user and token
            const { user: PlasmicUser, token: plasmicUserToken } = result;

            // You can store the token in the session
            session.user.email = PlasmicUser.email; // Add Plasmic user info to the session
            session.sessionToken = plasmicUserToken; // Store the Plasmic token

            return session; // Return the modified session
        },
    },
    debug: true,
    theme: {
        colorScheme: "dark",
        brandColor: "#1E1E1E",
        logo: "/favicon.ico",
    },
    providers: [GitHub],
})

/*
callbacks: {
        async jwt({ token, account, user, profile }) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (account) {
                token.accessToken = account.access_token
                token.email
                user
                profile
            }
            return token
        },
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token and user id from a provider.
            session.accessToken = token.accessToken 
            session.user.id = token.id
            user

            return session
        }
        jwt: async ({ token, user, account, profile }) => {
            if (account) {
                return { ...token, ...user, ...account, ...profile }
            };
        },
        session: async ({ session, token, user }) => {
            session.user = token;
            return session;
        },
    },
*/