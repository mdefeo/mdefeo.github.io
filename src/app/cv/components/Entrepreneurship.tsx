// pages/CVPage.tsx
import React from 'react';

const Education: React.FC = () => {
  return (
    <div>
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-800">Entrepreneurship</h3>
        
        <div className="space-y-6">
          {/* Medical Solutions */}
          <div className="flex flex-col sm:flex-row sm:space-x-8">
            <div className="flex-1">
              <h4 className="text-xl font-bold text-gray-800">Allora Hospitality</h4>
              <p className="text-sm text-gray-500">Owner Operator | 2016 - 2022</p>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Scaled three successful, award-winning ventures with a focus on customer engagement and operational efficiency.</li>
                <li>Grew business through innovative marketing strategies, achieving a three-month reservation waitlist.</li>
                <li>Fostered community impact by mentoring employees, hiring individuals with employment barriers, and sourcing goods globally from small businesses.</li>
                <li>Created a collaborative ecosystem through the Haddonfield Food & Beverage Collective, enabling resource-sharing and co-marketing for local
businesses.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;