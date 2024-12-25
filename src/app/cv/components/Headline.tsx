// pages/CVPage.tsx
import React from 'react';
import Image from 'next/image';
import SocialMediaNavigation from './SocialMediaNavigation';

const Headline: React.FC = () => {
  return (
    <div>
      <section className="bg-gray-100 p-8 rounded-lg shadow-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-sky-900">Marcello De Feo</h2>
            <p className="text-lg text-gray-700">Full-Stack Engineer & Leader</p>
            <p className="text-sm text-gray-500">Philadelphia, PA</p>
            <p className="text-sm text-gray-500">MBA Candidate at Boston University</p>
            <p className="text-sm text-gray-500">LinkedIn: <a href="https://linkedin.com/in/marcellodefeo" target="_blank" rel="noopener noreferrer" className="text-sky-800">linkedin.com/in/marcellodefeo</a></p>
            <SocialMediaNavigation />
          </div>

          <div className="flex justify-end">
            <Image 
              src="/images/marcello-de-feo.jpg" 
              alt="Marcello De Feo" 
              width={200} 
              height={200} 
              className="rounded-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Headline;