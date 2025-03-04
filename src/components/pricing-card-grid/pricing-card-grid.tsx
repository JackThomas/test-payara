import { ReactNode } from "react";
import { PricingCardHeader } from "../pricing-card-header/pricing-card-header";
import { PricingCardPriceToggle } from "../pricing-card-price-toggle/pricing-card-price-toggle";

interface PricingCardGridProps {
    children: ReactNode;
}

const PricingCardGrid = ({ children }: PricingCardGridProps) => (
    <div
        className="flex flex-col items-center gap-6"
        data-testid="pricing-card-grid"
    >
        <div className="flex flex-col items-center gap-8">
            <PricingCardHeader />
            <PricingCardPriceToggle />
        </div>
        <div className="flex flex-col items-center gap-2.5 md:flex-row">
            {children}
        </div>
    </div>
);

export { PricingCardGrid };
