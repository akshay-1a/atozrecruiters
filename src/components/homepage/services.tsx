'use client';

import React, { useState } from 'react'
import Image from 'next/image'
import { homepage } from '@/lib/constants'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Clip } from '../animations/clip';


export default function Services() {
    const service = homepage.services
    return (
        <section id="services" className='min-h-[80vh] flex flex-col justify-start items-center gap-5  p-10'>
            <Clip start='right' className='flex flex-col gap-5 text-center'>
            <h2 className='text-slate-800 rounded-md p-3 text-4xl font-extrabold'>
                {service.title}
            </h2>
            <p className='text-lg '>
                {service.desc}
            </p>
            </Clip>
            <div className='flex flex-wrap justify-around items-center w-full'>
                {service.cards.map((card, index) => (
                    <GlossyCard key={index} {...card} />
                ))}

            </div>
        </section>
    )
}




const GlossyCard = ({ title, image, tags, desc, href }: { title: string; image: string; tags: string[]; desc: string; href: string }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            initial={{ scale: 0.9, clipPath: "inset(100% 0 100% 0)" }}
            whileInView={{
                clipPath: "inset(0% 0 0% 0)", transition: {
                    delay: 0.5,
                    duration: 0.7,
                    ease: "linear",
                    type: "tween",
                }
            }}
            viewport={{ once: true, amount: "some" }}
            whileHover={{
                scale: 0.94, transition: {
                    delay: 0,
                    duration: 0.1,
                    ease: "easeInOut",
                    type: "spring",
                }
            }}
            className="relative overflow-hidden w-[400px] aspect-[3/3.4] rounded transition-all duration-300 ease-in-out"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`absolute inset-0 bg-gradient-to-br from-cyan-900/90 to-cyan-900/90 backdrop-blur-md transition-all duration-300 ease-in-out  ${isHovered ? 'opacity-100 ' : 'opacity-90'}`} />
            <div className={`absolute inset-0 rounded-xl transition-all duration-300 ease-in-out animate-border-glow h-full w-full`} />
            <div className='relative h-full inset-0 flex flex-col gap-0 '>
                <div className="relative overflow-hidden rounded-t-lg h-[70vh]">
                    <Image
                        src={`/homepage/services/${image}.jpg`}
                        alt={title}
                        width={5774}
                        height={3849}
                        className="object-cover h-full"
                    />
                </div>
                <div className="relative p-4 h-full flex flex-col space-y-4 overflow-hidden justify-start">

                    <h2 className="text-2xl font-extrabold drop-shadow-lg text-cyan-50 text-center uppercase">{title}</h2>
                    <p className="font-thin text-cyan-50 text-center capitalize">{desc}</p>
                    <ul className="flex flex-wrap gap-x-2 gap-y-1 text-cyan-100">
                        {tags.map((tag, index) => (
                            <li key={index} className="text-sm bg-cyan-900 p-1 rounded-md mb-2 drop-shadow-md"># {tag}</li>
                        ))}
                    </ul>
                </div>
                <Link href={href} className='mx-4 py-4'>
                    <Button className=''>
                        Explore more
                    </Button>
                </Link>
            </div>
        </motion.div>
    )
}
