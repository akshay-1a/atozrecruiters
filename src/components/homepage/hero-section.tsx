import Image from "next/image"
import { homepage } from "@/lib/constants"
import ImageGrid from "../image-grid"
import { Button } from "../ui/button"
import { ArrowBigRight, ArrowLeftRightIcon, ArrowRight, ArrowRightIcon, ArrowRightToLineIcon } from "lucide-react"
import { BsArrowRight } from "react-icons/bs"
import Link from "next/link"

export default function Hero() {
    const context = homepage.hero

    return (
        <div className="relative ">
            <div className="container mx-auto px-16 py-8">
                <div className="grid grid-cols-2 justify-end">
                    {/* Left Column - Text Content */}
                    <div className=" space-y-10 ">
                        <h1 className="absolute capitalize z-10 w-2/3 text-3xl md:text-6xl lg:text-7xl font-extrabold text-slate-800  drop-shadow-xl">
                            {context.headline}
                        </h1>
                        <h1 className="absolute capitalize w-2/3 text-3xl md:text-6xl lg:text-7xl font-extrabold text-transparent strok leading-wide translate-x-[3px] -translate-y-9">
                            {context.headline}
                        </h1>
                        <p className="text-slate-600 font-medium tracking-wider text-xl pt-48 pb-10 px-2">
                            {context.para}
                        </p>
                            <Button 
                            variant={"default"} className="bg-cyan-800 hover:bg-cyan-700 text-cyan-50 text-xl font-semibold capitalize p-6 rounded-lg flex items-center gap-4 ml-2">
                                {context.cta} 
                                <div className="hover:-rotate-45 transition-transform ease-linear duration-150 hover:scale-150 ">
                                <BsArrowRight className="stroke-1"/>
                                </div>
                            </Button>
                    </div>
                    {/* Right Column - Image Grid */}
                    <div className="flex">
                        <ImageGrid />
                    </div>
                </div>
            </div>
        </div>
    )
}

