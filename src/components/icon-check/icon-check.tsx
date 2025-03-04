import { SVGProps } from "react";

interface IconCheckProps extends SVGProps<SVGSVGElement> {
    size?: number;
}

const IconCheck = ({ size = 32, fill }: IconCheckProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        data-testid="icon-check"
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill={fill ?? "currentColor"}
    >
        <path
            fillRule="evenodd"
            d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM21.793 13.1495C22.0597 12.8957 22.0701 12.4737 21.8162 12.207C21.5624 11.9403 21.1404 11.9299 20.8737 12.1838L13.6734 19.0379L11.1683 16.1763C10.9258 15.8992 10.5046 15.8713 10.2276 16.1138C9.95052 16.3563 9.92254 16.7775 10.1651 17.0545L13.128 20.4391C13.2477 20.5758 13.4179 20.6577 13.5993 20.666C13.7808 20.6742 13.9577 20.6081 14.0893 20.4829L21.793 13.1495Z"
        />
    </svg>
);

export { IconCheck };
