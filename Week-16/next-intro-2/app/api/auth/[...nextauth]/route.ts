import { NEXTAUTH_CONFIG } from "@/lib/auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth(NEXTAUTH_CONFIG);

export { handler as GET, handler as POST }