import "./globals.css";
import NavigationMenuDemo from "@/components/menu/";
import Providers from "@/components/providers/providers";

export const metadata = {
  title: "Tee Wrecks",
  description: "T-Shirts! For kids",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log(process.env.NEXTAUTH_URL, "nextauth URL");
  console.log(process.env.NEXTAUTH_SECRET, "secret");
  return (
    <html lang="en">
      <body className="overflow-x-hidden max-w-[100vw]">
        <Providers>
          <NavigationMenuDemo />
          {children}
        </Providers>
      </body>
    </html>
  );
}
