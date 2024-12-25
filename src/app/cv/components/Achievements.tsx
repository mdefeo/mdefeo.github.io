import React from 'react';

const Achievements: React.FC = () => {
  return (
    <div>
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold">Key Achievements</h3>
        <ul className="list-disc pl-5">
          <li>Mentored and managed cross-functional development teams, enhancing productivity by 25%.</li>
          <li>Engineered scalable B2B data visualization portals that increased customer retention by 10%.</li>
          <li>Led development of GPS tracking system that reduced theft to 0% and improved efficiency by 35%.</li>
        </ul>
      </section>
    </div>
  );
};

export default Achievements;