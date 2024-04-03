import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { UserRole } from "@prisma/client";

import { db } from "@/lib/db";
import authConfig from "./auth.config";
import { getUserById } from "@/data/user";
import { getTwoFactorConfirmationByUserId } from "@/data/two-factor-confirmation";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut
} = NextAuth({
  callbacks: {
    async signIn({ user, account }) {
      const existingUser = await getUserById(user.id);

      // Prevent signin without email verification
      if (!existingUser?.emailVerified) return false;

      if (existingUser.isTwoFactorEnabled) {
        const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(
          existingUser.id
        );

        if (!twoFactorConfirmation) return false;

        await db.twoFactorConfirmation.delete({
          where: {id: twoFactorConfirmation.id}
        })
      }

      return true;
    },
    async session({ token, session }) {
      if (token.role && session.user)
        session.user.role = token.role as UserRole;

      if (token.sub && session.user) session.user.id = token.sub;

      if(session.user) session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean

      if(session.user){
        session.user.name = token.name
        session.user.email = token.email as string
      }

       

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;

      token.name = existingUser.name;
      token.email = existingUser.email;
      token.role = existingUser.role;
      token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
