import { getProviders } from "next-auth/react";
import { NextResponse } from "next/server";

const handler = async (req: Request, res: Response) => {
  const providers = await getProviders();
  console.log("Providers", providers);
  return NextResponse.json(providers);
};

export { handler as GET };
