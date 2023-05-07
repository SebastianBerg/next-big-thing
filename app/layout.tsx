import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Tee Wrecks",
  description: "T-Shirts! For kids",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden max-w-[100vw]">
        <nav className="sticky top-0 z-50 px-8 h-[60px] flex items-center text-white font-sans bg-black text-lg font-thin">
          <Link href="/" className="mr-16 shadow-white">
            Home
          </Link>
          <Link href="/product/cool-shirt">Product </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
