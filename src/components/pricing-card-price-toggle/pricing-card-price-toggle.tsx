import { useContext } from "react";
import { BillingPeriodContext } from "../../context/billing-period-context";
import { Switch } from "../ui/switch";
import { cn } from "../../lib/utils";
import { Label } from "../ui/label";

const PricingCardPriceToggle = () => {
    const { billingPeriod, setBillingPeriod } =
        useContext(BillingPeriodContext);

    return (
        <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-4">
                <Label
                    htmlFor="billing-toggle"
                    className={cn(
                        "text-sm font-medium",
                        billingPeriod === "monthly"
                            ? "text-violet-500 dark:text-violet-50"
                            : "text-gray-300 dark:text-gray-400"
                    )}
                >
                    Monthly
                </Label>

                <Switch
                    id="billing-toggle"
                    checked={billingPeriod === "yearly"}
                    onCheckedChange={(checked) =>
                        setBillingPeriod(checked ? "yearly" : "monthly")
                    }
                    role="checkbox"
                />

                <div className="flex items-center gap-2">
                    <Label
                        htmlFor="billing-toggle"
                        className={cn(
                            "text-sm font-medium",
                            billingPeriod === "yearly"
                                ? "text-violet-500 dark:text-violet-50"
                                : "text-gray-300 dark:text-gray-400"
                        )}
                    >
                        Yearly
                    </Label>
                </div>
            </div>
        </div>
    );
};

export { PricingCardPriceToggle };
