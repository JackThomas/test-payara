import type { Meta, StoryObj } from "@storybook/react";
import { IconCheck } from "./icon-check";

const meta = {
    title: "Components/Icons/Check",
    component: IconCheck,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        size: {
            control: {
                min: 16,
                max: 200,
                value: 40,
            },
        },
        fill: {
            control: {
                type: "color",
                presetColors: [
                    "#c4b5fd",
                    "#a78bfa",
                    "#8b5cf6",
                    "#7c3aed",
                    "#6d28d9",
                    "#5b21b6",
                    "#4c1d95",
                    "#2e1065",
                ],
            },
        },
    },
    args: {
        fill: "#6d28d9",
    },
} satisfies Meta<typeof IconCheck>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {};
