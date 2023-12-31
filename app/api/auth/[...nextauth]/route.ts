import NextAuth from "next-auth/next";
import githubAuth from "next-auth/providers/github"

export const authOption = {
    providers: [
        githubAuth({
            clientId: process.env.GITHUB_CLIENT as string,
            clientSecret: process.env.GITHUB_SECRET as string
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOption)

export { handler as GET, handler as POST }