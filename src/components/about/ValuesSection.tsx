import { once } from 'events';
import { motion } from 'framer-motion';

interface ValuesProps {
  data: {
    title: string;
    list: { title: string; description: string }[];
  };
}

export function ValuesSection({ data }: ValuesProps) {
  return (
    <section className="py-20 bg-slate-700">
      <div className="container mx-auto px-4 md:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-6xl font-sans font-extrabold text-slate-50 mb-12 text-center"
        >
          {data.title}
        </motion.h2>
        <div className="flex flex-wrap justify-center items-center gap-8 gap-x-16">
          {data.list.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, backgroundColor: '#fff', color: "black" }}
              whileInView={{ opacity: 1, y: 0, backgroundColor: '#fff', color: "black" }}
              whileHover={{ scale: 1.05, backgroundColor: '#1e293b', color:"white"}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{once:true}}
              className=" max-w-xl rounded-lg shadow-lg p-6"
            >
              <h3 className="text-2xl font-bold mb-6">{value.title}</h3>
              <p>{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

