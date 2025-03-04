import type { Meta, StoryObj } from "@storybook/react";

import { PricingCard } from "./pricing-card";

const meta = {
    title: "Components/Pricing Card",
    component: PricingCard,
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
} satisfies Meta<typeof PricingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        title: "Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: { monthly: 10, yearly: 100 },
        features: [
            {
                id: "1",
                label: "Example Feature One",
                available: true,
            },
            {
                id: "2",
                label: "Example Feature Two",
                available: false,
            },
        ],
    },
};

export const Focused: Story = {
    args: {
        isFocused: true,
        title: "Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: { monthly: 20, yearly: 200 },
        features: [
            {
                id: "1",
                label: "Example Feature One",
                available: true,
            },
            {
                id: "2",
                label: "Example Feature Two",
                available: false,
            },
        ],
    },
};
