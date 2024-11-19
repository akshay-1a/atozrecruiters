import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Quote } from 'lucide-react'

interface TestimonialsProps {
    data: {
        title: string
        stories: Array<{ quote: string; client: string }>
    }
}

export default function Testimonials({ data }: TestimonialsProps) {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">{data.title}</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {data.stories.map((story, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card>
                            <CardContent className="p-6">
                                <Quote className="text-blue-600 mb-4" size={24} />
                                <p className="text-lg text-gray-700 mb-4 italic">&ldquo;{story.quote}&rdquo;</p>
                                <p className="font-semibold text-blue-600">{story.client}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}