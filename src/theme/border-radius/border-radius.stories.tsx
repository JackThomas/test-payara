import type { Meta, StoryObj } from "@storybook/react";

import { BorderRadius } from "./border-radius";

const meta = {
    title: "Theme/Border Radius",
    component: BorderRadius,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof BorderRadius>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Radius: Story = {};
