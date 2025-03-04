import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeToggle } from "../theme-toggle";
import { ThemeContext } from "../../../context/theme-context";

describe("ThemeToggle", () => {
    const setTheme = jest.fn();

    beforeEach(() => {
        render(
            <ThemeContext.Provider value={{ theme: "system", setTheme }}>
                <ThemeToggle />
            </ThemeContext.Provider>
        );
    });

    it("renders the ThemeToggle component", () => {
        const toggleElement = screen.getByTestId("theme-toggle");
        expect(toggleElement).toBeInTheDocument();
    });

    it("renders the toggle buttons", () => {
        const systemButton = screen.getByLabelText("System theme");
        const lightButton = screen.getByLabelText("Light theme");
        const darkButton = screen.getByLabelText("Dark theme");

        expect(systemButton).toBeInTheDocument();
        expect(lightButton).toBeInTheDocument();
        expect(darkButton).toBeInTheDocument();
    });

    it("calls onThemeChange with 'light' when the light theme button is clicked", () => {
        const lightButton = screen.getByLabelText("Light theme");
        fireEvent.click(lightButton);
        expect(setTheme).toHaveBeenCalledWith("light");
    });

    it("calls onThemeChange with 'dark' when the dark theme button is clicked", () => {
        const darkButton = screen.getByLabelText("Dark theme");
        fireEvent.click(darkButton);
        expect(setTheme).toHaveBeenCalledWith("dark");
    });
});
