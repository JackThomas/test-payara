type ShadowSizes = {
    [key: string]: string;
};

type ShadowValues = {
    [key: string]: ShadowSizes;
};

const shadowValues: ShadowValues = {
    light: {
        sm: "0px 4px 14px 0px #a78bfa",
        base: "0px 4px 24px 0px #a78bfa",
        md: "0px 4px 34px 0px #a78bfa",
        l: "0px 4px 44px 0px #a78bfa",
        xl: "0px 4px 54px 0px #a78bfa",
        "2xl": "0px 4px 74px 0px #a78bfa",
    },
    dark: {
        sm: "0px 4px 14px 0px #020617",
        base: "0px 4px 24px 0px #020617",
        md: "0px 4px 34px 0px #020617",
        l: "0px 4px 44px 0px #020617",
        xl: "0px 4px 54px 0px #020617",
        "2xl": "0px 4px 74px 0px #020617",
    },
};

interface ShadowItemProps {
    name: string;
    boxShadow: string;
}

const ShadowItem = ({ name, boxShadow }: ShadowItemProps) => {
    return (
        <div className="flex flex-col gap-4">
            <div
                className="flex items-center justify-center bg-violet-400 rounded-x-small"
                style={{
                    width: 128,
                    height: 128,
                }}
            >
                <div
                    className="rounded-full bg-violet-900"
                    style={{
                        width: 64,
                        height: 64,
                        boxShadow,
                    }}
                />
            </div>
            <div className="flex flex-col gap-0.5">
                <span className="text-gray-100 text-sm first-letter:uppercase">
                    {name}
                </span>
                <span className="text-gray-500 text-xs">{boxShadow}</span>
            </div>
        </div>
    );
};

const Shadow = () =>
    Object.keys(shadowValues).map((name) => {
        const sizes = Object.keys(shadowValues[name]);
        return (
            <div key={name} className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-violet-50 first-letter:uppercase mb-2">
                    {name}
                </h2>
                <div className="grid grid-cols-3 gap-6">
                    {sizes.map((size) => (
                        <ShadowItem
                            key={size}
                            name={size}
                            boxShadow={shadowValues[name][size]}
                        />
                    ))}
                </div>
            </div>
        );
    });

export { Shadow };
