import type { Meta, StoryObj } from "@storybook/react";

import { Shadow } from "./shadow";

const meta = {
    title: "Theme/Shadow",
    component: Shadow,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Shadow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Shadows: Story = {};
