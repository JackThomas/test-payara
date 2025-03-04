import { createContext } from "react";
import { Theme } from "../types/theme.type";

export const ThemeContext = createContext<{
    theme: Theme;
    setTheme: (theme: Theme) => void;
}>({
    theme: "system",
    setTheme: () => {},
});
