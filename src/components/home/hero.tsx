import { FEATURES } from "~/constants/features";
import { PhoneDisplay } from "../shared/PhoneDisplay";
import { CallToAction } from "./call-to-action";
import { FeatureList } from "./feature-list";

export function Hero() {
   return (
      <div
         className="container mx-auto px-4 md:px-8  w-full max-w-[1200px]"
         data-testid="hero-section"
      >
         <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/2 space-y-6">
               <div className="space-y-3 text-2xl md:text-4xl font-urbanist">
                  <h2 className=" font-extrabold leading-tight tracking-tight">
                     Want to Turn Social Media Into a Profitable Career?
                  </h2>
                  <h3 className="font-bold text-primary drop-shadow">
                     Discover your way to success with Fametonic:
                  </h3>
               </div>{" "}
               <FeatureList features={FEATURES} />
               <CallToAction />
               <div className="order-1 lg:order-2 text-gray text-center lg:text-start mt-4 xs:mx-20 font-figtree">
                  <p className="text-sm pt-4 lg:pt-0">
                     By clicking &quot;Get Started&quot;, you agree with Terms
                     and Conditions, Privacy Policy, Subscription Terms
                  </p>
                  <p className="text-xs mt-5 mb-2">
                     Fametonic 2025 ©All Rights Reserved.
                  </p>
               </div>
            </div>

            <div className="w-full md:w-1/2 relative">
               <PhoneDisplay />
            </div>
         </div>
      </div>
   );
}
