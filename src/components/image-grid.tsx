'use client'

import React from 'react'
import { homepage } from "@/lib/constants"
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ImageGrid() {
    const data = homepage.hero.links
    return (
        <div className='relative w-full h-full flex flex-col items-end gap-5'>
            <div className='flex gap-5 items-end'>
                {/* <AnimatedImage
                    src={data[5]}
                    style="h-20 w-24 object-left opacity-80"
                    alt="For Hire" /> */}
                <div className='flex gap-5'>
                    <AnimatedImage
                        src={data[1]}
                        style="h-60 w-60"
                        alt="Data analytics" />
                </div>
                {/* <Box style="h-44 w-20 bg-red-400" /> */}
                <div className="flex flex-col gap-5">
                    <AnimatedImage
                        src={data[2]}
                        style="w-64 h-48 object-left"
                        alt="We are Hiring" />
                    <AnimatedImage
                        src={data[4]}
                        style="h-28 w-64 object-top"
                        alt="Data analytics" />
                </div>
            </div>
            <div className='flex gap-5'>
                <AnimatedImage
                    src={data[3]}
                    style="h-40 w-96"
                    alt="Data analytics" />
                <AnimatedImage
                    src={data[0]}
                    style="h-40 w-96"
                    alt="Data analytics" />
            </div>

        </div>
    )
}

const Box = ({ style }: any) => {
    return (
        <div className={`drop-shadow relative rounded ${style}`
        } />
    )
}

interface AnimatedImageProps {
    src: string
    alt: string
    style?: string
}

export function AnimatedImage({ src, alt, style = '' }: AnimatedImageProps) {
    return (
        <motion.div
            initial={{clipPath: "inset(0 0 0 100%)"}}
            whileInView={{clipPath: "inset(0 0 0 0)"}}
            transition={{
                type: "spring",
                stiffness: 70,
                damping: 15,
                mass: 1,
                ease: "linear",
                duration:"0.5",
                delay:0.5
            }}
            viewport={{ once: true }}
        >
            <Image
                src={`/homepage/hero/${src}.jpg`}
                alt={alt}
                width={2000}
                height={2000}
                className={`drop-shadow object-cover rounded ${style}`}
            />
        </motion.div>
    )
}