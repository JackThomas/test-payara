import type { Meta, StoryObj } from "@storybook/react";
import { PricingCardPriceToggle } from "./pricing-card-price-toggle";
import { BillingPeriodProvider } from "../billing-period-provider/billing-period-provider";

const meta = {
    title: "Components/Pricing Card Price Toggle",
    component: PricingCardPriceToggle,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        isFocused: {
            table: {
                disable: true,
            },
        },
    },
    args: {},
    decorators: [
        (Story) => (
            <BillingPeriodProvider>
                <Story />
            </BillingPeriodProvider>
        ),
    ],
} satisfies Meta<typeof PricingCardPriceToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {},
};
