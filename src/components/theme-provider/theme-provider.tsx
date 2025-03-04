import React, { useEffect, useMemo, useState } from "react";
import { ThemeContext } from "../../context/theme-context";
import { updateTheme } from "../../lib/theme";
import { Theme } from "../../types/theme.type";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>(null);

    useEffect(() => {
        const initialTheme = (localStorage.getItem("currentTheme") ??
            "system") as Theme;

        setTheme(initialTheme);
        updateTheme(initialTheme);
    }, []);

    const themeValue = useMemo(() => ({ theme, setTheme }), [theme]);

    useEffect(() => {
        const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
        const mqListener = ({ matches }: MediaQueryListEvent) => {
            if (theme !== "system") {
                return;
            }

            const nextTheme = matches ? "dark" : "light";
            updateTheme(nextTheme);
        };

        darkThemeMq.addEventListener("change", mqListener);
        return () => darkThemeMq.removeEventListener("change", mqListener);
    }, [theme, setTheme]);

    return (
        <ThemeContext.Provider value={themeValue}>
            {children}
        </ThemeContext.Provider>
    );
}
