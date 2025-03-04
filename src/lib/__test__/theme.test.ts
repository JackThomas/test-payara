import { updateTheme } from "../theme";

describe("updateTheme", () => {
    beforeEach(() => {
        document.documentElement.className = "";
        localStorage.clear();
    });

    it("should set the theme to light when system theme is light", () => {
        window.matchMedia = jest.fn().mockImplementation((query) => {
            return {
                matches: query === "(prefers-color-scheme: light)",
                media: query,
                onchange: null,
                addListener: jest.fn(),
                removeListener: jest.fn(),
            };
        });

        updateTheme("system");

        expect(document.documentElement.classList.contains("light")).toBe(true);
        expect(document.documentElement.classList.contains("dark")).toBe(false);
    });

    it("should set the theme to dark when system theme is dark", () => {
        window.matchMedia = jest.fn().mockImplementation((query) => {
            return {
                matches: query === "(prefers-color-scheme: dark)",
                media: query,
                onchange: null,
                addListener: jest.fn(),
                removeListener: jest.fn(),
            };
        });

        updateTheme("system");

        expect(document.documentElement.classList.contains("dark")).toBe(true);
        expect(document.documentElement.classList.contains("light")).toBe(
            false
        );
    });

    it("should set the theme to light", () => {
        updateTheme("light");

        expect(document.documentElement.classList.contains("light")).toBe(true);
        expect(document.documentElement.classList.contains("dark")).toBe(false);
    });

    it("should set the theme to dark", () => {
        updateTheme("dark");

        expect(document.documentElement.classList.contains("dark")).toBe(true);
        expect(document.documentElement.classList.contains("light")).toBe(
            false
        );
    });

    it("should remove system class when setting light theme", () => {
        document.documentElement.classList.add("system");
        updateTheme("light");

        expect(document.documentElement.classList.contains("system")).toBe(
            false
        );
        expect(document.documentElement.classList.contains("light")).toBe(true);
    });

    it("should remove system class when setting dark theme", () => {
        document.documentElement.classList.add("system");
        updateTheme("dark");

        expect(document.documentElement.classList.contains("system")).toBe(
            false
        );
        expect(document.documentElement.classList.contains("dark")).toBe(true);
    });
});
