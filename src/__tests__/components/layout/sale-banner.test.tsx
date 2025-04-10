import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { SaleBanner } from "~/components/layout/side-banner";

describe("SaleBanner Component", () => {
   it("renders correctly", () => {
      render(<SaleBanner />);

      // Check if banner is rendered with correct test id
      expect(screen.getByTestId("sale-banner")).toBeInTheDocument();

      // Check if banner has correct classes
      const banner = screen.getByTestId("sale-banner");
      expect(banner).toHaveClass("gradient-banner");
      expect(banner).toHaveClass("py-2");
      expect(banner).toHaveClass("px-4");
      expect(banner).toHaveClass("text-center");

      // Check if text content is rendered correctly
      expect(screen.getByText(/FRESH BEGINNINGS SALE:/i)).toBeInTheDocument();
      expect(screen.getByText(/Extra 25% OFF/i)).toBeInTheDocument();
      expect(screen.getByText(/Limited Spots/i)).toBeInTheDocument();
   });
});
