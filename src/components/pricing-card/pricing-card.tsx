import { PricingCardFeature } from "../pricing-card-feature/pricing-card-feature";
import { Button } from "../button/button";
import { useContext } from "react";
import { BillingPeriodContext } from "../../context/billing-period-context";

interface Feature {
    id: string;
    label: string;
    available: boolean;
}

interface PricingCardProps {
    title: string;
    description: string;
    price: {
        monthly: number;
        yearly: number;
    };
    features: Feature[];
    isFocused?: boolean;
}

const PricingCard = ({
    title,
    description,
    price,
    features,
    isFocused,
}: PricingCardProps) => {
    const { billingPeriod } = useContext(BillingPeriodContext);
    return (
        <div
            className={`${
                isFocused
                    ? "bg-violet-700 shadow-light-l dark:shadow-dark-l py-17.5 md:max-w-[436px] z-2 -mx-5"
                    : "bg-violet-100 dark:bg-gray-700 py-10 md:max-w-[380px]"
            } w-full px-6 rounded-medium`}
            data-testid="pricing-card"
        >
            <div className="max-w-[330px]">
                <h2
                    className={`text-l font-medium mb-2.5 ${
                        isFocused
                            ? "text-violet-50 dark:text-gray-100"
                            : "text-violet-950 dark:text-violet-50"
                    }`}
                >
                    {title}
                </h2>
                <div
                    className={`text-base font-medium mb-5 ${
                        isFocused
                            ? "text-violet-50 dark:text-gray-100"
                            : "text-gray-700 dark:text-violet-100"
                    }`}
                >
                    <p>{description}</p>
                </div>
                <div className="flex items-center justify-start mb-6">
                    <p
                        className={`text-l font-medium ${
                            isFocused
                                ? "text-violet-50 dark:text-gray-100"
                                : "text-violet-950 dark:text-violet-50"
                        }`}
                    >
                        $
                        {billingPeriod === "monthly"
                            ? price.monthly
                            : price.yearly}
                    </p>
                    <span
                        className={`text-base font-medium  pt-1 ml-1 ${
                            isFocused
                                ? "text-violet-50 dark:text-gray-100"
                                : "text-gray-700 dark:text-violet-100"
                        }`}
                    >
                        / {billingPeriod === "monthly" ? "Month" : "Year"}
                    </span>
                </div>
                <div className="flex mb-10">
                    <Button
                        variant={isFocused ? "primary" : "secondary"}
                        className="flex-1"
                    >
                        Get Started Now
                    </Button>
                </div>
                <ul className="flex flex-col space-y-3">
                    {features.map(({ id, ...rest }) => (
                        <PricingCardFeature
                            key={id}
                            {...rest}
                            isFocused={isFocused}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export { PricingCard };
