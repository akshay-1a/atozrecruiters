import { motion } from 'framer-motion';
import { Fade } from '../animations/clip';

interface MissionProps {
  data: {
    title: string;
    mission: string;
    vision: string;
  };
}

export function MissionSection({ data }: MissionProps) {
  return (
    <section className="py-20 bg-cyan-50">
      <div className="container mx-auto px-4 md:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-6xl font-sans font-extrabold text-slate-800 mb-12 text-center"
        >
          {data.title}
        </motion.h2>
        <div className="flex flex-wrap">
          <Fade distance={50} speed={0.7}
            className="w-full md:w-1/2 px-4 mb-8 md:mb-0"
          >
            <div className="bg-blue-600 text-white p-8 rounded-lg h-full">
              <h3 className="text-2xl font-bold mb-4">Our Mission 🚀</h3>
              <p className="text-lg">{data.mission}</p>
            </div>
          </Fade>
          <Fade distance={50} speed={0.7}
            className="w-full md:w-1/2 px-4"
          >
            <div className="bg-indigo-800 text-white p-8 rounded-lg h-full">
              <h3 className="text-2xl font-bold mb-4">Our Vision 🎯</h3>
              <p className="text-lg">{data.vision}</p>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

