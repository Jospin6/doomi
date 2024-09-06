import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SideNavbar } from "@/components/SideNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "doomi",
  description: "a web application for market place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#000000]`}>
        <div className="w-[20%] fixed top-0 left-0 p-2">
          <SideNavbar />
        </div>

        <div className="ml-[20%] w-[80%] flex">
          {children}
        </div>
        
      </body>
    </html>
  );
}
