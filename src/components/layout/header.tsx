"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useMobile } from "~/hooks/use-mobile";

export function Header() {
   const isMobile = useMobile();

   return (
      <nav
         className="flex justify-between items-center p-4 md:px-8 md:py-6"
         data-testid="header"
      >
         {isMobile ? (
            <button className="text-white" aria-label="Open menu">
               <Menu size={24} />
            </button>
         ) : (
            <div className="flex gap-6">
               <Link
                  href="#about"
                  className="text-white/80 hover:text-white transition"
               >
                  About us
               </Link>
               <Link
                  href="#contact"
                  className="text-white/80 hover:text-white transition"
               >
                  Contact
               </Link>
            </div>
         )}
      </nav>
   );
}
