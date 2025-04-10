import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Footer } from "~/components/layout/footer";

describe("Footer Component", () => {
   it("renders correctly", () => {
      render(<Footer />);

      // Check if footer is rendered with correct test id
      expect(screen.getByTestId("footer")).toBeInTheDocument();

      // Check if footer has correct classes
      const footer = screen.getByTestId("footer");
      expect(footer).toHaveClass("py-4");
      expect(footer).toHaveClass("text-center");
      expect(footer).toHaveClass("text-xs");
      expect(footer).toHaveClass("text-gray-500");
   });
});
