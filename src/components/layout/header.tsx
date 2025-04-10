"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useMobile } from "~/hooks/use-mobile";
import { Logo } from "../ui/logo";

export function Header() {
   const isMobile = useMobile();
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   return (
      <nav
         className="flex justify-between items-center p-4 md:px-8 md:py-6 max-w-[1440px] mx-auto relative"
         data-testid="header"
      >
         {isMobile ? (
            <div className="flex-1 flex justify-center">
               <Logo isMobile={isMobile} />
            </div>
         ) : (
            <Logo isMobile={isMobile} />
         )}

         {isMobile ? (
            <>
               <button
                  className="text-white absolute right-4"
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
               >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
               </button>
               {isMenuOpen && (
                  <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm p-4 flex flex-col gap-4 z-50">
                     <Link
                        href="#about"
                        className="text-white/80 hover:text-white transition"
                        onClick={() => setIsMenuOpen(false)}
                     >
                        About us
                     </Link>
                     <Link
                        href="#contact"
                        className="text-white/80 hover:text-white transition"
                        onClick={() => setIsMenuOpen(false)}
                     >
                        Contact
                     </Link>
                  </div>
               )}
            </>
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
