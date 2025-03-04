import { render, screen, fireEvent } from "@testing-library/react";
import { PricingCardPriceToggle } from "../pricing-card-price-toggle";
import { BillingPeriodContext } from "../../../context/billing-period-context";
import { BillingPeriod } from "../../../types/billing-period.type";

describe("PricingCardPriceToggle", () => {
    const setBillingPeriod = jest.fn();

    interface BillingPeriodContextProps {
        billingPeriod: BillingPeriod;
        setBillingPeriod: jest.Mock;
    }

    const renderComponent = (billingPeriod: string): void => {
        render(
            <BillingPeriodContext.Provider
                value={
                    {
                        billingPeriod,
                        setBillingPeriod,
                    } as BillingPeriodContextProps
                }
            >
                <PricingCardPriceToggle />
            </BillingPeriodContext.Provider>
        );
    };

    test("renders Monthly label with correct styles when billing period is monthly", () => {
        renderComponent("monthly");
        const monthlyLabel = screen.getByText("Monthly");
        expect(monthlyLabel).toBeInTheDocument();
        expect(monthlyLabel).toHaveClass("text-violet-500 dark:text-violet-50");
    });

    test("renders Yearly label with correct styles when billing period is yearly", () => {
        renderComponent("yearly");
        const yearlyLabel = screen.getByText("Yearly");
        expect(yearlyLabel).toBeInTheDocument();
        expect(yearlyLabel).toHaveClass("text-violet-500 dark:text-violet-50");
    });

    test("renders Monthly label with gray styles when billing period is yearly", () => {
        renderComponent("yearly");
        const monthlyLabel = screen.getByText("Monthly");
        expect(monthlyLabel).toBeInTheDocument();
        expect(monthlyLabel).toHaveClass("text-gray-300 dark:text-gray-400");
    });

    test("renders Yearly label with gray styles when billing period is monthly", () => {
        renderComponent("monthly");
        const yearlyLabel = screen.getByText("Yearly");
        expect(yearlyLabel).toBeInTheDocument();
        expect(yearlyLabel).toHaveClass("text-gray-300 dark:text-gray-400");
    });

    test("calls setBillingPeriod with 'yearly' when switch is toggled to yearly", () => {
        renderComponent("monthly");
        const switchElement = screen.getByRole("checkbox");
        fireEvent.click(switchElement);
        expect(setBillingPeriod).toHaveBeenCalledWith("yearly");
    });

    test("calls setBillingPeriod with 'monthly' when switch is toggled to monthly", () => {
        renderComponent("yearly");
        const switchElement = screen.getByRole("checkbox");
        fireEvent.click(switchElement);
        expect(setBillingPeriod).toHaveBeenCalledWith("monthly");
    });
});
