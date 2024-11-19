import React from 'react'
import { motion } from 'framer-motion'
import ImageGrid from '../image-grid'
import { redirect } from 'next/navigation'
import { BsArrowRight } from 'react-icons/bs'
import { Clip } from '../animations/clip'
import { Button } from '../ui/button'

interface OverviewProps {
    data: {
        title: string
        description: string
        url: string
        images: string[]
    }
}

export default function Overview({ data }: OverviewProps) {
    return (
        <div className="container mx-auto lg:pb-10 w-full">
            <div className="lg:grid lg:grid-cols-2 lg:justify-end space-y-4">
                {/* Left Column - Text Content */}
                <div className="lg:space-y-">
                    <Clip start="right" className="lg:absolute">
                        <h1
                            className="capitalize z-10 lg:w-2/3 text-3xl lg:text-6xl font-extrabold text-slate-700 hover:text-slate-800 transition-colors duration-300 drop-shadow pb-3"
                        >
                            {data.title}
                        </h1>
                    </Clip>
                    {/* {data.headline} */}
                    {/* <h1 className="absolute capitalize w-2/3 text-3xl lg:text-6xl lg:text-7xl font-bold text-transparent strok leading-wide translate-x-[3px] -translate-y-9">
                        </h1> */}
                    <Clip start="right">
                        <p className="text-slate-600 font-medium tracking-wider text-xl lg:pt-40 pb-10 lg:px-2">
                            {data.description}
                        </p>
                    </Clip>
                    <Clip start="right">
                        <Button
                            onClick={() => { redirect('/contact'); }}
                            variant={"default"} className=" bg-cyan-800 hover:bg-cyan-700 text-cyan-50 text-xl font-semibold capitalize lg:p-6 rounded-lg flex items-center gap-4 ml-2">
                                Let's Connect 
                            {/* {data.cta} */}
                            <div className="hover:-rotate-45 transition-transform ease-linear duration-150 hover:scale-150 ">
                                <BsArrowRight className="stroke-1" />
                            </div>
                        </Button>
                    </Clip>
                </div>
                {/* Right Column - Image Grid */}
                <div className="flex">
                    <ImageGrid links={data.images} url={data.url} />
                </div>
            </div>
        </div>
    )
}