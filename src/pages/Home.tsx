import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HorizontalScroller from '../components/HorizontalScroller';
import { Code, Cpu, Award, User } from 'lucide-react';
import profilePic from '../assets/images/profile.jpg'; // Ensure your profile image is in assets folder

const Home: React.FC = () => {
  const sectionItems = [
    {
      id: 'tech',
      title: 'Tech Stack',
      content: (
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-highlight-yellow px-2 py-1 rounded-md font-patrick">React</span>
            <span className="bg-highlight-blue px-2 py-1 rounded-md font-patrick">TypeScript</span>
            <span className="bg-highlight-green px-2 py-1 rounded-md font-patrick">Node.js</span>
            <span className="bg-highlight-purple px-2 py-1 rounded-md font-patrick">Python</span>
          </div>
          <Link to="/tech" className="doodle-btn inline-flex items-center gap-2">
            <Code size={16} />
            <span>Explore Tech</span>
          </Link>
        </div>
      )
    },
    {
      id: 'skills',
      title: 'Skills',
      content: (
        <div>
          <ul className="mb-4 list-disc list-inside">
            <li>Frontend Development</li>
            <li>Backend Development</li>
            <li>Database Design</li>
            <li>Cloud Services</li>
          </ul>
          <Link to="/skills" className="doodle-btn inline-flex items-center gap-2">
            <Cpu size={16} />
            <span>See Skills</span>
          </Link>
        </div>
      )
    },
    {
      id: 'hackathons',
      title: 'Hackathons',
      content: (
        <div>
          <p className="mb-4">Winner of multiple hackathons including TechCrunch Disrupt and HackMIT</p>
          <Link to="/hackathons" className="doodle-btn inline-flex items-center gap-2">
            <Award size={16} />
            <span>View Wins</span>
          </Link>
        </div>
      )
    },
    {
      id: 'about',
      title: 'About Me',
      content: (
        <div>
          <p className="mb-4">Computer Science grad with a passion for creating innovative solutions and learning new technologies</p>
          <Link to="/about" className="doodle-btn inline-flex items-center gap-2">
            <User size={16} />
            <span>Learn More</span>
          </Link>
        </div>
      )
    }
  ];

  return (
    <div className="pb-12">
      <div className="text-center mb-16 mt-8 flex flex-col items-center gap-6">
        {/* Profile Picture */}
        <motion.div
          className="w-40 h-40 rounded-full border-4 border-dashed border-black shadow-md overflow-hidden"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src={profilePic} 
            alt="Profile" 
            className="w-full h-full object-cover rounded-full"
          />
        </motion.div>

        {/* Heading & Subheading */}
        <motion.h1 
          className="font-gloria text-5xl md:text-7xl lg:text-8xl text-ink-dark mb-2"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Rahul Pal
        </motion.h1>
        <motion.p 
          className="font-patrick text-xl md:text-2xl text-ink max-w-2xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Software Developer & Tech Enthusiast
        </motion.p>
      </div>

      {/* Horizontal Scroller Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="section-title">Explore My World</h2>
        <HorizontalScroller items={sectionItems} />
      </motion.div>
    </div>
  );
};

export default Home;
