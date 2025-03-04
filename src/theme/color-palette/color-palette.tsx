type ColorShades = {
    [key: number]: string;
};

type HexColors = {
    [key: string]: ColorShades;
};

const hexColors: HexColors = {
    gray: {
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#1e293b",
        900: "#0f172a",
        950: "#020617",
    },
    violet: {
        50: "#f5f3ff",
        100: "#ede9fe",
        200: "#ddd6fe",
        300: "#c4b5fd",
        400: "#a78bfa",
        500: "#8b5cf6",
        600: "#7c3aed",
        700: "#6d28d9",
        800: "#5b21b6",
        900: "#4c1d95",
        950: "#2e1065",
    },
    red: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d",
        950: "#450a0a",
    },
    orange: {
        50: "#fff7ed",
        100: "#ffedd5",
        200: "#fed7aa",
        300: "#fdba74",
        400: "#fb923c",
        500: "#f97316",
        600: "#ea580c",
        700: "#c2410c",
        800: "#9a3412",
        900: "#7c2d12",
        950: "#431407",
    },
    green: {
        50: "#f0fdf4",
        100: "#dcfce7",
        200: "#bbf7d0",
        300: "#86efac",
        400: "#4ade80",
        500: "#22c55e",
        600: "#16a34a",
        700: "#15803d",
        800: "#166534",
        900: "#14532d",
        950: "#052E16",
    },
};

interface ColorPaletteItemProps {
    hex: string;
}

const ColorPaletteItem = ({ hex }: ColorPaletteItemProps) => {
    return (
        <div className="d-flex align-items-center mb-2">
            <div
                className="rounded-x-small"
                style={{
                    width: 64,
                    height: 64,
                    backgroundColor: hex,
                }}
            />
            <span className="text-gray-500 text-xs text-capitalize">{hex}</span>
        </div>
    );
};

const ColorPalette = () =>
    Object.keys(hexColors).map((name) => {
        const shades = Object.keys(hexColors[name]);
        return (
            <div key={name} className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-violet-50 first-letter:uppercase mb-2">
                    {name}
                </h2>
                <div className="flex flex-wrap gap-2">
                    {shades.map((shade) => (
                        <ColorPaletteItem
                            key={shade}
                            hex={hexColors[name][parseInt(shade)]}
                        />
                    ))}
                </div>
            </div>
        );
    });

export { ColorPalette };
