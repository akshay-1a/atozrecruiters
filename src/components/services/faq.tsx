import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { Clip, Fade } from '../animations/clip'

interface FAQProps {
    data: {
        title: string
        questions: Array<{ q: string; a: string }>
    }
}

export default function FAQ({ data }: FAQProps) {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <Clip>
                <h2 className="mb-8 text-center text-3xl font-extrabold text-slate-700 sm:text-5xl">{data.title}</h2>
            </Clip>
            <Fade>
            <Accordion type="single" collapsible className="w-full">
                {data.questions.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-lg md:text-xl font-semibold text-gray-900">
                            {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="md:text-lg text-gray-700">
                            {faq.a}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
            </Fade>
        </section>
    )
}