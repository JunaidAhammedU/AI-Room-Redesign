import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./provider";

export const metadata: Metadata = {
  title: "Artifex AI | Redesign your room",
  description: "Generate and redesign your interior with AI.",
};
const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en"> 
        <body className={outfit.className}><Provider>{children}</Provider></body>
      </html>
    </ClerkProvider> 
  );
}
