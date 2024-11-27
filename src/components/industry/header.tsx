'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IndustryData } from '@/lib/industries';

export default function Header({ data }: { 
  data: IndustryData['header']
 }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden"
    >
      <Image
        src={`/industries/${data.image}.jpg`}
        alt={data.title}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div className="relative w-full h-full flex flex-col justify-center items-center bg-cyan-950/50 hover:bg-cyan-950/80 transition-color ease-linear duration-300">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl md:text-4xl font-extrabold max-w-5xl uppercase mb-4 text-center"
        >
          {data.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl md:text-lg font-bold"
        >
          {data.subtitle}
        </motion.p>
      </div>
    </motion.section>
  );
}

