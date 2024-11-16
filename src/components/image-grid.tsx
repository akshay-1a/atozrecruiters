'use client'

import React from 'react'
import { homepage } from "@/lib/constants"
import Image from 'next/image'
import { Clip } from "./animations/clip";

export default function ImageGrid() {
    const data = homepage.hero.links
    return (
        <div className='relative w-full h-full flex flex-col items-end gap-5'>
            <div className='flex gap-5 items-end'>
                <Box style="h-20 w-20 bg-[#0171A3] hidden md:block" />
                <AnimatedImage
                    src={data[1]}
                    style="h-full w-56 md:h-60 md:w-60"
                    alt="Data analytics" />
                {/* <div className='flex items-end gap-5'>
                </div> */}
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
        <Clip start='left'>
            <div className={`drop-shadow relative rounded ${style}`
            } />
        </Clip>
    )
}

interface AnimatedImageProps {
    src: string
    alt: string
    style?: string
}

export function AnimatedImage({ src, alt, style = '' }: AnimatedImageProps) {
    return (
        <Clip start='left'>
            <Image
                src={`/homepage/hero/${src}.jpg`}
                alt={alt}
                width={2000}
                height={2000}
                className={`drop-shadow object-cover rounded ${style}`}
            />
        </Clip>
    )
}