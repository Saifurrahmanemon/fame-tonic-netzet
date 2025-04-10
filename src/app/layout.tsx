import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

// Initialize the Montserrat font with the weights we need
const montserrat = Montserrat({
   subsets: ["latin"],
   weight: ["400", "500", "600", "700", "800", "900"],
   variable: "--font-montserrat",
   display: "swap",
});

export const metadata: Metadata = {
   title: "Fametonic",
   description: "Turn Social Media Into a Profitable Career",
};

export default function RootLayout({ children }: { children: ReactNode }) {
   return (
      <html lang="en">
         <body
            className={`${montserrat.variable} font-sans bg-black text-white`}
         >
            {children}
         </body>
      </html>
   );
}
