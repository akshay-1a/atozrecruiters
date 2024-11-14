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

export default function Faq() {
    const faqS = homepage.faqSection
    const [activeImage, setActiveImage] = useState(faqS.default)

    return (
        <section className="relative p-24 overflow-hidden h-screen">
            {/* Background Image */}
            <Image
                src={`${faqS.path}${activeImage}`}
                alt="Background"
                fill
                className="object-cover h-full w-full"
            />

            {/* Glass Overlay */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

            <div className="container rounded-sm mx-auto p-4 relative z-10 bg-white/80">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Left Column */}
                    <div className="py-3 uppercase">
                        <h2 className="text-3xl font-extrabold tracking-wider text-slate-400">
                            {faqS.title}{" "}
                        </h2>
                        <h2 className='text-5xl font-extrabold text-slate-800 pb-4'>
                            {faqS.subtitle}
                        </h2>
                        <AnimatePresence mode="wait">
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
                    <div className="space-y-6">
                        <p className="text-lg text-slate-950 text-justify">
                            {faqS.introParagraph}
                        </p>
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full"
                            onValueChange={(value) => {
                                if (value) {
                                    const selectedFaq = faqS.faq.find(item => item.question === value)
                                    setActiveImage(selectedFaq ? `${faqS.path}${selectedFaq.image}` : faqS.default)
                                } else {
                                    setActiveImage(faqS.default)
                                }
                            }}
                        >
                            {faqS.faq.map((item, index) => (
                                <AccordionItem key={index} value={item.question}>
                                    <AccordionTrigger className="text-left">
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
            </div>
        </section>
    )
}