import React from 'react'
import { CheckCircle } from 'lucide-react'
import { Card } from '../ui/card'
import { Clip, Fade } from '../animations/clip'

interface KeyBenefitsProps {
    data: {
        title: string
        benefits: string[]
    }
}

export default function KeyBenefits({ data }: KeyBenefitsProps) {
    return (
        <section className="w-full h-full mx-auto md:max-w-7xl p-8 pb-20 md:p-20 overflow-hidden">

            <Clip start="top" className='overflow-visible h-full'>
                <h2 className="text-3xl md:text-7xl font-extrabold text-slate-700 pb-10 text-center h-full">
                    {data.title}
                </h2>
            </Clip>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 h-full w-full px-5 md:px-0">
                {data.benefits.map((benefit, index) => {
                    const [bold, regular] = benefit.split('\n');
                    return (
                        <Fade
                            key={index}
                            delay={0.1 * index}
                            distance={100}
                            className="relative md:w-[40%] md:h-52 md:flex-shrink-0 flex items-end space-x-2 space-y-2 hover:space-x-3 hover:space-y-3 transition-all duration-300 ease-linear"
                        >
                            <div className='relative w-full h-full z-20'>
                                <Card className='relative p-10 flex gap-5 justify-center h-full z-20'>
                                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" />
                                    <div className='flex flex-col '>
                                    <h3 className='text-lg font-bold text-slate-700'>{bold}</h3>
                                    <p className="text-lg text-slate-700 whitespace-pre-wrap">{regular}</p>
                                    </div>
                                </Card>
                            </div>
                            <div className='absolute inset-0 w-full h-full shadow-xl z-10'>
                                <Card className='absolute inset-0 bg-slate-700 hover:bg-slate-600 z-0 w-full h-full transition-all duration-150 ease-linear'></Card>
                            </div>
                        </Fade>
                    )
                })}
            </div>
        </section>
    )
}