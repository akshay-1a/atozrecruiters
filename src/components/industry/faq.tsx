'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { IndustryData } from '@/lib/industries';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQ({ data }: { data: IndustryData['faqs'] }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 px-8 md:py-24 md:px-36"
    >
      <div className="">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl md:text-5xl font-extrabold mb-12 text-slate-800 text-center"
        >
          {data.heading}
        </motion.h2>
        <Accordion type="single" collapsible className="w-full">
          {data.list.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            >
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className='text-lg md:text-xl font-semibold'>{faq.question}</AccordionTrigger>
                <AccordionContent className='text-base md:text-lg'>{faq.answer}</AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </motion.section>
  );
}

