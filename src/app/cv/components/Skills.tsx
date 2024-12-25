// pages/CVPage.tsx
import React from 'react';

const Skills: React.FC = () => {
  return (
    <div>
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-800">Skills</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold text-gray-800">Back-End Technologies</h4>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Node.js, PHP, Express.js, NestJS, Python, Perl, Jest, RESTful API development, Docker</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800">Front-End Technologies</h4>
            <ul className="list-disc pl-5 text-gray-700">
              <li>React, Next.js, HTML5, CSS3, JavaScript, TypeScript, Bootstrap, Tailwind, Material UI</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800">Databases & Storage</h4>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Azure SQL, MySQL, PostgreSQL, MongoDB, Redis</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800">Development Practices</h4>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Agile, Scrum, CI/CD, TDD, Git, Unit/API/E2E Testing, Web Scraping, Code Reviews, Pair Programming, Documentation</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800">Web Servers & Security Protocols</h4>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Apache, NGINX, SSL/TLS, OAuth, JWT, Debian Linux, SOC 2, HIPAA Compliance</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800">Leadership & Management</h4>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Strategic Planning, Budgeting, Financial Management, Marketing, Team Leadership, Staff Development</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;