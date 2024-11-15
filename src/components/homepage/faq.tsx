'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { homepage } from '@/lib/constants'
import { Clip } from '../animations/clip'

export default function Faq() {
    const faqS = homepage.faqSection
    const [activeImage, setActiveImage] = useState(faqS.default)

    return (
        <section className="relative p-24 overflow-hidden h-screen">
            <AnimatePresence mode='popLayout'>
                {/* Background Image */}
                <Image
                    src={`${faqS.path}${activeImage}`}
                    alt="Background"
                    fill
                    className="object-cover h-full w-full"
                />
            </AnimatePresence>
            {/* Glass Overlay */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-md" />

            <Clip start='centerX' className="container rounded-sm mx-auto p-4 relative z-10 bg-white/80">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Left Column */}
                    <div className="py-3 uppercase">
                        <Clip start='top'>
                            <h2 className="text-2xl font-extrabold tracking-wider text-slate-500">
                                {faqS.subtitle}{" "}
                            </h2>
                            <h2 className='text-5xl font-extrabold text-slate-800 pb-4'>
                                {faqS.title}
                            </h2>
                        </Clip>
                        <AnimatePresence mode="popLayout">
                            <motion.div
                                key={activeImage}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="relative aspect-video rounded-lg overflow-hidden shadow-xl"
                            >
                                <Image
                                    src={`${faqS.path}${activeImage}`}
                                    alt="FAQ illustration"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6 py-5">

                        <Clip start='bottom'>
                            <p className="text-lg text-slate-950 text-justify font-serif">
                                {faqS.introParagraph}
                            </p>
                        </Clip>
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full"
                            onValueChange={(value) => {
                                if (value) {
                                    console.log(activeImage)
                                    const selectedFaq = faqS.faq.find
                                        (item => item.question === value)
                                    setActiveImage(selectedFaq ? `${selectedFaq.image}` : faqS.default)
                                } else {
                                    setActiveImage(faqS.default)
                                }
                            }}
                        >
                            {faqS.faq.map((item, index) => (
                                <AccordionItem key={index} value={item.question}>
                                    <AccordionTrigger className="text-left font-semibold">
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </Clip>
        </section>
    )
}