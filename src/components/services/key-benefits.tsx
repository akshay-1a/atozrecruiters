import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

interface KeyBenefitsProps {
    data: {
        title: string
        benefits: string[]
    }
}

export default function KeyBenefits({ data }: KeyBenefitsProps) {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">{data.title}</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {data.benefits.map((benefit, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start space-x-3"
                    >
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-1" />
                        <p className="text-lg text-gray-700">{benefit}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}