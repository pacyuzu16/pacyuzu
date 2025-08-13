import React from 'react';
import { FolderOpen, Github, ExternalLink, Plus } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing my work and technical capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder Project Cards */}
          {[1].map((index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <FolderOpen size={24} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-black-300 mb-2">Titanium Smart Life</h3>
              <p className="text-gray-400 mb-4">
                Titanium Smart Life is a Kigali-based platform specializing in selling home gym equipment and bikes, making fitness accessible and convenient for everyone.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-gray-100 text-black-400 rounded text-sm">React</span>
                <span className="px-2 py-1 bg-gray-100 text-black-400 rounded text-sm">Vite</span>
                <span className="px-2 py-1 bg-gray-100 text-black-400 rounded text-sm">Tailwind CSS</span>
                <span className="px-2 py-1 bg-gray-100 text-black-400 rounded text-sm">Supabase</span>
              </div>
              <div className="flex space-x-4">
                <button className="flex items-center text-gray-400 hover:text-gray-600 transition-colors">
                  <Github size={16} className="mr-1" />
                  Code
                </button>
                <a
                  href="https://titaniumsmartlife.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <ExternalLink size={16} className="mr-1" />
                  Live Demo
                </a>
              </div>
            </div>
          ))}

          {/* Add Project Card */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 border-2 border-dashed border-gray-300">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Plus size={24} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">More Projects Coming Soon</h3>
            <p className="text-gray-600 mb-4">
              I'm constantly working on new projects and will be updating this section regularly.
            </p>
            <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
              Stay tuned →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;