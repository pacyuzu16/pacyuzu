import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      position: 'Web Developer',
      company: 'Titanium Smart Life',
      website: 'https://titaniumsmartlife.com',
      period: 'Jan 2024 – Present',
      location: 'Remote',
      type: 'Current',
      description: 'Built and maintained the company website, managed product listings, and improved user experience.',
      responsibilities: [
        'Developed and maintained responsive company website',
        'Managed product listings and inventory systems',
        'Optimized user experience and interface design',
        'Collaborated with team on digital marketing initiatives'
      ]
    },
    {
      position: 'IT Assistant',
      company: 'Gisozi Cyber Café',
      website: null,
      period: 'Jul 2022 – Aug 2025',
      location: 'Gisozi, Kigali',
      type: 'Part-time',
      description: 'Helped customers with computer use, printing, scanning, and internet services. Gained hands-on experience in troubleshooting, customer support, and digital tools.',
      responsibilities: [
        'Provided technical support to customers',
        'Managed printing, scanning, and internet services',
        'Troubleshot hardware and software issues',
        'Maintained computer systems and equipment'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey and work experience
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start space-x-6">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center relative z-10">
                  <Briefcase size={16} className="text-white" />
                </div>
                
                <div className="bg-gray-50 rounded-lg shadow-md p-6 flex-grow hover:shadow-lg transition-shadow duration-200">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      exp.type === 'Current' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {exp.type}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <MapPin size={14} className="mr-1" />
                      {exp.location}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.position}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <h4 className="text-lg text-blue-600 font-semibold">{exp.company}</h4>
                    {exp.website && (
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                  
                  <p className="text-gray-700 mb-4">{exp.description}</p>
                  
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Key Responsibilities:</h5>
                    <ul className="space-y-1">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-gray-700 flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;