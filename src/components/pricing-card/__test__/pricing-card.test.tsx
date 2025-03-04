import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PricingCard } from "../pricing-card";

describe("PricingCard", () => {
    const features = [
        { id: "1", label: "Feature 1", available: true },
        { id: "2", label: "Feature 2", available: false },
    ];

    it("renders the title, description, and price correctly", () => {
        render(
            <PricingCard
                title="Basic Plan"
                description="This is a basic plan."
                price={{ monthly: 10, yearly: 100 }}
                features={features}
                isFocused={false}
            />
        );

        expect(screen.getByText("Basic Plan")).toBeInTheDocument();
        expect(screen.getByText("This is a basic plan.")).toBeInTheDocument();
        expect(screen.getByText("$10")).toBeInTheDocument();
        expect(screen.getByText("/ Month")).toBeInTheDocument();
    });

    it("applies the correct styles when isFocused is true", () => {
        render(
            <PricingCard
                title="Pro Plan"
                description="This is a pro plan."
                price={{ monthly: 20, yearly: 200 }}
                features={features}
                isFocused={true}
            />
        );

        const card = screen.getByTestId("pricing-card");
        expect(card).toHaveClass("bg-violet-700");
        expect(card).toHaveClass("shadow-light-l");
    });

    it("applies the correct styles when isFocused is false", () => {
        render(
            <PricingCard
                title="Pro Plan"
                description="This is a pro plan."
                price={{ monthly: 20, yearly: 200 }}
                features={features}
                isFocused={false}
            />
        );

        const card = screen.getByTestId("pricing-card");
        expect(card).toHaveClass("bg-violet-100");
        expect(card).toHaveClass("dark:bg-gray-700");
    });

    it("renders the features correctly", () => {
        render(
            <PricingCard
                title="Basic Plan"
                description="This is a basic plan."
                price={{ monthly: 10, yearly: 100 }}
                features={features}
                isFocused={false}
            />
        );

        expect(screen.getByText("Feature 1")).toBeInTheDocument();
        expect(screen.getByText("Feature 2")).toBeInTheDocument();
    });

    it("renders the button with correct variant", () => {
        render(
            <PricingCard
                title="Basic Plan"
                description="This is a basic plan."
                price={{ monthly: 10, yearly: 100 }}
                features={features}
                isFocused={true}
            />
        );

        const button = screen.getByText("Get Started Now");
        expect(button).toHaveClass("bg-orange-500");
    });
});
