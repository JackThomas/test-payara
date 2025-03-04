import React, { useMemo, useState } from "react";
import { BillingPeriodContext } from "../../context/billing-period-context";
import { BillingPeriod } from "../../types/billing-period.type";

export const INITIAL_BILLING_PERIOD = "monthly";

export function BillingPeriodProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>(
        INITIAL_BILLING_PERIOD
    );

    const billingPeriodValue = useMemo(
        () => ({ billingPeriod, setBillingPeriod }),
        [billingPeriod]
    );

    return (
        <BillingPeriodContext.Provider value={billingPeriodValue}>
            {children}
        </BillingPeriodContext.Provider>
    );
}
