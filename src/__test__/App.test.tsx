import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("App", () => {
    beforeAll(() => {
        Object.defineProperty(window, "matchMedia", {
            writable: true,
            value: jest.fn().mockImplementation((query) => ({
                matches: false,
                media: query,
                onchange: null,
                addListener: jest.fn(), // Deprecated
                removeListener: jest.fn(), // Deprecated
                addEventListener: jest.fn(),
                removeEventListener: jest.fn(),
                dispatchEvent: jest.fn(),
            })),
        });
    });

    it("renders the PricingCardGrid", () => {
        render(<App />);
        const pricingCardGrid = screen.getByTestId("pricing-card-grid");
        expect(pricingCardGrid).toBeInTheDocument();
    });

    it("renders the correct number of PricingCards", () => {
        render(<App />);
        const pricingCards = screen.getAllByTestId("pricing-card");
        expect(pricingCards.length).toBe(3);
    });

    it("renders the ThemeToggle", () => {
        render(<App />);
        const themeToggle = screen.getByTestId("theme-toggle");
        expect(themeToggle).toBeInTheDocument();
    });
});
