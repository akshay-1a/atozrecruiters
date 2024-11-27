'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IndustryData } from '@/lib/industries';

export default function Overview({ data }: { data: IndustryData['overview'] }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative h-screen w-full py-16 md:py-24 px-8 md:px-24"
    >

      {/* <Image
        src={`/industries/${data.bg}.jpg`}
        alt={data.heading}
        fill
        className="bg-cover bg-center z-0"
      /> */}
      <div className="relative h-full w-full
      flex flex-col justify-center items-start gap-10 p-8 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl md:text-5xl text-slate-800 font-extrabold mb-8"
        >
          {data.heading}
        </motion.h2>
        <div className="flex flex-col md:flex-row items-start justify-around gap-20 w-full">
          <div className="">
            {data.content.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className="mb-4 text-lg text-slate-950"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
          {data.image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="md:w-[100vw] flex flex-col gap-5 justify-center items-center"
            >
              <Image
                src={`/industries/${data.image}.jpg`}
                alt="Industry Overview"
                width={500}
                height={300}
                className="rounded-lg drop-shadow-lg border-2 border-slate-400"
              />
              <p className='drop-shadow-lg'>{data.caption}</p>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
}

