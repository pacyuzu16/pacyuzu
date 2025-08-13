import React from 'react';
import { Users, Brain, Globe, Wrench, Code, Cloud } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'Teamwork & Project Collaboration', icon: Users, color: 'bg-blue-100 text-blue-600' },
    { name: 'Problem-Solving & Analytical Thinking', icon: Brain, color: 'bg-green-100 text-green-600' },
    { name: 'Online ICT Tools & Digital Collaboration', icon: Globe, color: 'bg-purple-100 text-purple-600' },
    { name: 'Computer Hardware & Maintenance', icon: Wrench, color: 'bg-orange-100 text-orange-600' },
    { name: 'Programming', icon: Code, color: 'bg-red-100 text-red-600' },
    { name: 'Cloud Computing', icon: Cloud, color: 'bg-cyan-100 text-cyan-600' },
  ];

  const languages = [
    { name: 'Kinyarwanda', level: 'Native', percentage: 100 },
    { name: 'English', level: 'Fluent', percentage: 90 },
    { name: 'French', level: 'Intermediate', percentage: 70 },
    { name: 'Japanese', level: 'Beginner', percentage: 30 },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a Computer Engineering student with a passion for innovation and problem-solving. 
            Through academic projects, teamwork, and volunteering, I've developed strong technical 
            and leadership skills.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Technical Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-200 text-center sm:text-left"
                >
                  <div className={`w-12 h-12 ${skill.color} rounded-lg flex items-center justify-center mb-3 mx-auto sm:mx-0`}>
                    <skill.icon size={24} />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base leading-tight">
                    {skill.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Languages</h3>
            <div className="space-y-4">
              {languages.map((language, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900 text-sm sm:text-base">{language.name}</span>
                    <span className="text-sm text-gray-600">{language.level}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${language.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">My Approach</h4>
              <p className="text-gray-700 text-sm sm:text-base">
                I believe in continuous learning and collaboration. Every challenge is an 
                opportunity to grow, and I'm committed to delivering quality results while 
                maintaining strong professional relationships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;