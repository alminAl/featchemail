import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  site: process.env.NEXTAUTH_URL,
  providers: [
    GoogleProvider({
      clientId:
        "987056369659-4c741pngqcn3qkd6j8qgdp7ssd8am47s.apps.googleusercontent.com",
      clientSecret: "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",
      authorization: {
        params: {
          scope:
            "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://mail.google.com",
        },
      },

    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SICRECT_KEY,
  callbacks: {
    async session({ session, token, user }) {
      session.user.id = token.id;
      session.accessToken = token.accessToken;
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.id = user.id;
      }
      if (account) {
        // console.log(account);
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
};

export default NextAuth(authOptions);
