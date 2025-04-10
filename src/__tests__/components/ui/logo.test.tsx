import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Logo } from "~/components/ui/logo";

describe("Logo Component", () => {
   it("renders correctly for mobile", () => {
      render(<Logo isMobile={true} />);

      // Check if logo is rendered with correct test id
      expect(screen.getByTestId("logo")).toBeInTheDocument();

      // Check if image is rendered with correct dimensions for mobile
      const image = screen.getByRole("img");
      expect(image).toHaveAttribute("width", "120");
      expect(image).toHaveAttribute("height", "50");
   });

   it("renders correctly for desktop", () => {
      render(<Logo isMobile={false} />);

      // Check if logo is rendered with correct test id
      expect(screen.getByTestId("logo")).toBeInTheDocument();

      // Check if image is rendered with correct dimensions for desktop
      const image = screen.getByRole("img");
      expect(image).toHaveAttribute("width", "173");
      expect(image).toHaveAttribute("height", "74");
   });
});
