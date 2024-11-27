'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { IndustryData } from '@/lib/industries';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Briefcase, Users, BarChart, Lightbulb } from 'lucide-react';

const icons = [BarChart, Users, Lightbulb, Briefcase];


export default function Services({ data }: { data: IndustryData['services'] }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 px-8 md:py-24 bg-cyan-50"
    >
      <div className="container mx-auto md:px-36">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl md:text-5xl font-extrabold mb-12 text-slate-800 text-center"
        >
          {data.heading}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.list.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full">
                  <CardHeader className='flex flex-row gap-5 justify-start items-start'>
                    <Icon className="h-20 w-40 text-cyan-600" />
                    <div className='space-y-3'>
                    <CardTitle className='font-bold'>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

