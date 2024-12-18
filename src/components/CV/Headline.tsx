// pages/CVPage.tsx
import React from 'react';
import SocialMediaNavigation from '../SocialMediaNavigation';

const Skills: React.FC = () => {
  return (
    <div>
      <section className="bg-gray-100 p-8 rounded-lg shadow-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Column 1: Content */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-blue-600">Marcello De Feo</h2>
            <p className="text-lg text-gray-700">Software Engineer / Leader</p>
            <p className="text-sm text-gray-500">Philadelphia, PA</p>
            <p className="text-sm text-gray-500">MBA Candidate at Boston University</p>
            <p className="text-sm text-gray-500">LinkedIn: <a href="https://linkedin.com/in/marcellodefeo" target="_blank" rel="noopener noreferrer" className="text-blue-600">linkedin.com/in/marcellodefeo</a></p>
            <SocialMediaNavigation />
          </div>

          {/* Column 2: Image */}
          <div className="flex justify-end">
            <img 
              src="/headshot.jpg"
              alt="Marcello De Feo"
              className="rounded-full w-48 h-48 object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
