import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-x-small text-base font-medium transition-[background-color,color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-6 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
    {
        variants: {
            variant: {
                primary:
                    "bg-orange-500 text-violet-50 border border-orange-500 hover:bg-orange-600 hover:border-orange-600 hover:shadow-light-sm disabled:bg-violet-300 disabled:border-violet-300 dark:bg-violet-50 dark:text-violet-700 dark:border-violet-50 dark:hover:bg-violet-100 dark:hover:text-violet-700 dark:hover:border-violet-50 dark:hover:shadow-dark-sm dark:disabled:bg-violet-100 dark:disabled:text-violet-400 dark:disabled:border-violet-400",
                secondary:
                    "bg-violet-100 text-violet-700 border hover:bg-violet-100 hover:shadow-light-sm disabled:bg-transparent disabled:text-violet-400 dark:bg-gray-600 dark:text-violet-300 dark:hover:bg-gray-700 dark:hover:shadow-dark-sm dark:disabled:bg-gray-600 dark:disabled:text-gray-500",
            },
            size: {
                default: "h-11 px-5 py-2.5",
                icon: "h-10 w-10 p-1",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "default",
        },
    }
);

function Button({
    className,
    variant,
    size,
    asChild = false,
    ...props
}: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean;
    }) {
    const Comp = asChild ? Slot : "button";

    return (
        <Comp
            data-slot="button"
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        />
    );
}

export { Button };
