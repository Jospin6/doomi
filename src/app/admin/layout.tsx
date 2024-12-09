import type { Metadata } from "next";
import "./globals.css";
import { ReduxProvider } from "@/features/Provider";
import { Navbar } from "@/components/admin/navbar";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "doomi-admin",
  description: "a web application for market place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body className={`bg-[#000000]`}>
            <div>
                <Navbar/>
            </div>
            <div className="px-[10%]">
                {children}
            </div>
        </body>
      </ReduxProvider>
    </html>
  );
}
