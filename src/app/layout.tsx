import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../style/globals.css";
import Layout from "@/components/Layout";
import Providers from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chan.Logs",
  description: "찬의 개발일지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={(inter.className, `bg-white  dark:bg-zinc-900`)}>
        <Providers>
          <div className="flex w-full h-[100dvh] overflow-x-hidden">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
