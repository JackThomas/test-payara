import type { Meta, StoryObj } from "@storybook/react";

import { ColorPalette } from "./color-palette";

const meta = {
    title: "Theme/Color Palette",
    component: ColorPalette,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof ColorPalette>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Palette: Story = {};
