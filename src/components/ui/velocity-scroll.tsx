"use client";

import { cn } from "@/lib/utils";
import { Company } from "@/lib/company";
import {
    motion,
    useAnimationFrame,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
    useVelocity,
} from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface VelocityScrollProps {
    companies: Company[];
    defaultVelocity?: number;
    className?: string;
}

interface ParallaxProps {
    children: React.ReactNode;
    baseVelocity: number;
    className?: string;
}

export const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function VelocityScroll({
    companies,
    defaultVelocity = 5,
    className,
}: VelocityScrollProps) {
    function ParallaxLogos({
        children,
        baseVelocity = 100,
        className,
    }: ParallaxProps) {
        const baseX = useMotionValue(0);
        const { scrollY } = useScroll();
        const scrollVelocity = useVelocity(scrollY);
        const smoothVelocity = useSpring(scrollVelocity, {
            damping: 50,
            stiffness: 400,
        });

        const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
            clamp: false,
        });

        const [repetitions, setRepetitions] = useState(1);
        const containerRef = useRef<HTMLDivElement>(null);
        const logosRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            const calculateRepetitions = () => {
                if (containerRef.current && logosRef.current) {
                    const containerWidth = containerRef.current.offsetWidth;
                    const logosWidth = logosRef.current.offsetWidth;
                    const newRepetitions = Math.ceil(containerWidth / logosWidth) + 2;
                    setRepetitions(newRepetitions);
                }
            };

            calculateRepetitions();

            window.addEventListener("resize", calculateRepetitions);
            return () => window.removeEventListener("resize", calculateRepetitions);
        }, [children]);

        const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`);

        const directionFactor = React.useRef<number>(1);
        useAnimationFrame((t, delta) => {
            let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

            if (velocityFactor.get() < 0) {
                directionFactor.current = -1;
            } else if (velocityFactor.get() > 0) {
                directionFactor.current = 1;
            }

            moveBy += directionFactor.current * moveBy * velocityFactor.get();

            baseX.set(baseX.get() + moveBy);
        });

        return (
            <div className="w-full overflow-hidden whitespace-nowrap" ref={containerRef}>
                <motion.div className={cn("inline-block", className)} style={{ x }}>
                    {Array.from({ length: repetitions }).map((_, i) => (
                        <div key={i} ref={i === 0 ? logosRef : null} className="inline-flex">
                            {children}
                        </div>
                    ))}
                </motion.div>
            </div>
        );
    }

    return (
        <section className="relative w-full py-6 bg-slate-900 text-cyan-50">
            <div className="absolute top-0 left-0 h-full w-8 pointer-events-none bg-gradient-to-r from-slate-900 to-transparent z-10" />
            <div className="absolute top-0 right-0 h-full w-8 pointer-events-none bg-gradient-to-l from-slate-900 to-transparent z-10" />
            <ParallaxLogos baseVelocity={defaultVelocity} className={className}>
                {companies.map((company, index) => (
                    <div key={index} className="inline-flex flex-col items-center mx-8">
                        <div className="bg-white rounded-xl p-1">
                        <Image
                            src={`/logos/${company.logo}.png`}
                            alt={`${company.name} logo`}
                            width={100}
                            height={100}
                            priority
                            className="w-20 h-20 object-contain"
                        />
                        </div>
                        <span className="mt-2 text-sm font-medium">{company.name}{index}</span>
                    </div>
                ))}
            </ParallaxLogos>
        </section>
    );
}
