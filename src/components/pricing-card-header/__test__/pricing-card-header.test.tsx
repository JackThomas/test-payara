import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PricingCardHeader } from "../pricing-card-header";

describe("PricingCardHeader", () => {
    test("renders the header text correctly", () => {
        render(<PricingCardHeader />);
        const headerElement = screen.getByText(/Powerful features for/i);
        expect(headerElement).toBeInTheDocument();
    });

    test("renders the highlighted text correctly", () => {
        render(<PricingCardHeader />);
        const highlightedText = screen.getByText(/powerful creators/i);
        expect(highlightedText).toBeInTheDocument();
        expect(highlightedText).toHaveClass(
            "text-violet-600",
            "dark:text-violet-500"
        );
    });

    test("renders the paragraph text correctly", () => {
        render(<PricingCardHeader />);
        const paragraphElement = screen.getByText(
            /Choose a plan that's right for you/i
        );
        expect(paragraphElement).toBeInTheDocument();
    });
});
