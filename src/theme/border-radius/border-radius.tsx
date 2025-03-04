const radiusValues = {
    "x-small": "4px",
    small: "8px",
    medium: "16px",
    large: "32px",
    xlarge: "64px",
    pill: "9999px",
};

const BorderRadius = () => {
    return (
        <div className="grid grid-cols-3 gap-6">
            {Object.entries(radiusValues).map(([key, value]) => {
                return (
                    <div key={key} className="flex flex-col gap-4">
                        <div
                            className="bg-violet-400"
                            style={{
                                width: 240,
                                height: 140,
                                borderRadius: value,
                            }}
                        />
                        <div className="flex flex-col gap-0.5">
                            <span className="text-gray-100 text-sm text-capitalize">
                                {key}
                            </span>
                            <span className="text-gray-500 text-xs text-capitalize">
                                {value}
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export { BorderRadius };
