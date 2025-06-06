import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-paper py-6 border-t-3 border-dashed border-pencil">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-gloria text-ink">© 2025 Rahul Pal</p>
          
          <div className="flex gap-6">
            <a href="https://github.com/rahulcse129" target="_blank" rel="noopener noreferrer" 
               className="text-ink hover:text-ink-dark transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/rahul-pal-b28b9727b/" target="_blank" rel="noopener noreferrer"
               className="text-ink hover:text-ink-dark transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="rahulcse129@gmail.com"
               className="text-ink hover:text-ink-dark transition-colors">
              rahulcse129@gmail.com
            </a>
          </div>
          
          <p className="text-pencil text-sm">Made with React & Tailwind</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;