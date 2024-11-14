'use client';
import { homepage } from "@/lib/constants"
import ImageGrid from "../image-grid"
import { Button } from "../ui/button"
import { BsArrowRight } from "react-icons/bs"
import { motion } from "framer-motion"

export default function Hero() {
    const context = homepage.hero

    return (
        <div className="relative h-[88vh]">
            <div className="container mx-auto px-16 py-8">
                <div className="grid grid-cols-2 justify-end">
                    {/* Left Column - Text Content */}
                    <div className="space-y-5 py-7 overflow-visible">
                        <motion.h1
                            initial={{ clipPath: "inset(0 100% 0 0)" }}
                            whileInView={{ clipPath: "inset(0 0 0 0)" }}
                            transition={{
                                type: "spring",
                                stiffness: 70,
                                damping: 15,
                                mass: 1,
                                ease: "linear",
                                duration: "0.5",
                                delay: 0.5
                            }}
                            viewport={{ once: true }}
                            className="absolute capitalize z-10 w-2/3 text-3xl md:text-6xl lg:text-6xl font-extrabold text-slate-700 hover:text-slate-800 transition-colors duration-300 drop-shadow overflow-visible pb-3"
                            >
                            {context.headline}
                        </motion.h1>
                        <h1 className="absolute capitalize w-2/3 text-3xl md:text-6xl lg:text-7xl font-bold text-transparent strok leading-wide translate-x-[3px] -translate-y-9">
                            {/* {context.headline} */}
                        </h1>
                        <motion.p
                            initial={{ clipPath: "inset(0 100% 0 0)" }}
                            whileInView={{ clipPath: "inset(0 0 0 0)" }}
                            transition={{
                                type: "spring",
                                stiffness: 70,
                                damping: 15,
                                mass: 1,
                                ease: "linear",
                                duration: "0.5",
                                delay: 0.5
                            }}
                            viewport={{ once: true }} className="text-slate-600 font-medium tracking-wider text-xl pt-40 pb-10 px-2">
                            {context.para}
                        </motion.p>
                        <motion.div
                            initial={{ clipPath: "inset(0 100% 0 0)" }}
                            whileInView={{ clipPath: "inset(0 0 0 0)" }}
                            transition={{
                                type: "spring",
                                stiffness: 70,
                                damping: 15,
                                mass: 1,
                                ease: "linear",
                                duration: "0.5",
                                delay: 0.5
                            }}
                            viewport={{ once: true }}
                            >
                        <Button
                            variant={"default"} className="bg-cyan-800 hover:bg-cyan-700 text-cyan-50 text-xl font-semibold capitalize p-6 rounded-lg flex items-center gap-4 ml-2">
                            {context.cta}
                            <div className="hover:-rotate-45 transition-transform ease-linear duration-150 hover:scale-150 ">
                                <BsArrowRight className="stroke-1" />
                            </div>
                        </Button>
                        </motion.div>
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

