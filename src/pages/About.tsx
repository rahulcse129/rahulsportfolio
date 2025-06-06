import React from 'react';
import { motion } from 'framer-motion';
import DoodleBorder from '../components/DoodleBorder';
import { Briefcase, GraduationCap, Map, Music, Book, Coffee, MoveIcon } from 'lucide-react';

// Import images
import profileImg from '../assets/images/profile.jpg';
import campusImg from '../assets/images/campus.jpg';
import reunion from '../assets/images/FavouriteGuys.jpg';
import codingImg from '../assets/images/coding.jpg';
import hackathonImg from '../assets/images/hackathon.jpg';

const About: React.FC = () => {
  const photos = [
    {
      id: 1,
      src: campusImg,
      alt: 'University Campus',
      caption: 'Campus Life',
    },
    {
      id: 2,
      src: reunion,
      alt: 'Reunion With School Friends',
      caption: 'Fizz Time',
    },
    {
      id: 3,
      src: codingImg,
      alt: 'Coding with Friends',
      caption: 'Coding with Friends',
    },
    {
      id: 4,
      src: hackathonImg,
      alt: 'Hackathon Team',
      caption: 'Hackathon Victory',
    },
  ];

  const interests = [
    { icon: <Music size={20} />, text: 'Playing Valorant' },
    { icon: <Book size={20} />, text: 'Sci-Fi Movies' },
    { icon: <Map size={20} />, text: 'Traveling' },
    { icon: <MoveIcon size={20} />, text: 'Anime' },
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
      <h1 className="section-title">About Me</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <motion.div 
          className="lg:col-span-2"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <DoodleBorder className="h-full bg-paper p-6">
            <h2 className="font-gloria text-2xl mb-4">Hello there!</h2>
            
            <p className="mb-4">
              I'm Rahul, a passionate software developer with a love for creating intuitive, user-friendly applications. 
              I specialize in full-stack development with a focus on React, Node.js, and modern web technologies.
            </p>
            
            <p className="mb-4">
              With a background in Computer Science and 1+ years of professional experience, I've worked on a variety of 
              projects ranging from e-commerce platforms to real-time analytics dashboards.
            </p>
            
            <p className="mb-6">
              I'm constantly learning and exploring new technologies to expand my skill set and create better solutions 
              for the problems I encounter.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <GraduationCap size={20} className="text-ink" />
                <span>B.Tech. Computer Engineering, PDEU (2027)</span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase size={20} className="text-ink" />
                <span>Software Engineer</span>
              </div>
            </div>
          </DoodleBorder>
        </motion.div>
        
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <DoodleBorder className="h-full bg-paper p-6">
            <div className="polaroid mx-auto max-w-[250px]">
              <img 
                src={profileImg}
                alt="Rahul Pal" 
                className="w-full object-cover mb-3"
              />
              <p className="font-gloria text-center">That's me!</p>
            </div>
            
            <h3 className="font-gloria text-xl mt-6 mb-3">Interests & Hobbies</h3>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, index) => (
                <div 
                  key={index}
                  className="bg-highlight-blue py-1 px-3 rounded-full flex items-center gap-2"
                >
                  {interest.icon}
                  <span className="font-patrick">{interest.text}</span>
                </div>
              ))}
            </div>
          </DoodleBorder>
        </motion.div>
      </div>
      
      <section>
        <h2 className="font-gloria text-2xl md:text-3xl text-ink-dark mb-6">Photo Gallery</h2>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {photos.map((photo) => (
            <motion.div 
              key={photo.id}
              variants={item}
              whileHover={{ 
                rotate: [-2, 2], 
                transition: { repeat: Infinity, repeatType: "reverse", duration: 0.3 } 
              }}
            >
              <div className="polaroid">
                <img 
                  src={photo.src} 
                  alt={photo.alt} 
                  className="w-full h-40 object-cover mb-3"
                />
                <p className="font-gloria text-center text-sm">{photo.caption}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default About;