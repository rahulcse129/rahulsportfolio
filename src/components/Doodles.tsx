import React from 'react';
import { motion } from 'framer-motion';
import { Code, Star, Cog, Rocket, LightbulbIcon, Pencil } from 'lucide-react';

const Doodles: React.FC = () => {
  const doodles = [
    { icon: <Code size={24} />, position: 'top-20 left-10', rotation: -15 },
    { icon: <Star size={32} />, position: 'top-40 right-20', rotation: 10 },
    { icon: <Cog size={40} />, position: 'bottom-60 left-5', rotation: 5 },
    { icon: <Rocket size={28} />, position: 'top-80 right-10', rotation: -5 },
    { icon: <LightbulbIcon size={36} />, position: 'bottom-20 right-16', rotation: 8 },
    { icon: <Pencil size={20} />, position: 'top-60 left-20', rotation: 20 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {doodles.map((doodle, index) => (
        <motion.div
          key={index}
          className={`absolute ${doodle.position} text-pencil opacity-20`}
          initial={{ opacity: 0, rotate: doodle.rotation }}
          animate={{ 
            opacity: 0.2,
            rotate: [doodle.rotation - 5, doodle.rotation + 5, doodle.rotation - 5],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.5,
          }}
        >
          {doodle.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default Doodles;