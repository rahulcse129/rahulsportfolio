import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import DoodleBorder from '../components/DoodleBorder';

const ProjectDetails: React.FC = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  // Mock project data - in a real app, this would come from an API or database
  const projects = {
    'project1': {
      title: 'MERN Stack PortFolio Project',
      description: 'A full-stack PortFolio application with Project Saving and Deleting functionality with MongoDB Server.',
      longDescription: `
        🚀 Features
        Frontend
        ⚡ React + Vite for fast performance
        🎨 Tailwind CSS for elegant, responsive design
        🌙 Dark mode support (Implemented in code; toggle functionality can be added)
        💡 Skills section with animated progress bars
        📱 Fully responsive layout for all devices
        📬 Contact form to reach out directly
        📸 About Me section with profile image

        Backend
        🧠 Node.js + Express.js for server-side logic
        🗄️ MongoDB for data storage
        🔐 RESTful API to manage projects
        🧩 Mongoose ODM for MongoDB interactions
        🌐 CORS enabled for cross-origin requests
        🔒 dotenv for environment variable management
      `,
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io', 'JWT'],
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600',
      screenshots: [
        'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=600',
      ],
      github: 'https://github.com/rahulcse129/My_Portfolio',
      demo: 'https://github.com/rahulcse129/My_Portfolio',
      challenges: 'Implementing the real-time functionality while maintaining performance was challenging, especially with the Project Add and Remove to make your Portfolio Ready for Job Role.',
      solutions: 'Used optimistic UI updates combined with MongoDB & ExpressJs for a responsive feel, and implementing Project Addition and Removal.',
    },
    'project2': {
      title: 'Water App Dashboard',
      description: 'Real-time Water related application with location-based forecasts and historical data.',
      longDescription: `
        We have developed a website that serves as a comprehensive platform for providing information related to water quality, weather conditions, tides, endangered species, living organisms, and activities happening in rivers. This project aims to address the challenge of disseminating crucial data to the public and helping them stay informed about potential dangers in river environments.
        Key features of the website include:

        Water Quality Data:Users can access real-time information on water quality parameters such as pH levels, turbidity, and pollutant concentrations. This data helps people gauge the health of the river and its suitability for various activities.

        Weather Information: The website provides up-to-date weather forecasts and conditions for the region around the river. This data is vital for planning outdoor activities and understanding how weather might impact the river environment.

        Tide Information: Users can access tide charts and predictions, which are especially important for those near coastal areas or estuaries where tides can significantly affect water levels and currents.

        Endangered Species Database: The platform offers information about endangered species that inhabit the river area. This educates users about the importance of conservation efforts and the need to protect these species.

        Living Organisms Catalog: Users can explore and learn about the various living organisms that call the river their home, promoting a better understanding of the river ecosystem.

        Activities and Events: The website keeps users informed about events and activities taking place in and around the river. This can include recreational opportunities, environmental clean-up efforts, and educational programs.
      `,
      tech: ['Django', 'JavaScipt', 'OpenWeather API', 'Chart.js', 'HTML', 'CSS'],
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      screenshots: [
        'https://images.pexels.com/photos/1089440/pexels-photo-1089440.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg?auto=compress&cs=tinysrgb&w=600',
      ],
      github: 'https://github.com/ExoQuesters',
      demo: 'https://github.com/ExoQuesters',
      challenges: 'A key challenge was aggregating diverse and real-time data from multiple reliable sources into a single unified platform. Ensuring data accuracy and presenting it in a user-friendly format for both technical and non-technical users was equally demanding.',
      solutions: 'We addressed this challenge by integrating APIs and verified databases to fetch real-time, accurate data, and designed an intuitive user interface using responsive web technologies to ensure accessibility for all users.',
    },
    'project3': {
      title: 'RealStreakApp',
      description: 'This app encourages real-world, face-to-face interaction by locking devices when users are together. It rewards staying off phones with streaks, promoting mindful social engagement.',
      longDescription: `
        RealStreak  is a mobile app built with React Native and Expo. It features user sessions, achievements, timers, and user authentication, making it suitable for productivity, wellness, or gamified habit-tracking use cases.

        📦 Tech Stack

        React Native with Expo
        TypeScript
        Custom UI Components
        Hooks-based Architecture

        🧩 Features

        🧑‍💻 User Authentication (with 'useAuth')
        ⏱️ Session Timer
        🏆 Achievement and Streak Tracking
        🎮 Gamified UI with cards and avatars
        ⚙️ Modern project setup with Prettier, TypeScript, and strict linting
      `,
      tech: ['React', 'Node.js', 'Bolt.new', 'Node.Js', 'TypeScript', 'Expo'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      screenshots: [
        'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600',
      ],
      github: 'https://github.com/rahulcse129/RealStreakApp',
      demo: 'https://deluxe-snickerdoodle-2873b0.netlify.app/login',
      challenges: 'One major challenge was managing real-time session tracking and streak logic while ensuring performance across different devices. Additionally, implementing secure and seamless user authentication alongside a gamified UI required careful coordination between backend logic and frontend animations.',
      solutions: 'We tackled these challenges by using React Native hooks and context for efficient state management and real-time updates, ensuring smooth session and streak tracking. For authentication, we integrated a secure, token-based system with useAuth, and optimized performance and responsiveness through modular UI components and lightweight animations.',
    },
  };
  
  const project = projects[projectId as keyof typeof projects];
  
  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <h1 className="text-2xl font-gloria mb-4">Project not found</h1>
        <button onClick={() => navigate('/tech')} className="doodle-btn">
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="pb-12">
      <Link to="/tech" className="inline-flex items-center gap-2 doodle-btn mb-6">
        <ArrowLeft size={18} />
        <span>Back to Projects</span>
      </Link>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <DoodleBorder className="bg-paper p-6 mb-8">
          <h1 className="font-gloria text-3xl md:text-4xl text-ink-dark mb-4">{project.title}</h1>
          
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <p className="mb-6 text-lg">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map(tech => (
              <span 
                key={tech} 
                className="bg-highlight-purple px-2 py-1 rounded-md text-sm font-patrick"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex gap-4 mb-8">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="doodle-btn inline-flex items-center gap-2">
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="doodle-btn inline-flex items-center gap-2">
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h2 className="font-gloria text-xl mb-3">Project Details</h2>
              <div className="whitespace-pre-line">{project.longDescription}</div>
            </div>
            <div>
              <h2 className="font-gloria text-xl mb-3">Challenges & Solutions</h2>
              <p className="mb-3"><strong>Challenges:</strong> {project.challenges}</p>
              <p><strong>Solutions:</strong> {project.solutions}</p>
            </div>
          </div>
        </DoodleBorder>
        
        <h2 className="font-gloria text-2xl md:text-3xl text-ink-dark mb-4">Screenshots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.screenshots.map((screenshot, index) => (
            <div key={index} className="polaroid">
              <img 
                src={screenshot} 
                alt={`${project.title} screenshot ${index + 1}`}
                className="w-full h-48 object-cover mb-3"
              />
              <p className="font-gloria text-center text-sm">Project View {index + 1}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;