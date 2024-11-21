'use client'

import { useCallback, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Play, Pause } from 'lucide-react'
import { Clip } from '../animations/clip'
import { ScrollArea } from '../ui/scroll-area'

interface ProcessProps {
    data: {
        title: string
        src: string
        steps: {
            url: string
            title: string
            step: string
        }[]
    }
}

export default function Process({ data }: ProcessProps) {
    const [activeIndex, setActiveIndex] = useState(0)
    const [play, setPlay] = useState(true)

    // Use react-intersection-observer to detect when component is in view
    const { ref, inView } = useInView({
        threshold: 0.1, // Trigger when at least 10% of component is visible
        triggerOnce: false // Allow re-triggering if component goes in and out of view
    })

    const nextStep = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % data.steps.length)
    }, [data.steps.length])

    useEffect(() => {
        let interval: NodeJS.Timeout

        // Only start interval if component is in view and play is true
        if (inView && play) {
            interval = setInterval(nextStep, 5000)
        }

        return () => {
            if (interval) clearInterval(interval)
        }
    }, [play, nextStep, inView])

    const togglePlay = () => {
        setPlay(prev => !prev)
    }

    return (
        <section
            ref={ref}
            className="flex h-screen items-center justify-center bg-slate-700 w-full p-8"
        >
            <AnimatePresence mode="popLayout">
                <Clip start='centerY' >
                    <Card className="md:max-w-7xl p-10">
                        <Clip start="top">
                            <h2 className="mb-8 text-center text-3xl font-extrabold text-slate-700 sm:text-7xl">
                                {data.title}
                            </h2>
                        </Clip>
                        <Clip start="top">
                            <div className="flex flex-col items-start justify-center gap-10 md:gap-5 lg:flex-row-reverse">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="relative aspect-auto md:aspect-video h-60 w-full overflow-hidden rounded-lg shadow-xl lg:h-80 border border-slate-700"
                                >
                                    <Image
                                        src={`${data.src}${data.steps[activeIndex].url}.jpg`}
                                        alt={data.steps[activeIndex].title}
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                                <div className="w-full h-80 space-y-4">
                                    <Tabs
                                        value={`${activeIndex + 1}`}
                                        onValueChange={(value) => {
                                            setActiveIndex(parseInt(value) - 1)
                                            setPlay(false) // Pause when manually changing tabs
                                        }}
                                        className="md:w-[70vh]"
                                    >
                                        <div className="flex justify-center items-center gap-4">
                                            <TabsList className="mb-4 flex flex-grow gap-2">
                                                {data.steps.map((_, index) => (
                                                    <TabsTrigger key={index} value={`${index + 1}`} className="text-sm">
                                                        STEP {index + 1}
                                                    </TabsTrigger>
                                                ))}
                                            </TabsList>
                                        </div>
                                        {data.steps.map((step, index) => (
                                            <TabsContent key={index} value={`${index + 1}`}>
                                                <Card className='w-full h-aspect'>
                                                    <CardHeader>
                                                        <CardTitle className="flex justify-between items-center">
                                                            <h3 className='text-2xl font-bold font-sans text-slate-700'>
                                                                {step.title}
                                                            </h3>
                                                            <Button
                                                                variant="outline"
                                                                size="icon"
                                                                onClick={togglePlay}
                                                            >
                                                                {play ? <Pause /> : <Play />}
                                                            </Button>
                                                        </CardTitle>
                                                    </CardHeader>
                                                    <CardContent className=''>
                                                        <ScrollArea className='h-36 md:min-h-32 pr-4'>
                                                            <p className='text-lg text-gray-700'>
                                                            {step.step}
                                                            </p>
                                                        </ScrollArea>
                                                    </CardContent>
                                                </Card>
                                            </TabsContent>
                                        ))}
                                    </Tabs>
                                </div>
                            </div>
                        </Clip>
                    </Card>
                </Clip>
            </AnimatePresence>
        </section>
    )
}