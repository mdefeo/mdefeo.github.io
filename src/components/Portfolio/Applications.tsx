import React from 'react';

const Applications: React.FC = () => {
  return (
    <div>
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-800">Applications</h3>
        <ul className="list-disc pl-5 text-gray-700">
          <li>NHL Analytics</li>
          <li>Real Estate Aggregator</li>
          <li>CBT AI Mood Monitor</li>
        </ul>
      </section>
    </div>
  );
};

export default Applications;
