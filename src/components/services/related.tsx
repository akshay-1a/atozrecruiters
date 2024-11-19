import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'

interface RelatedServicesProps {
    data: {
        title: string
        services: Array<{ name: string; link: string }>
    }
}

export default function RelatedServices({ data }: RelatedServicesProps) {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">{data.title}</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {data.services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Link href={service.link} passHref>
                            <Card className="hover:shadow-lg transition-shadow duration-300">
                                <CardContent className="p-6">
                                    <p className="text-lg font-semibold text-blue-600">{service.name}</p>
                                </CardContent>
                            </Card>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}