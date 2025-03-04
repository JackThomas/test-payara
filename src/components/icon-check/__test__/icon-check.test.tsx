import { render, screen } from "@testing-library/react";
import { IconCheck } from "../icon-check";

describe("IconCheck component", () => {
    test("renders with default size and fill", () => {
        render(<IconCheck />);
        const svgElement = screen.getByTestId("icon-check");
        expect(svgElement).toBeInTheDocument();
        expect(svgElement).toHaveAttribute("width", "32");
        expect(svgElement).toHaveAttribute("height", "32");
        expect(svgElement).toHaveAttribute("fill", "currentColor");
    });

    test("renders with custom size", () => {
        render(<IconCheck size={48} />);
        const svgElement = screen.getByTestId("icon-check");
        expect(svgElement).toBeInTheDocument();
        expect(svgElement).toHaveAttribute("width", "48");
        expect(svgElement).toHaveAttribute("height", "48");
    });

    test("renders with custom fill color", () => {
        render(<IconCheck fill="red" />);
        const svgElement = screen.getByTestId("icon-check");
        expect(svgElement).toBeInTheDocument();
        expect(svgElement).toHaveAttribute("fill", "red");
    });
});
