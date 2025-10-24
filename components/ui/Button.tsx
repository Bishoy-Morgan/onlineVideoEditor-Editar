"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { ReactNode, ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary";

interface ButtonProps extends ComponentPropsWithoutRef<typeof motion.button> {
    variant?: Variant;
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

export default function Button({
    variant = "primary",
    children,
    className,
    onClick,
    ...props
}: ButtonProps) {
    const baseStyles =
        "relative inline-flex items-center justify-center overflow-hidden rounded-md px-3 text-sm font-medium transition-all duration-300 focus:outline-none group cursor-pointer";

    const variants: Record<Variant, string> = {
        primary: `
            bg-black text-white
            before:absolute before:inset-0 before:bg-white
            before:origin-bottom before:scale-y-0 before:transition-transform before:duration-300 before:ease-out
            group-hover:before:scale-y-100
            group-hover:text-black
        `,
        secondary: `
            bg-white text-black border border-gray-300
            before:absolute before:inset-0 before:bg-black
            before:origin-bottom before:scale-y-0 before:transition-transform before:duration-300 before:ease-out
            group-hover:before:scale-y-100
            group-hover:text-white
        `,
    };

    return (
        <motion.button
            whileTap={{ scale: 0.97 }}
            className={clsx(baseStyles, variants[variant], className, onClick)}
        {...props}
        >
            <span className="relative z-10">
                {children}
            </span>
        </motion.button>
    );
}
