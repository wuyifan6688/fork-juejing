import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Siderbar from "@/components/Siderbar";
import { getALlNotes } from "@/lib/redis";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" ">
        {" "}
        <Header></Header>
        <div className="flex h-full bg-gray-50">
          <Siderbar></Siderbar> {children}
        </div>
      </body>
    </html>
  );
}
