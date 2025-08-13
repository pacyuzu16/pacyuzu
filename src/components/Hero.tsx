import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white pt-16 sm:pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm{' '}
              <span className="text-blue-600">Cyuzuzo Pacifique</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-4 sm:mb-6">
              Computer Engineering Student at UR-CST
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Passionate about innovation and problem-solving with strong technical 
              and leadership skills. Eager to grow, learn, and make a meaningful 
              impact in any opportunity I'm given.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8">
              <a
                href="/cv-cyuzuzo-pacifique.pdf"
                download="Cyuzuzo_Pacifique_CV.pdf"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <Download size={20} />
                <span>Download CV</span>
              </a>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 text-sm sm:text-base"
              >
                Get In Touch
              </button>
            </div>

            <div className="flex space-x-4 justify-center lg:justify-start">
              <a
                href="https://www.linkedin.com/in/cyuzuzo-pacifique-588671280/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                <Linkedin size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://github.com/pacyuzu16"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-800 hover:text-white transition-all duration-200"
              >
                <Github size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="mailto:pacyuzu16@gmail.com"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white transition-all duration-200"
              >
                <Mail size={18} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
          
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                <img
                  src="images/picc.png"
                  alt="Cyuzuzo Pacifique"
                  className="w-56 h-56 sm:w-72 sm:h-72 rounded-full object-cover border-4 border-white"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;