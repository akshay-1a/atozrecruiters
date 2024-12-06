'use client';
import { homepage } from "@/lib/constants"
import ImageGrid from "../image-grid"
import { Button } from "../ui/button"
import { BsArrowRight } from "react-icons/bs"
import { Clip } from "../animations/clip";
import { redirect } from "next/navigation";


interface HeroContext {
    links: string[]
}

export default function Hero() {
    const context = homepage.hero

    return (
        <div className="container mx-auto p-8 pt-20 lg:p-16 lg:pb-10 w-full">
            <div className="lg:grid lg:grid-cols-2 lg:justify-end space-y-4">
                {/* Left Column - Text Content */}
                <div className="lg:space-y-5 lg:py-7">
                    <Clip start="right" className="lg:absolute">
                        <h1
                            className="capitalize z-10 lg:w-2/3 text-3xl lg:text-6xl font-extrabold text-slate-700 hover:text-slate-800 transition-colors duration-300 drop-shadow pb-3"
                        >
                            {context.headline}
                        </h1>
                    </Clip>
                    {/* {context.headline} */}
                    {/* <h1 className="absolute capitalize w-2/3 text-3xl lg:text-6xl lg:text-7xl font-bold text-transparent strok leading-wide translate-x-[3px] -translate-y-9">
                        </h1> */}
                    <Clip start="right">
                        <p className="text-slate-600 font-medium tracking-wider text-xl lg:pt-40 pb-10 lg:px-2">
                            {context.para}
                        </p>
                    </Clip>
                    <Clip start="right">
                        <Button
                        onClick={()=>{redirect('/contact');}}
                            variant={"default"} className=" bg-cyan-800 hover:bg-cyan-700 text-cyan-50 text-xl font-semibold capitalize lg:p-6 rounded-lg flex items-center gap-4 ml-2">
                            {context.cta}
                            <div className="hover:-rotate-45 transition-transform ease-linear duration-150 hover:scale-150 ">
                                <BsArrowRight className="stroke-1" />
                            </div>
                        </Button>
                    </Clip>
                </div>
                {/* Right Column - Image Grid */}
                <div className="flex">
                    <ImageGrid links={context.links} url={context.url} />
                </div>
            </div>
        </div>
    )
}

