import type { Meta, StoryObj } from "@storybook/react";
import { ThemeContext } from "../../context/theme-context";
import { ThemeToggle } from "./theme-toggle";

const meta = {
    title: "Components/Theme Toggle",
    component: ThemeToggle,
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
            <ThemeContext.Provider
                value={{ theme: "light", setTheme: () => {} }}
            >
                <Story />
            </ThemeContext.Provider>
        ),
    ],
} satisfies Meta<typeof ThemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {},
};
