import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, ExternalLink } from 'lucide-react';
import DoodleBorder from '../components/DoodleBorder';

// Import project images
import portfolioImg from '../assets/images/projects/1.jpg';
import waterapp from '../assets/images/projects/Waterapp.jpg';
import realstreak from '../assets/images/projects/realstreak.jpg';

const Tech: React.FC = () => {
  const techStack = [
    { name: 'React', level: 'Advanced', icon: '⚛️', bg: 'bg-highlight-blue' },
    { name: 'JavaScript', level: 'Advanced', icon: '𝓙𝓢', bg: 'bg-highlight-yellow' },
    { name: 'TypeScript', level: 'Intermediate', icon: '𝕋𝕊', bg: 'bg-highlight-blue' },
    { name: 'Node.js', level: 'Advanced', icon: '𝑵', bg: 'bg-highlight-green' },
    { name: 'Python', level: 'Intermediate', icon: '🐍', bg: 'bg-highlight-yellow' },
    { name: 'CSS/SASS', level: 'Advanced', icon: '🎨', bg: 'bg-highlight-purple' },
    { name: 'MongoDB', level: 'Intermediate', icon: '🍃', bg: 'bg-highlight-green' },
    { name: 'PostgreSQL', level: 'Intermediate', icon: '🐘', bg: 'bg-highlight-blue' },
    { name: 'MySQL', level: 'Intermediate', icon: '🧳', bg: 'bg-highlight-blue' },
    { name: 'AWS', level: 'Beginer', icon: '🔑', bg: 'bg-highlight-white' },
 
  ];

  const projects = [
    {
      id: 'project1',
      title: 'MERN Stack PortFolio Project',
      description: 'A full-stack PortFolio application with Project Saving and Deleting functionality with MongoDB Server.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: portfolioImg,
    },
    {
      id: 'project2',
      title: 'Water App',
      description: 'Real-time Water related application with location-based forecasts and historical data.',
      tech: ['Django', 'JavaScipt', 'OpenWeather API', 'HTML', 'CSS'],
      image: waterapp,
    },
    {
      id: 'project3',
      title: 'RealStreakApp',
      description: 'This app encourages real-world, face-to-face interaction by locking devices when users are together. It rewards staying off phones with streaks, promoting mindful social engagement.',
      tech: ['React', 'Node.js', 'Bolt.new', 'TypeScript','Expo'],
      image: realstreak,
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
      <h1 className="section-title">Tech Stack & Projects</h1>
      
      {/* Tech Stack Section */}
      <section className="mb-16">
        <h2 className="font-gloria text-2xl md:text-3xl text-ink-dark mb-6">Technologies I work with</h2>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {techStack.map((tech) => (
            <motion.div 
              key={tech.name}
              variants={item}
              className="doodle-card flex items-center gap-3"
            >
              <div className={`w-12 h-12 ${tech.bg} rounded-full flex items-center justify-center text-xl font-bold`}>
                {tech.icon}
              </div>
              <div>
                <h3 className="font-gloria text-lg">{tech.name}</h3>
                <p className="text-sm text-ink-light">{tech.level}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
      
      {/* Projects Section */}
      <section>
        <h2 className="font-gloria text-2xl md:text-3xl text-ink-dark mb-6">Featured Projects</h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <DoodleBorder className="h-full bg-paper overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover mb-4 rounded-lg"
                />
                <h3 className="font-gloria text-xl mb-2 ml-4">{project.title}</h3>
                <p className="text-ink mb-4 ml-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4 ml-4">
                  {project.tech.map(tech => (
                    <span 
                      key={tech} 
                      className="bg-highlight-purple px-2 py-1 rounded-md text-xs font-patrick"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 ml-4 mb-4">
                  <Link to={`/tech/${project.id}`} className="doodle-btn">
                    View Details
                  </Link>
                  <a 
                    href="https://github.com/rahulcse129?tab=repositories" 
                    className="inline-flex items-center gap-1 text-ink hover:text-ink-dark"
                    aria-label="GitHub Repository"
                  >
                    <Github size={18} />
                  </a>
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-1 text-ink hover:text-ink-dark"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </DoodleBorder>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Tech;