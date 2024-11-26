'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { achievements } from '@/lib/constants';
import CountUp from 'react-countup';
import Image from 'next/image';
import { Clip, PopEffect} from '../animations/clip';

interface Achievement {
    icon: LucideIcon;
    count: number;
    label: string;
}

const AchievementCard: React.FC<Achievement> = ({ icon: Icon, count, label }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const [hasCountedUp, setHasCountedUp] = useState(false);

    useEffect(() => {
        if (isInView && !hasCountedUp) {
            setHasCountedUp(true);
        }
    }, [isInView, hasCountedUp]);

    return (
        <PopEffect type='popup' >
            <motion.div
                ref={ref}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-lg text-center text-teal-100 w-full overflow-hidden"
            >
                <div className='flex justify-center items-center gap-3 pb-2'>
                    <Icon className="w-24 h-24 text-cyan-500" />
                    <h3 className="text-7xl font-extrabold">
                        {hasCountedUp ? (
                            <CountUp end={count} duration={3} />
                        ) : (
                            '0'
                        )}
                        +
                    </h3>
                </div>
                <p className="text-cyan-200 text-xl font-light tracking-[2.5px]">{label}</p>
            </motion.div>
        </PopEffect>
    );
};

export default function Count() {

    return (
        <div className="relative lg:min-h-screen w-full bg-slate-950 text-pretty flex flex-col justify-center items-center gap-10">
            <Clip start='centerX' >
                <DataBase />
            </Clip>
            <div className=" container mx-auto px-4 pt-10">
                <div className="grid lg:grid-cols-3 gap-8">
                    {achievements.map((achievement: Achievement, index: number) => (
                        <AchievementCard key={index} {...achievement} />
                    ))}
                </div>
            </div>
        </div>
    );
}


const DataBase = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const [hasCountedUp, setHasCountedUp] = useState(false);

    useEffect(() => {
        if (isInView && !hasCountedUp) {
            setHasCountedUp(true);
        }
    }, [isInView, hasCountedUp]);

    return (
        <motion.div
            ref={ref}
            className="mt-2 flex flex-col lg:flex-row items-center justify-center w-full gap-16 py-10 px-8 lg:px-20 bg-cyan-200 lg:h-[48vh]">
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative flex-shrink-0 flex items-center justify-center">
                <Image
                    src="/homepage/count_chart.jpg"
                    alt="Growth chart"
                    width={800}
                    height={800}
                    priority
                    className="rounded-lg h-56 lg:h-60 lg:aspect-auto w-full z-10"
                />
                <div className='absolute bg-cyan-600 translate-x-3 translate-y-3 rounded-lg h-full w-full z-0' />
                <div className="absolute w-full mx-auto inset-0 z-10 bg-slate-800/50 hover:bg-slate-950/80 text-cyan-50 p-6 rounded-lg flex flex-col justify-center items-center gap-5 drop-shadow-md transition-all ease-linear duration-300">
                    <h3 className="text-6xl font-extrabold">
                        {hasCountedUp ? (
                            <CountUp end={100000} duration={3} />
                        ) : (
                            '0'
                        )}
                        +</h3>
                    <p className="text-3xl font-extrabold text-yellow-400">Data Base</p>
                </div>
            </motion.div>
            <Clip start='right'>
                <h2 className="text-2xl lg:text-5xl font-extrabold text-cyan-950 mb-4 drop-shadow-sm">
                    Transforming Talent, Elevating Success: Bridging Ambition with Achievement
                </h2>
                <p className="text-cyan-950 text-lg font-extrathin">
                    We believe in the transformative power of precision recruitment, where each placement contributes to your business's evolution. By combining our expertise with your vision, we're shaping success stories, one placement at a time.
                </p>
            </Clip>
        </motion.div>

    )
}