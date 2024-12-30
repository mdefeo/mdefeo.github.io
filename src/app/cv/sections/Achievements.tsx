// /src/app/cv/sections/Achievements.tsx
"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faCheckCircle, faTools, faShieldAlt, faCog, faDatabase } from "@fortawesome/free-solid-svg-icons"; 

export default function AchievementsAndAwards() {
  return (
    <div className="space-y-8">
      <section aria-labelledby="key-achievements-heading" className="space-y-4">
        <h2 id="key-achievements-heading" className="text-3xl font-bold">Key Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card bg-white p-6 shadow-lg rounded-xl">
            <FontAwesomeIcon icon={faTrophy} className="text-yellow-500 text-3xl mb-4" />
            <h3 className="font-semibold text-lg">Leadership & Mentorship</h3>
            <p className="text-gray-700">
              Mentored and managed cross-functional development teams, enhancing productivity by 25%, and delivering high-quality technical solutions.
            </p>
          </div>
          <div className="card bg-white p-6 shadow-lg rounded-xl">
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-3xl mb-4" />
            <h3 className="font-semibold text-lg">System Scalability</h3>
            <p className="text-gray-700">
              Architected scalable APIs and backend systems, including a $5M loyalty rewards program, improving system integration and performance.
            </p>
          </div>
          <div className="card bg-white p-6 shadow-lg rounded-xl">
            <FontAwesomeIcon icon={faShieldAlt} className="text-blue-500 text-3xl mb-4" />
            <h3 className="font-semibold text-lg">Secured GPS Tracking</h3>
            <p className="text-gray-700">
              Led team to build PHP and SQL-based GPS tracker, reducing theft to 0% and improving delivery efficiency by 35%.
            </p>
          </div>
          <div className="card bg-white p-6 shadow-lg rounded-xl">
            <FontAwesomeIcon icon={faDatabase} className="text-purple-500 text-3xl mb-4" />
            <h3 className="font-semibold text-lg">Data-Driven Solutions</h3>
            <p className="text-gray-700">
              Engineered B2B data visualization portals that enhanced actionable insights and increased customer retention by 10%.
            </p>
          </div>
          <div className="card bg-white p-6 shadow-lg rounded-xl">
            <FontAwesomeIcon icon={faCog} className="text-red-500 text-3xl mb-4" />
            <h3 className="font-semibold text-lg">Problem Resolution</h3>
            <p className="text-gray-700">
              Spearheaded debugging and forensic efforts, reducing production downtime by 50% and ensuring high system reliability.
            </p>
          </div>
          <div className="card bg-white p-6 shadow-lg rounded-xl">
            <FontAwesomeIcon icon={faTools} className="text-gray-600 text-3xl mb-4" />
            <h3 className="font-semibold text-lg">Compliance Expertise</h3>
            <p className="text-gray-700">
              Implemented SOC 2 and HIPAA protocols, ensuring security and regulatory compliance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
