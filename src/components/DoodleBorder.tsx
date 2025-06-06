import React from 'react';
import { motion } from 'framer-motion';

interface DoodleBorderProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  animate?: boolean;
}

const DoodleBorder: React.FC<DoodleBorderProps> = ({ 
  children, 
  className = '', 
  color = 'border-pencil', 
  animate = true 
}) => {
  const borderVariants = {
    initial: { pathLength: 0 },
    animate: {
      pathLength: 1,
      transition: { duration: 1.2, ease: 'easeInOut' }
    }
  };

  return (
    <div className={`relative rounded-xl overflow-hidden ${className}`}>
      {children}

      {animate ? (
        <motion.svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          initial="initial"
          animate="animate"
        >
          <motion.rect
            x="1" y="1" width="98" height="98"
            rx="6" ry="6"
            className={`stroke-current ${color} fill-none`}
            strokeWidth="1"
            variants={borderVariants}
          />
        </motion.svg>
      ) : (
        <div className={`absolute inset-0 border border-dashed ${color} rounded-xl pointer-events-none`} />
      )}
    </div>
  );
};

export default DoodleBorder;
