import React from 'react';
import { motion } from 'framer-motion';
import DoodleBorder from '../components/DoodleBorder';
import { Code, Database, Server, Globe, Lightbulb, Users } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      id: 'programming',
      title: 'Programming Languages',
      icon: <Code size={24} />,
      skills: [
        { name: 'JavaScript', level: 75 },
        { name: 'TypeScript', level: 50 },
        { name: 'Python', level: 75 },
        { name: 'Java', level: 70 },
        { name: 'C/C++', level: 70 },
      ],
      color: 'bg-highlight-yellow',
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <Globe size={24} />,
      skills: [
        { name: 'React', level: 95 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Vue.Js', level: 85 },
      ],
      color: 'bg-highlight-blue',
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: <Server size={24} />,
      skills: [
        { name: 'Node.js', level: 72 },
        { name: 'Express', level: 65 },
      ],
      color: 'bg-highlight-green',
    },
    {
      id: 'database',
      title: 'Databases',
      icon: <Database size={24} />,
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MySQL', level: 75 },

      ],
      color: 'bg-highlight-red',
    },
    {
      id: 'soft',
      title: 'Soft Skills',
      icon: <Users size={24} />,
      skills: [
        { name: 'Team Collaboration', level: 95 },
        { name: 'Communication', level: 90 },
        { name: 'Problem Solving', level: 95 },
        { name: 'Time Management', level: 85 },
        { name: 'Leadership', level: 90 },
      ],
      color: 'bg-highlight-purple',
    },
    {
      id: 'other',
      title: 'Other Skills',
      icon: <Lightbulb size={24} />,
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'AWS', level: 50 },
        { name: 'Testing', level: 85 },
      ],
      color: 'bg-highlight-yellow',
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
      <h1 className="section-title">My Skills</h1>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {skillCategories.map((category) => (
          <motion.div 
            key={category.id}
            variants={item}
            className="h-full"
          >
            <DoodleBorder className="h-full bg-paper p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-full ${category.color}`}>
                  {category.icon}
                </div>
                <h2 className="font-gloria text-xl">{category.title}</h2>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="mb-2">
                    <div className="flex justify-between mb-1">
                      <span className="font-patrick">{skill.name}</span>
                      <span className="text-ink-light text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-pencil-light rounded-full overflow-hidden">
                      <motion.div 
                        className={`h-full ${category.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </DoodleBorder>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;