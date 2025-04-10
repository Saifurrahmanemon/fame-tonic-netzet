import type { Metadata } from "next";
import { Figtree, Urbanist } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const figtree = Figtree({
   variable: "--font-figtree",
});

const urbanist = Urbanist({
   variable: "--font-urbanist",
});

export const metadata: Metadata = {
   title: "Fametonic",
   description: "Turn Social Media Into a Profitable Career",
};

export default function RootLayout({ children }: { children: ReactNode }) {
   return (
      <html lang="en">
         <body
            className={`${figtree.variable} ${urbanist.variable} antialiased`}
         >
            {children}
         </body>
      </html>
   );
}
