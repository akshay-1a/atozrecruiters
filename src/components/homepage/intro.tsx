import React from 'react'
import { homepage } from '@/lib/constants'
import Image from 'next/image'
import { Clip } from '../animations/clip'

export default function Intro() {
    const data = homepage.introduction
    return (
        <div id="about" className='md:h-screen flex flex-col md:flex-row justify-center items-center md:gap-36 md:p-20 bg-cyan-100 w-full p-8'>
            <Clip start='right' className='flex-1 flex flex-col items-start gap-8 md:gap-14 md:pb-20 md:w-[60vh] text-slate-800 text-pretty'>
                <h1 className='font-extrabold text-3xl text-center md:text-start md:text-5xl leading-snug tracking-wider border-b-4 pb-4 md:pb-6 border-cyan-900'>{data.title}</h1>
                <p className='md:text-xl'>
                    {data.desc[0]}
                </p>
                <p className='text-xl hidden md:block'>
                    {data.desc[1]}
                </p>
            </Clip>
            <Clip start='circle' className='flex flex-col justify-center items-center'>
                <Image
                    src={`/homepage/${data.image}`}
                    alt={data.alt}
                    width={1000}
                    height={1000}
                    className='md:w-[70vh] aspect-auto hover:scale-110 transition-transform duration-150 ease-in-out drop-shadow-2xl' />
                <p className='font-bold'>{data.alt}</p>

                <p className='pt-8 md:hidden block'>
                    {data.desc[1]}
                </p>
            </Clip>
        </div>
    )
}
