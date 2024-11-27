'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { IndustryData } from '@/lib/industries';

export default function Stats({ data }: { data: NonNullable<IndustryData['stats']> }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 md:py-24 bg-slate-900 text-white"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          {data.heading}
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {data.items.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 text-cyan-400">{stat.value}</div>
              <div className="text-sm md:text-base text-slate-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

