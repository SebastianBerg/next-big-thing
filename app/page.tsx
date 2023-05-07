import Image from "next/image";
import indexBackground from "../public/static/images/homepage-background-2.jpg";

export default function HomePage() {
  console.log(indexBackground, "url");
  return (
    <div className="relative w-screen h-screen">
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 font-bold text-6xl">
        Tee Wrecks
      </h1>
      <Image
        src="/static/images/homepage-background-2.jpg"
        alt="Live, work, create"
        fill
        // height={100}
        // width={100}
        priority
      />
    </div>
  );
}
