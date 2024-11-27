'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IndustryData } from '@/lib/industries';
import CountUp from 'react-countup';
import { InView } from 'react-intersection-observer';

export default function Stats({ data }: { data: NonNullable<IndustryData['stats']> }) {
  const [hasAnimated, setHasAnimated] = useState(false);

  const formatValue = (value: string) => {
    const numericPart = value.replace(/[^0-9.]/g, '');
    const suffix = value.replace(numericPart, '');
    return { numericPart, suffix };
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 px-8 md:p-20 bg-slate-900 text-white"
    >
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl md:text-5xl font-extrabold mb-10 md:mb-20 text-center"
        >
          {data.heading}
        </motion.h2>
        <InView
          as="div"
          onChange={(inView) => {
            if (inView && !hasAnimated) {
              setHasAnimated(true);
            }
          }}
          triggerOnce
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {data.items.map((stat, index) => {
              const { numericPart, suffix } = formatValue(stat.value);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-7xl font-extrabold mb-2 text-cyan-400">
                    <CountUp
                      start={0}
                      end={parseFloat(numericPart)}
                      duration={2.5}
                      separator=","
                      decimals={numericPart.includes('.') ? 1 : 0}
                      decimal="."
                      enableScrollSpy
                      scrollSpyOnce
                    >
                      {({ countUpRef }) => (
                        <span>
                          <span ref={countUpRef} />
                          {suffix}
                        </span>
                      )}
                    </CountUp>
                  </div>
                  <div className="text-sm md:text-base text-cyan-100">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </InView>
      </div>
    </motion.section>
  );
}

