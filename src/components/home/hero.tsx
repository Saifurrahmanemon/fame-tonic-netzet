import { FEATURES } from "~/constants/features";
import { PhoneDisplay } from "../shared/PhoneDisplay";
import { CallToAction } from "./call-to-action";
import { FeatureList } from "./feature-list";

export function Hero() {
   return (
      <div
         className="container mx-auto px-4 md:px-8 py-8 md:py-12"
         data-testid="hero-section"
      >
         <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            {/* Text Content */}
            <div className="w-full md:w-1/2 space-y-6">
               <div className="space-y-3">
                  <h2 className="text-2xl md:text-4xl font-extrabold leading-tight tracking-tight">
                     Want to Turn Social Media Into a Profitable Career?
                  </h2>
                  <h3 className="text-xl md:text-2xl font-bold text-[#00e7f9] tracking-tight">
                     Discover your way to success with Fametonic:
                  </h3>
               </div>{" "}
               <FeatureList features={FEATURES} />
               <CallToAction />
               <div className="text-xs text-gray-500 mt-6">
                  <p>
                     By clicking &quot;Get Started&quot;, you agree with Terms
                     and Conditions, Privacy Policy, Subscription Terms.
                  </p>
                  <p className="mt-2">Fametonic 2023 ©All Rights Reserved.</p>
               </div>
            </div>

            {/* Phone Image */}
            <div className="w-full md:w-1/2 relative">
               <PhoneDisplay />
            </div>
         </div>
      </div>
   );
}
