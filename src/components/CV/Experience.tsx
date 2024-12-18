// pages/CVPage.tsx
import React from 'react';

const Experience: React.FC = () => {
  return (
    <div>
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-800">Experience</h3>
        
        <div className="space-y-6">
          {/* Medical Solutions */}
          <div className="flex flex-col sm:flex-row sm:space-x-8">
            <div className="flex-1">
              <h4 className="text-xl font-bold text-gray-800">Medical Solutions</h4>
              <p className="text-sm text-gray-500">Back End Developer (Full-Stack JavaScript, Azure) | 04/2023 - Present</p>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Engineered centralized job listing application using Azure Service Bus and Redis, streamlining asynchronous data processing.</li>
                <li>Provided technical mentorship and onboarded new developers, promoting collaboration and adherence to best practices.</li>
                <li>Developed AI-driven tools to automate job listing content generation, reducing manual workload by 75%.</li>
              </ul>
            </div>
          </div>
          
          {/* Marketshare Movers */}
          <div className="flex flex-col sm:flex-row sm:space-x-8">
            <div className="flex-1">
              <h4 className="text-xl font-bold text-gray-800">Marketshare Movers</h4>
              <p className="text-sm text-gray-500">Senior Software Development Engineer (LAMP Stack, Azure) | 07/2017 - 04/2023</p>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Architected PHP-based B2B data visualization portals, increasing customer retention by 10%.</li>
                <li>Implemented SOC 2 and HIPAA compliance protocols to ensure data security and meet regulatory standards.</li>
                <li>Built scalable communication systems using Twilio SMS and SendGrid API, enhancing customer engagement.</li>
              </ul>
            </div>
          </div>

          {/* Additional experiences follow similar structure */}
        </div>
      </section>
    </div>
  );
};

export default Experience;
