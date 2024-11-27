'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { IndustryData } from '@/lib/industries';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CallToAction({ data }: { data: IndustryData['callToAction'] }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative bg-cyan-600 text-white"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-0"
        style={{
          backgroundImage: `url(/industries/${data.bg}.jpg)`,
        }}
        aria-hidden="true"
      />
      <div className="relative py-16 md:py-36 bg-slate-900/50 z-10 w-full h-full flex flex-col justify-center items-center">
        <div className="container mx-auto px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl md:text-5xl md:max-w-7xl mx-auto font-extrabold mb-6"
          >
            {data.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-8 text-base  md:text-xl max-w-3xl mx-auto"
          >
            {data.content}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button asChild size="lg" variant="secondary">
              <Link href={data.buttonLink}>{data.buttonText}</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

