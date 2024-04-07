import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";

import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ShoppingCartProvider } from "@/context/shopping-cart-context";

const inter = Poppins({ subsets: ["latin"], weight: ["300"] });

export const metadata: Metadata = {
  title: "Greenify",
  description: "E-commerce Store",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <ShoppingCartProvider>
      <SessionProvider session={session}>
        <html lang="en">
          <body className={cn("bg-slate-100", inter.className)}>
            <Navbar />
            {children}
            <Footer/>
          </body>
        </html>
      </SessionProvider>
    </ShoppingCartProvider>
  );
}
