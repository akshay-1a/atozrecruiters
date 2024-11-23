import { motion } from 'framer-motion';

interface ImpactProps {
  data: {
    title: string;
    stats: { value: string; label: string }[];
    testimonial: { quote: string; author: string; company: string };
  };
}

export function ImpactSection({ data }: ImpactProps) {
  return (
    <section className="w-full py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 md:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          {data.title}
        </motion.h2>
        <div className="flex flex-wrap justify-center mb-12 -mx-4">
          {data.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="w-full sm:w-1/3 px-4 mb-8 sm:mb-0"
            >
              <div className="text-center">
                <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                <p className="text-xl">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-3xl mx-auto text-center"
        >
          <blockquote className="text-2xl italic mb-4">"{data.testimonial.quote}"</blockquote>
          <p className="text-xl">
            - {data.testimonial.author}, {data.testimonial.company}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

