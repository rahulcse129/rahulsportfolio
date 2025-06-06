import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Trophy, Medal, Award } from 'lucide-react';
import DoodleBorder from '../components/DoodleBorder';

const Hackathons: React.FC = () => {
  const hackathons = [
    {
      id: 'hack1',
      name: 'NASA Space APP Hackathon 2023',
      date: 'October 2023',
      project: 'Water App',
      result: 'Top 10 in Gujarat Region',
      icon: <Trophy size={25} />,
      color: 'bg-highlight-yellow',
      image: 'https://images.pexels.com/photos/7102/notes-macbook-study-conference.jpg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <div className="pb-12">
      <h1 className="section-title">Hackathon Adventures</h1>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {hackathons.map((hackathon) => (
          <motion.div key={hackathon.id} variants={item}>
            <Link to={`/hackathons/${hackathon.id}`} className="block h-full">
              <DoodleBorder className="h-full bg-paper overflow-hidden">
                <div className="relative">
                  <img 
                    src={hackathon.image} 
                    alt={hackathon.name} 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className={`absolute top-3 right-3 ${hackathon.color} p-2 rounded-full`}>
                    {hackathon.icon}
                  </div>
                </div>
                
                <h3 className="font-gloria text-xl mb-2 ml-2">{hackathon.name}</h3>
                <div className="flex justify-between items-center mb-3 ml-2">
                  <span className="text-ink-light ">{hackathon.date}</span>
                  <span className="font-patrick font-bold mr-4">{hackathon.result}</span>
                </div>
                
                <p className="mb-4 ml-3">
                  Project: <span className="font-patrick">{hackathon.project}</span>
                </p>
                
                <div className="doodle-btn inline-block ml-4 mb-4">View Details</div>
              </DoodleBorder>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Hackathons;