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
        <nav className="sticky top-0 z-50 px-8 py-4 text-white font-serif bg-black">
          <Link href="/" className="mr-4 shadow-white">
            Home
          </Link>
          <Link href="/product/cool-shirt">Product </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
