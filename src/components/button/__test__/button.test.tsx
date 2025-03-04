import { render, screen } from "@testing-library/react";
import { Button } from "../button";

describe("Button component", () => {
    test("renders with default props", () => {
        render(<Button>Default Button</Button>);
        const buttonElement = screen.getByRole("button", {
            name: /default button/i,
        });
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass("bg-orange-500");
    });

    test("renders with primary variant", () => {
        render(<Button variant="primary">Primary Button</Button>);
        const buttonElement = screen.getByRole("button", {
            name: /primary button/i,
        });
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass("bg-orange-500");
    });

    test("renders with secondary variant", () => {
        render(<Button variant="secondary">Secondary Button</Button>);
        const buttonElement = screen.getByRole("button", {
            name: /secondary button/i,
        });
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass("bg-violet-100");
    });

    test("renders with custom className", () => {
        render(<Button className="custom-class">Custom Class Button</Button>);
        const buttonElement = screen.getByRole("button", {
            name: /custom class button/i,
        });
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass("custom-class");
    });

    test("renders as child component", () => {
        render(
            <Button asChild>
                <a href="/test">Child Link</a>
            </Button>
        );
        const linkElement = screen.getByRole("link", { name: /child link/i });
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute("href", "/test");
    });
});
