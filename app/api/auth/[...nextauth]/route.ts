import NextAuth from "next-auth/next";
import { authOptions } from "@/components/providers/next-auth-options";
console.log(authOptions, "authOptions");
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
