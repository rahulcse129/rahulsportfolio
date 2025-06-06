import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Trophy, Medal, Award, Calendar, Users, Code } from 'lucide-react';
import DoodleBorder from '../components/DoodleBorder';
import nasahackathon1 from '../assets/images/hackathons/NASA Hackathon.jpg'
import nasahackathon2 from '../assets/images/hackathons/NASA Hackathon1.jpg'
import nasahackathon3 from '../assets/images/hackathons/NASA Hackathon2.jpg'

const HackathonDetails: React.FC = () => {
  const { hackathonId } = useParams();
  const navigate = useNavigate();
  
  // Mock hackathon data - in a real app, this would come from an API or database
  const hackathons = {
    'hack1': {
      name: 'NASA Space APP Hackathon 2023',
      date: 'May 15-16, 2024',
      location: 'Ahmedabad, Gujarat',
      project: 'Water App',
      projectDescription: 'We have developed a website that serves as a comprehensive platform for providing information related to water quality, weather conditions, tides, endangered species, living organisms, and activities happening in rivers.',
      result: 'Winner - First Place',
      prize: 'Merchandises',
      team: ['Rahul Pal', 'Jayesh Gautam', 'Rudra Patel', 'Shitanshu Singh', 'Rekin Parekh', 'Gaurav Singh'],
      technologies: ['ReactJs', 'Django', 'HTML', 'CSS', 'Python', 'JavaScript'],
      challenges: 'A key challenge was aggregating diverse and real-time data from multiple reliable sources into a single unified platform. Ensuring data accuracy and presenting it in a user-friendly format for both technical and non-technical users was equally demanding.',
      solution: 'We addressed this challenge by integrating APIs and verified databases to fetch real-time, accurate data, and designed an intuitive user interface using responsive web technologies to ensure accessibility for all users.',
      image: nasahackathon1,
      icon: <Trophy size={24} />,
      color: 'bg-highlight-yellow',
      photos: [
        nasahackathon2,
        nasahackathon3,
      ],
    },
  };
  
  const hackathon = hackathons[hackathonId as keyof typeof hackathons];
  
  if (!hackathon) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <h1 className="text-2xl font-gloria mb-4">Hackathon not found</h1>
        <button onClick={() => navigate('/hackathons')} className="doodle-btn">
          Back to Hackathons
        </button>
      </div>
    );
  }

  return (
    <div className="pb-12">
      <Link to="/hackathons" className="inline-flex items-center gap-2 doodle-btn mb-6">
        <ArrowLeft size={18} />
        <span>Back to Hackathons</span>
      </Link>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative mb-8">
          <img 
            src={hackathon.image} 
            alt={hackathon.name}
            className="w-full h-64 object-cover rounded-2xl"
          />
          <div className={`absolute top-4 right-4 ${hackathon.color} p-3 rounded-full`}>
            {hackathon.icon}
          </div>
        </div>
        
        <DoodleBorder className="bg-paper p-6 mb-8">
          <h1 className="font-gloria text-3xl md:text-4xl text-ink-dark mb-6">{hackathon.name}</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Calendar size={20} className="text-ink" />
                <span>{hackathon.date}</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <Trophy size={20} className="text-ink" />
                <span>{hackathon.result}</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <Award size={20} className="text-ink" />
                <span>Prize: {hackathon.prize}</span>
              </div>
            </div>
            <div>
              <h2 className="font-gloria text-xl mb-3">Team Members</h2>
              <div className="flex items-start gap-2 mb-4">
                <Users size={20} className="text-ink mt-1" />
                <ul className="list-disc list-inside space-y-1">
                  {hackathon.team.map((member, index) => (
                    <li key={index}>{member}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="font-gloria text-2xl mb-4">Project: {hackathon.project}</h2>
            <p className="mb-4">{hackathon.projectDescription}</p>
            
            <div className="flex items-start gap-2 mb-4">
              <Code size={20} className="text-ink mt-1" />
              <div>
                <h3 className="font-bold mb-2">Technologies Used:</h3>
                <div className="flex flex-wrap gap-2">
                  {hackathon.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-highlight-purple px-2 py-1 rounded-md text-sm font-patrick"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-gloria text-xl mb-2">Challenges</h3>
              <p>{hackathon.challenges}</p>
            </div>
            <div>
              <h3 className="font-gloria text-xl mb-2">Our Solution</h3>
              <p>{hackathon.solution}</p>
            </div>
          </div>
        </DoodleBorder>
        
        <h2 className="font-gloria text-2xl md:text-3xl text-ink-dark mb-4">Event Photos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hackathon.photos.map((photo, index) => (
            <div key={index} className="polaroid">
              <img 
                src={photo} 
                alt={`${hackathon.name} photo ${index + 1}`}
                className="w-full h-48 object-cover mb-3"
              />
              <p className="font-gloria text-center text-sm">Hackathon Moment {index + 1}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HackathonDetails;