import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Button } from "~/components/ui/button";

describe("Button Component", () => {
   it("renders with default props", () => {
      render(<Button>Click me</Button>);

      const button = screen.getByRole("button", { name: "Click me" });
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass("bg-brand-pink");
      expect(button).toHaveClass("text-white");
      expect(button).toHaveClass("py-2");
      expect(button).toHaveClass("px-5");
      expect(button).toHaveClass("rounded-full");
   });

   it("renders with secondary variant", () => {
      render(<Button variant="secondary">Secondary</Button>);

      const button = screen.getByRole("button", { name: "Secondary" });
      expect(button).toHaveClass("bg-brand-cyan");
      expect(button).toHaveClass("text-black");
   });

   it("renders with outline variant", () => {
      render(<Button variant="outline">Outline</Button>);

      const button = screen.getByRole("button", { name: "Outline" });
      expect(button).toHaveClass("border");
      expect(button).toHaveClass("border-white");
      expect(button).toHaveClass("text-white");
   });

   it("renders with different sizes", () => {
      render(<Button size="sm">Small</Button>);
      expect(screen.getByRole("button", { name: "Small" })).toHaveClass(
         "text-sm"
      );

      render(<Button size="lg">Large</Button>);
      expect(screen.getByRole("button", { name: "Large" })).toHaveClass("py-3");
      expect(screen.getByRole("button", { name: "Large" })).toHaveClass("px-6");
   });

   it("renders as a link when asChild is true", () => {
      render(
         <Button asChild>
            <a href="/test">Link Button</a>
         </Button>
      );

      const link = screen.getByRole("link", { name: "Link Button" });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "/test");
   });
});
