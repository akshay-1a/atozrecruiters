import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'

interface FAQProps {
    data: {
        title: string
        questions: Array<{ q: string; a: string }>
    }
}

export default function FAQ({ data }: FAQProps) {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">{data.title}</h2>
            <Accordion type="single" collapsible className="w-full">
                {data.questions.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-lg font-semibold text-gray-900">
                            {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                            {faq.a}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    )
}