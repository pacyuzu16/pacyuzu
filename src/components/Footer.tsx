import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Cyuzuzo Pacifique</h3>
            <p className="text-gray-400 mb-4">
              Computer Engineering Student passionate about innovation and technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/cyuzuzo-pacifique-588671280/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/pacyuzu16"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-gray-600 hover:text-white transition-all duration-200"
              >
                <Github size={18} />
              </a>
              <a
                href="mailto:pacyuzu16@gmail.com"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-green-600 hover:text-white transition-all duration-200"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
          
         
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            pacyuzu16©{currentYear}  Made with{' '}
            <Heart size={16} className="mx-1 text-red-500" />
            and passion for technology.
          </p>
          <div className="mt-4">
            <a
              href="?admin=true"
              className="text-gray-600 hover:text-gray-400 text-xs transition-colors"
            >
              Admin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;