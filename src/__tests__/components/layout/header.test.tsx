import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Header } from "~/components/layout/header";

// Mock the useMobile hook
jest.mock("~/hooks/use-mobile", () => ({
   useMobile: jest.fn(),
}));

describe("Header Component", () => {
   const mockUseMobile = jest.requireMock("~/hooks/use-mobile").useMobile;

   beforeEach(() => {
      // Reset the mock before each test
      mockUseMobile.mockReset();
   });

   it("renders correctly on desktop", () => {
      mockUseMobile.mockReturnValue(false);
      render(<Header />);

      // Check if logo is rendered
      expect(screen.getByTestId("logo")).toBeInTheDocument();

      // Check if navigation links are rendered
      expect(screen.getByText("About us")).toBeInTheDocument();
      expect(screen.getByText("Contact")).toBeInTheDocument();

      // Check if menu button is not rendered
      expect(
         screen.queryByRole("button", { name: /menu/i })
      ).not.toBeInTheDocument();
   });

   it("renders correctly on mobile", () => {
      mockUseMobile.mockReturnValue(true);
      render(<Header />);

      // Check if logo is rendered
      expect(screen.getByTestId("logo")).toBeInTheDocument();

      // Check if menu button is rendered
      expect(
         screen.getByRole("button", { name: /open menu/i })
      ).toBeInTheDocument();

      // Check if navigation links are not visible initially
      expect(screen.queryByText("About us")).not.toBeInTheDocument();
      expect(screen.queryByText("Contact")).not.toBeInTheDocument();
   });

   it("opens and closes mobile menu", () => {
      mockUseMobile.mockReturnValue(true);
      render(<Header />);

      // Click menu button to open
      const menuButton = screen.getByRole("button", { name: /open menu/i });
      fireEvent.click(menuButton);

      // Check if menu is open
      expect(screen.getByText("About us")).toBeInTheDocument();
      expect(screen.getByText("Contact")).toBeInTheDocument();
      expect(
         screen.getByRole("button", { name: /close menu/i })
      ).toBeInTheDocument();

      // Click menu button to close
      fireEvent.click(menuButton);

      // Check if menu is closed
      expect(screen.queryByText("About us")).not.toBeInTheDocument();
      expect(screen.queryByText("Contact")).not.toBeInTheDocument();
      expect(
         screen.getByRole("button", { name: /open menu/i })
      ).toBeInTheDocument();
   });

   it("closes menu when clicking a link", () => {
      mockUseMobile.mockReturnValue(true);
      render(<Header />);

      // Open menu
      fireEvent.click(screen.getByRole("button", { name: /open menu/i }));

      // Click About us link
      fireEvent.click(screen.getByText("About us"));

      // Check if menu is closed
      expect(screen.queryByText("About us")).not.toBeInTheDocument();
      expect(screen.queryByText("Contact")).not.toBeInTheDocument();
   });
});
