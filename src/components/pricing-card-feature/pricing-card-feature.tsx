import { IconCheck } from "../icon-check/icon-check";
import { IconCross } from "../icon-cross/icon-cross";

interface PricingCardFeatureProps {
    label: string;
    available: boolean;
    isFocused?: boolean;
}

const PricingCardFeature = ({
    label,
    available,
    isFocused,
}: PricingCardFeatureProps) => {
    const styling = {
        icon: {
            available: "text-violet-400 dark:text-violet-300",
            unavailable: "text-violet-300 dark:text-gray-500",
            ...(isFocused && {
                available: "text-violet-50 dark:text-violet-200",
                unavailable: "text-violet-500",
            }),
        },
        label: {
            available: "text-gray-700 dark:text-violet-50",
            unavailable: "text-violet-400 dark:text-gray-400",
            ...(isFocused && {
                available: "text-violet-50 dark:text-gray-100",
                unavailable: "text-violet-400",
            }),
        },
    };

    return (
        <li className="flex space-x-4">
            <div
                className={`w-6 h-6 flex items-center justify-center ${
                    available
                        ? styling.icon.available
                        : styling.icon.unavailable
                }`}
                role="img"
            >
                {available ? <IconCheck /> : <IconCross />}
            </div>
            <span
                className={`text-base font-medium ${
                    available
                        ? styling.label.available
                        : styling.label.unavailable
                }`}
            >
                {label}
            </span>
        </li>
    );
};

export { PricingCardFeature };
