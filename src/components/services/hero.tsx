'use client';

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Clip, Fade } from '../animations/clip';
import { redirect } from 'next/navigation';

interface HeroData {
    headline: string
    tagline: string
    para: string
    cta: string
}

interface HeroProps {
    data: HeroData
}


export default function Hero({ data }: HeroProps) {
    return (
        <Clip start='centerX' className={`min-h-[80vh] relative bg-[url('/services/bg-hero.jpg')] bg-cover bg-bottom `}>
            <section className="bg-cyan-800/50 min-h-[80vh] md:p-20 px-10 py-20 mx-auto flex justify-center items-center text-center">
                <Fade>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-sans max-w-7xl font-extrabold text-white mb-8">
                        {data.headline}
                    </h1>
                    <p className="uppercase font-semibold text-xl md:text-3xl text-slate-200 mb-6 font-sans mx-8">{data.tagline}</p>
                    <p className=" md:text-xl text-pretty md:text-pretty text-cyan-50 mb-8 max-w-6xl mx-auto whitespace-pre-wrap">
                        {data.para}
                    </p>
                    <Button onClick={() => { redirect('/contact') }} size="lg" className="font-serif bg-white text-cyan-950 hover:bg-cyan-200 ">
                        {data.cta}
                    </Button>
                </Fade>
            </section>
        </Clip>
    )
}