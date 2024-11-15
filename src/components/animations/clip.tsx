'use client';

import { motion } from "framer-motion";

export function Clip({
    children,
    className = "",
    start = "top", // Default start direction
}: Readonly<{
    children: React.ReactNode;
    className?: string;
    start?: "left" | "right" | "top" | "bottom" | "centerX" | "centerY" | "circle";
}>) {
    // Map the start prop to the initial clipPath value
    const initialClipPath = {
        left: "inset(0 0 0 100%)",
        right: "inset(0 100% 0 0)",
        top: "inset(100% 0 0 0)",
        bottom: "inset(0 0 100% 0)",
        centerX: "inset(50% 0 50% 0)",
        centerY: "inset(0 50% 0 50%)",
        circle: "circle(0% at 50% 50%)", // Start as a small circle
    };

    // Define whileInView values for each type
    const whileInViewClipPath = {
        left: "inset(0 0 0 0)",
        right: "inset(0 0 0 0)",
        top: "inset(0 0 0 0)",
        bottom: "inset(0 0 0 0)",
        centerX: "inset(0 0 0 0)",
        centerY: "inset(0 0 0 0)",
        circle: "circle(150% at 50% 50%)", // Expand to cover the entire element
    };

    return (
        <motion.div
            initial={{ clipPath: initialClipPath[start] }}
            whileInView={{ clipPath: whileInViewClipPath[start] }}
            transition={{
                delay: 0.2,
                duration: 0.7, // Slightly longer for smoother circle animation
                ease: "easeInOut",
            }}
            viewport={{ once: true }}
            style={{
                willChange: "clip-path, transform", // Optimize rendering
                backfaceVisibility: "hidden", // Improve GPU usage
            }}
            className={`${className}`}
        >
            {children}
        </motion.div>
    );
}




export function PopEffect({
    children,
    className = "",
    type = "popup", // Default effect type
}: Readonly<{
    children: React.ReactNode;
    className?: string;
    type?: "popup" | "popin";
}>) {
    // Define the initial and animate states for the pop effect
    const variants = {
        popup: {
            initial: { scale: 0.2, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
        },
        popin: {
            initial: { scale: 1.4, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
        },
    };

    return (
        <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={variants[type]} // Use popup or popin effect based on type
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.5,
            }}
            style={{
                willChange: "transform, opacity", // Optimize animation
                backfaceVisibility: "hidden", // Improve GPU rendering
            }}
            className={`${className}`}
        >
            {children}
        </motion.div>
    );
}
