import { BillingPeriod } from "./../types/billing-period.type";
import { createContext } from "react";

export const BillingPeriodContext = createContext<{
    billingPeriod: BillingPeriod;
    setBillingPeriod: (billingPeriod: BillingPeriod) => void;
}>({
    billingPeriod: "monthly",
    setBillingPeriod: () => {},
});
