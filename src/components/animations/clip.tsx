'use client';

import { motion } from "framer-motion";

export function Clip({
    children,
    delay = 0.2,
    className = "",
    start = "top", // Default start direction
}: Readonly<{
    children: React.ReactNode;
    delay?: number;
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
                delay: delay,
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



type Direction = 'up' | 'down' | 'left' | 'right' | 'center'
type EffectType = 'in' | 'out'

export function Fade({
    children,
    className = "",
    direction = 'up',
    effectType = 'in',
    speed = 0.7,
    delay = 0.2,
    ease = [0.25, 0.1, 0.25, 1],
    distance = 150,
    viewportAmount = 0.5
}: Readonly<{
    children: React.ReactNode
    className?: string
    direction?: Direction
    effectType?: EffectType
    speed?: number
    delay?: number
    ease?: number[]
    distance?: number
    viewportAmount?: number
}>) {
    const getInitialPosition = (dir: Direction) => {
        switch (dir) {
            case 'up': return { y: distance }
            case 'down': return { y: -distance }
            case 'left': return { x: distance }
            case 'right': return { x: -distance }
            case 'center': return { scale: effectType === 'in' ? 1 - distance / 100 : 1 + distance / 100 }
            default: return {}
        }
    }

    const variants = {
        initial: {
            opacity: 0,
            ...getInitialPosition(direction),
        },
        animate: {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
        },
    }

    return (
        <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{
                once: true,
                amount: viewportAmount
            }}
            variants={variants}
            transition={{
                duration: speed,
                delay: delay,
                ease: ease,
            }}
            style={{
                willChange: 'transform, opacity',
                backfaceVisibility: 'hidden',
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
