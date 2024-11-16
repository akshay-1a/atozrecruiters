import React from 'react'
import { homepage } from '@/lib/constants'
import Image from 'next/image'
import { Clip, PopEffect } from '../animations/clip'

export default function Intro() {
    const data = homepage.introduction
    return (
        <section id="about" className='h-screen flex justify-center items-center gap-36 p-20 bg-cyan-100 w-full overflow-hidden'>
            <Clip start='right' className='flex-1 flex flex-col items-start gap-14 pb-20 w-[60vh] text-slate-800 text-pretty'>
                <h1 className='font-extrabold text-5xl leading-snug tracking-wider border-b-4 pb-6 border-cyan-900'>{data.title}</h1>
                <p className='text-xl'>
                    {data.desc[0]}
                </p>
                <p className='text-xl'>
                    {data.desc[1]}
                </p>
            </Clip>
            <Clip start='circle' className='flex flex-col justify-center items-center'>
                <Image
                    src={`/homepage/${data.image}`}
                    alt={data.alt}
                    width={1000}
                    height={1000}
                    className='w-[70vh] aspect-auto hover:scale-110 transition-transform duration-150 ease-in-out drop-shadow-2xl' />
                    <p className='font-bold'>{data.alt}</p>
            </Clip>
        </section>
    )
}
