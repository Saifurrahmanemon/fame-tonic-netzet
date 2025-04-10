import Image from "next/image";

export function PhoneDisplay() {
   return (
      <div
         className="relative w-full max-w-[666px] h-[400px] md:h-[679px]"
         data-testid="phone-display"
      >
         <Image
            src="/side-banner.png"
            alt="Fametonic App Interface"
            className="object-contain"
            fill
            priority
         />
      </div>
   );
}
