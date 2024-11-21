import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Quote } from 'lucide-react'
import { ScrollArea } from '../ui/scroll-area'
import { Clip, Fade } from '../animations/clip'

interface TestimonialsProps {
    data: {
        title: string
        stories: Array<{ quote: string; client: string }>
    }
}

export default function Testimonials({ data }: TestimonialsProps) {
    return (
        <section className="py-16 px-8 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <Clip>
                <h2 className="mb-8 text-center text-3xl font-extrabold text-slate-700 sm:text-5xl">{data.title}</h2>
            </Clip>
            <div className="grid md:grid-cols-2 gap-6">
                {data.stories.map((story, index) => (
                    <Fade key={index}>
                        <Card className='h-96 md:h-80'>
                            <CardContent className="h-full flex flex-col p-6">
                                <Quote className="text-blue-600 mb-4" size={24} />
                                <ScrollArea className="flex-grow pr-4">
                                    <p className="text-lg text-gray-700 mb-4 italic">&ldquo;{story.quote}&rdquo;</p>
                                </ScrollArea>
                                <p className="pt-2 font-semibold text-blue-600">{story.client}</p>
                            </CardContent>
                        </Card>
                    </Fade>
                ))}
            </div>
        </section>
    )
}