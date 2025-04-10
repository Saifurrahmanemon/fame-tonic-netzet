import { type VariantProps, cva } from "class-variance-authority";
import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "~/lib/utils";

// Updated for Tailwind v4 class naming conventions
const buttonVariants = cva(
   "inline-flex items-center justify-center gap-2 font-extrabold tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
   {
      variants: {
         variant: {
            primary: "bg-brand-pink text-white hover:opacity-90",
            secondary: "bg-brand-cyan text-black hover:opacity-90",
            outline: "border border-white text-white hover:bg-white/10",
         },
         size: {
            sm: "py-2 px-4 text-sm rounded-full",
            md: "py-2 px-5 rounded-full",
            lg: "py-3 px-6 rounded-full",
         },
      },
      defaultVariants: {
         variant: "primary",
         size: "md",
      },
   }
);

export interface ButtonProps
   extends ButtonHTMLAttributes<HTMLButtonElement>,
      VariantProps<typeof buttonVariants> {
   asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
   ({ className, variant, size, asChild = false, ...props }, ref) => {
      const Comp = asChild ? "span" : "button";
      return (
         <Comp
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref}
            {...props}
         />
      );
   }
);
Button.displayName = "Button";

export { Button, buttonVariants };
