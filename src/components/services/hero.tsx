'use client';

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

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
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
                    {data.headline}
                </h1>
                <p className="text-xl sm:text-2xl text-gray-600 mb-6">{data.tagline}</p>
                <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                    {data.para}
                </p>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    {data.cta}
                </Button>
            </motion.div>
        </section>
    )
}