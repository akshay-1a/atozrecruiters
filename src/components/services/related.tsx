'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Related } from '@/types'
import { Clip } from '../animations/clip'

interface RelatedProps {
    data: Related
}

export default function RelatedServices({ data }: RelatedProps) {
    const pathname = usePathname()
    console.log(pathname)
    const filteredServices = data.services.filter(
        service => pathname !== `${service.href}`
    )
    return (
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <Clip>
            <h2 className="mb-8 text-center text-3xl font-extrabold text-slate-700 sm:text-5xl">{data.title}</h2>
            </Clip>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-content-center">
                {filteredServices.map((service, index) => (
                    <motion.div
                        key={service.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{once: true}}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={
                            index >= 4 || index === 0
                                ? "sm:col-span-3 text-4xl" // Centers the last 2 items in the second row
                                : "text-3xl"
                        }
                    >
                        <Link href={service.href}>
                            <Card className="group relative h-64 overflow-hidden">
                                <Image
                                    src={`${data.url}${service.image}.jpg`}
                                    alt={service.name}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:bg-black/80" />
                                <CardContent className="absolute inset-0 flex items-center justify-center p-6">
                                    <h3 className="text-center font-extrabold text-transparent group-hover:text-white">{service.name}</h3>
                                </CardContent>
                            </Card>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}