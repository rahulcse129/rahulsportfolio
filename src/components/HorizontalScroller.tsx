import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import DoodleBorder from './DoodleBorder';

interface ScrollerItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface HorizontalScrollerProps {
  items: ScrollerItem[];
}

const HorizontalScroller: React.FC<HorizontalScrollerProps> = ({ items }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.offsetWidth * 0.8;
      
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative w-full py-4">
      <div className="flex items-center">
        <button 
          onClick={() => scroll('left')}
          className="hidden md:flex doodle-btn z-10 mr-4"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 py-4 px-2 hide-scrollbar snap-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map((item) => (
            <motion.div
              key={item.id}
              className="flex-shrink-0 w-[280px] md:w-[320px] snap-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <DoodleBorder className="h-full bg-paper p-6">
                <h3 className="font-gloria text-xl mb-3 text-ink-dark">{item.title}</h3>
                <div>{item.content}</div>
              </DoodleBorder>
            </motion.div>
          ))}
        </div>
        
        <button 
          onClick={() => scroll('right')}
          className="hidden md:flex doodle-btn z-10 ml-4"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default HorizontalScroller;