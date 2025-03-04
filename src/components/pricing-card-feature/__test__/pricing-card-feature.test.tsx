import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { PricingCardFeature } from "../pricing-card-feature";

describe("PricingCardFeature", () => {
    it("should render with available styling when available is true", () => {
        const { getByText, getByRole } = render(
            <PricingCardFeature label="Feature 1" available={true} />
        );

        const icon = getByRole("img");
        const label = getByText("Feature 1");

        expect(icon).toHaveClass("text-violet-400 dark:text-violet-300");
        expect(label).toHaveClass("text-gray-700 dark:text-violet-50");
    });

    it("should render with unavailable styling when available is false", () => {
        const { getByText, getByRole } = render(
            <PricingCardFeature label="Feature 2" available={false} />
        );

        const icon = getByRole("img");
        const label = getByText("Feature 2");

        expect(icon).toHaveClass("text-violet-300 dark:text-gray-500");
        expect(label).toHaveClass("text-violet-400 dark:text-gray-400");
    });

    it("should render with focused available styling when isFocused is true and available is true", () => {
        const { getByText, getByRole } = render(
            <PricingCardFeature
                label="Feature 3"
                available={true}
                isFocused={true}
            />
        );

        const icon = getByRole("img");
        const label = getByText("Feature 3");

        expect(icon).toHaveClass("text-violet-50 dark:text-violet-200");
        expect(label).toHaveClass("text-violet-50 dark:text-gray-100");
    });

    it("should render with focused unavailable styling when isFocused is true and available is false", () => {
        const { getByText, getByRole } = render(
            <PricingCardFeature
                label="Feature 4"
                available={false}
                isFocused={true}
            />
        );

        const icon = getByRole("img");
        const label = getByText("Feature 4");

        expect(icon).toHaveClass("text-violet-500");
        expect(label).toHaveClass("text-violet-400");
    });
});
