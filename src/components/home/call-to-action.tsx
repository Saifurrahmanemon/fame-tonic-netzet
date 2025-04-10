import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export function CallToAction() {
   return (
      <div className="pt-4" data-testid="call-to-action">
         <div className=" flex-col  gap-1 inline-flex">
            <Button
               className="bg-secondary cursor-pointer grow text-white font-bold px-4 w-[330px] py-2 rounded-xl shadow-lg text-xl hover:scale-101 transition-all duration-300 glow font-urbanist"
               size="lg"
               asChild
            >
               <Link className="flex items-center gap-1" href="#get-started">
                  GET STARTED{" "}
                  <>
                     <Image
                        src={"/arrow-right.png"}
                        width={8}
                        height={6}
                        className="ml-1"
                        alt="arrow right"
                     />
                  </>
               </Link>
            </Button>
            <p className="text-xs text-white mt-2 text-center">
               1-minute quiz for personalized insights
            </p>
         </div>
      </div>
   );
}
