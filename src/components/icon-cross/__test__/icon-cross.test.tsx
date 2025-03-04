import { render, screen } from "@testing-library/react";
import { IconCross } from "../icon-cross";

describe("IconCross component", () => {
    test("renders with default size and fill", () => {
        render(<IconCross />);
        const svgElement = screen.getByTestId("icon-cross");
        expect(svgElement).toBeInTheDocument();
        expect(svgElement).toHaveAttribute("width", "32");
        expect(svgElement).toHaveAttribute("height", "32");
        expect(svgElement).toHaveAttribute("fill", "currentColor");
    });

    test("renders with custom size", () => {
        render(<IconCross size={48} />);
        const svgElement = screen.getByTestId("icon-cross");
        expect(svgElement).toBeInTheDocument();
        expect(svgElement).toHaveAttribute("width", "48");
        expect(svgElement).toHaveAttribute("height", "48");
    });

    test("renders with custom fill color", () => {
        render(<IconCross fill="red" />);
        const svgElement = screen.getByTestId("icon-cross");
        expect(svgElement).toBeInTheDocument();
        expect(svgElement).toHaveAttribute("fill", "red");
    });
});
