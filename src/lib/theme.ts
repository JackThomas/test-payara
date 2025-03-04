import { Theme } from "../types/theme.type";

export function updateTheme(theme: Theme) {
    if (theme === "system") {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
            .matches
            ? "dark"
            : "light";

        updateTheme(systemTheme);
        return;
    }

    if (theme === "light" || theme === "dark") {
        const root = document.documentElement;
        root.classList.remove("light", "dark", "system");

        root.classList.add(theme);
    }
}

export function onThemeChange(theme: Theme, setTheme: (theme: Theme) => void) {
    if (theme !== null) {
        localStorage.setItem("currentTheme", theme);
    } else {
        localStorage.removeItem("currentTheme");
    }
    updateTheme(theme);
    setTheme(theme);
}
