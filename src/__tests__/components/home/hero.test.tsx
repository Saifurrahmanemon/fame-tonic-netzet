import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Hero } from "~/components/home/hero";

describe("Hero Component", () => {
   it("renders correctly", () => {
      render(<Hero />);

      // Check if component is rendered with correct test id
      expect(screen.getByTestId("hero-section")).toBeInTheDocument();

      // Check if main heading is rendered
      expect(
         screen.getByText(
            /Want to Turn Social Media Into a Profitable Career?/i
         )
      ).toBeInTheDocument();

      // Check if subheading is rendered
      expect(
         screen.getByText(/Discover your way to success with Fametonic:/i)
      ).toBeInTheDocument();

      // Check if feature list is rendered
      expect(screen.getByTestId("feature-list")).toBeInTheDocument();

      // Check if call to action is rendered
      expect(screen.getByTestId("call-to-action")).toBeInTheDocument();

      // Check if phone display is rendered
      expect(screen.getByTestId("phone-display")).toBeInTheDocument();

      // Check if terms text is rendered
      expect(
         screen.getByText(/By clicking "Get Started", you agree with Terms/i)
      ).toBeInTheDocument();
      expect(
         screen.getByText(/Fametonic 2025 ©All Rights Reserved./i)
      ).toBeInTheDocument();
   });
});
