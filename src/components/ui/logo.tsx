import Image from "next/image";
import Link from "next/link";

export function Logo({ isMobile }: { isMobile: boolean }) {
   const width = isMobile ? 120 : 173;
   const height = isMobile ? 50 : 74;

   return (
      <div className="logo" data-testid="logo">
         <Link href="/">
            <Image
               src="/logo.png"
               alt="Fametonic Logo"
               width={width}
               height={height}
               priority
            />
         </Link>
      </div>
   );
}
