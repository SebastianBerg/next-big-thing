"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

export default function HomePage() {
  // const { data: session } = useSession();
  // console.log(session, "session");
  return (
    <div className="relative w-screen h-[calc(100vh-60px)]">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 font-bold p-4 rounded-md bg-black/20 shadow-lg shadow-orange-300/50">
        <h1 className="text-6xl">Tee Wrecks</h1>
        <h2 className="text-center mt-4">
          <span className="text-rose-600">Happiness!</span> for kids
        </h2>
      </div>
      <Image
        src="/homepage-background-2.jpg"
        alt="Live, work, create"
        fill
        priority
      />
    </div>
  );
}
