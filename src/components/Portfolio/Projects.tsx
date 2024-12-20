import React from 'react';

const Applications: React.FC = () => {
  return (
    <div>
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-800">Fun Projects</h3>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Retro Scrolling Menu</li>
          <li>Coin Flip</li>
          <li>Led development of GPS tracking system that reduced theft to 0% and improved efficiency by 35%.</li>
        </ul>
      </section>
    </div>
  );
};

export default Applications;
