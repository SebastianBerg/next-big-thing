import Image from "next/image";
import indexBackground from "../public/static/images/homepage-background-2.jpg";

export default function HomePage() {
  return (
    <div className="relative w-screen h-[calc(100vh-60px)]">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 font-bold p-4 rounded-md bg-black/20 shadow-lg shadow-orange-300/50">
        <h1 className="text-6xl">Tee Wrecks</h1>
        <h2 className="text-center mt-4">Happiness! for kids</h2>
      </div>
      <Image
        src="/static/images/homepage-background-2.jpg"
        alt="Live, work, create"
        fill
        priority
      />
    </div>
  );
}
