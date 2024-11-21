'use client'

import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { AiFillThunderbolt } from "react-icons/ai";
import { Clip, Fade, PopEffect } from '../animations/clip'

interface Point {
    title: string
    para: string
}

interface WhyChooseUsProps {
    data: {
        title: string
        points: Point[]
    }
}

export default function WhyChooseUs({ data }: WhyChooseUsProps) {
    const [activeTab, setActiveTab] = useState<string>(data.points[1].title)

    return (
        <section className="flex flex-col gap-5 md:h-screen w-full items-center justify-start bg-gray-100 p-8 py-20 md:p-20">
            <Fade >
                <h2 className="pb-4 md:pb-12 text-center text-3xl font-extrabold text-slate-700 sm:text-5xl">
                    {data.title}
                </h2>
            </Fade>
            <Fade>
                <Card className="w-full h-full max-w-7xl overflow-hidden shadow-xl flex justify-center items-center p-4 md:p-8">
                    {/* <CardContent className="p-8"> */}
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="md:h-80">
                        <div className="h-full w-full flex flex-col md:flex-row gap-10">
                            <TabsList className="flex h-full md:flex-col justify-around gap-2 p-4 md:max-w-80 w-full">
                                {data.points.map((point) => (
                                    <TabsTrigger
                                        key={point.title}
                                        value={point.title}
                                        className="justify-start gap-4 text-xs md:text-lg font-semibold py-5 w-full text-wrap text-left"
                                    >
                                        <AiFillThunderbolt size={25} />{point.title}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                            <Card className="w-full">
                                <AnimatePresence mode="wait">
                                    {data.points.map((point) => (
                                        <TabsContent key={point.title} value={point.title} className="h-full data-[state=active]:flex">
                                            <CardContent className="flex h-full flex-col p-6">
                                                <h3 className="mb-4 text-2xl font-semibold text-gray-800">{point.title}</h3>
                                                <ScrollArea className="flex-grow pr-4">
                                                    <p className="md:text-lg text-slate-600">{point.para}</p>
                                                </ScrollArea>
                                            </CardContent>
                                        </TabsContent>
                                    ))}
                                </AnimatePresence>
                            </Card>
                        </div>
                    </Tabs>
                    {/* </CardContent> */}
                </Card>
            </Fade>
        </section>
    )
}