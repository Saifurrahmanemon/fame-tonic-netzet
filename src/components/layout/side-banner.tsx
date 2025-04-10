export function SaleBanner() {
   return (
      <div
         className="gradient-banner py-2 px-4 text-center"
         data-testid="sale-banner"
      >
         <p className="text-base md:text-xl font-semibold">
            🚀{" "}
            <span className="text-primary font-figtree">
               FRESH BEGINNINGS SALE:
            </span>{" "}
            Extra 25% OFF, Limited Spots - start your journey today!
         </p>
      </div>
   );
}
