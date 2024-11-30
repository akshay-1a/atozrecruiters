import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Fade } from '../animations/clip';

interface HeroProps {
  data: {
    headline: string;
    tagline: string;
    cta: string;
  };
}

export function HeroSection({ data }: HeroProps) {
  return (
    <section className={`relative w-full py-40 md:h-[89vh] p-4 md:p-16 pt-24 flex items-center md:items-start justify-end overflow-hidden bg-gradient-to-r from-cyan-950 to-cyan-700 text-white`}>
      <Fade speed={0.9} distance={150}
        className="text-right z-10 flex flex-col justify-start items-end gap-3"
      >
        <h1 className="text-5xl md:text-8xl md:max-w-4xl font-bold mb-4">{data.headline}</h1>
        <p className="text-lg md:text-xl md:max-w-3xl pb-5">{data.tagline}</p>
        <Button className='bg-cyan-300 hover:bg-cyan-600 text-cyan-950 hover:text-cyan-100 font-bold p-4 text-lg' size="lg">{data.cta}</Button>
      </Fade>
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.4 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="absolute inset-0 bg-[url('/about/bg-hero.jpg')] bg-cover bg-center opacity-50"></div>
      </motion.div>
    </section>
  );
}

