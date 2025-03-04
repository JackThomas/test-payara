import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "./button";

const meta = {
    title: "Components/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        children: {
            name: "label",
        },
        variant: {
            control: "radio",
            options: ["primary", "secondary"],
        },
        asChild: {
            table: {
                disable: true,
            },
        },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: "Button Text",
        variant: "primary",
    },
};

export const Secondary: Story = {
    args: {
        children: "Button Text",
        variant: "secondary",
    },
};
