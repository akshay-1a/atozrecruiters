import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface ProcessProps {
    data: {
        title: string
        steps: string[]
    }
}

export default function Process({ data }: ProcessProps) {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">{data.title}</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {data.steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-blue-600">Step {index + 1}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg text-gray-700">{step}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}