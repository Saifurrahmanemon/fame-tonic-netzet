import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { FeatureList } from "~/components/home/feature-list";
import { FEATURES } from "~/constants/features";

describe("FeatureList Component", () => {
   it("renders correctly with features", () => {
      render(<FeatureList features={FEATURES} />);

      // Check if component is rendered with correct test id
      expect(screen.getByTestId("feature-list")).toBeInTheDocument();

      // Check if all features are rendered
      FEATURES.forEach((feature) => {
         expect(screen.getByText(feature.text)).toBeInTheDocument();
      });

      // Check if feature items have correct structure
      const featureItems = screen.getAllByRole("listitem");
      expect(featureItems).toHaveLength(FEATURES.length);

      featureItems.forEach((item) => {
         expect(item).toHaveClass("flex");
         expect(item).toHaveClass("items-start");
         expect(item).toHaveClass("gap-3");
      });
   });
});
