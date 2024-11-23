import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

interface StrengthsProps {
  data: {
    title: string;
    points: string[];
  };
}

export function StrengthsSection({ data }: StrengthsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-6xl font-sans font-extrabold text-slate-800 mb-12 text-center"
        >
          {data.title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="flex items-start"
            >
              <CheckCircle className="text-green-500 mr-4 flex-shrink-0 mt-1" />
              <p className="text-lg">{point}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

