import { motion } from 'framer-motion';
import Image from 'next/image';

interface TeamProps {
  data: {
    title: string;
    members: { name: string; role: string; image: string }[];
  };
}

export function TeamSection({ data }: TeamProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          {data.title}
        </motion.h2>
        <div className="flex flex-wrap justify-center -mx-4">
          {data.members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

