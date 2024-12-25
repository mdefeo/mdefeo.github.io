// pages/CVPage.tsx
import React from 'react';

const Education: React.FC = () => {
  return (
    <div>
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-800">Education</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-bold text-gray-800">Boston University, Questrom School of Business</h4>
            <p className="text-sm text-gray-500">MBA (in progress)</p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-gray-800">Saint Joseph&apos;s University</h4>
            <p className="text-sm text-gray-500">Dual Bachelor&apos;s Degree in English and Fine Arts with a focus on Digital Design</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;