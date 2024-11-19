import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

interface WhyChooseUsProps {
    data: {
        title: string
        points: string[]
    }
}

export default function WhyChooseUs({ data }: WhyChooseUsProps) {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">{data.title}</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {data.points.map((point, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card>
                            <CardContent className="p-6">
                                <p className="text-lg text-gray-700">{point}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}