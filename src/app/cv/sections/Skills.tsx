// /src/app/cv/sections/Skills.tsx
"use client";

export default function Skills() {
  return (
    <section aria-labelledby="skills-heading" role="contentinfo">
      <h2 id="skills-heading">Skills</h2>
      <div className="space-y-4">
        <div>
          <h4>Back-End Technologies</h4>
          <ul>
            <li>Node.js, PHP, Express.js, NestJS, Python, Perl, Jest, RESTful API development, Docker</li>
          </ul>
        </div>
        <div>
          <h4>Front-End Technologies</h4>
          <ul>
            <li>React, Next.js, HTML5, CSS3, JavaScript, TypeScript, Bootstrap, Tailwind, Material UI</li>
          </ul>
        </div>
        <div>
          <h4>Databases & Storage</h4>
          <ul>
            <li>Azure SQL, MySQL, PostgreSQL, MongoDB, Redis</li>
          </ul>
        </div>
        <div>
          <h4>Development Practices</h4>
          <ul>
            <li>Agile, Scrum, CI/CD, TDD, Git, Unit/API/E2E Testing, Web Scraping, Code Reviews, Pair Programming, Documentation</li>
          </ul>
        </div>
        <div>
          <h4>Web Servers & Security Protocols</h4>
          <ul>
            <li>Apache, NGINX, SSL/TLS, OAuth, JWT, Debian Linux, SOC 2, HIPAA Compliance</li>
          </ul>
        </div>
        <div>
          <h4>Leadership & Management</h4>
          <ul>
            <li>Strategic Planning, Budgeting, Financial Management, Marketing, Team Leadership, Staff Development</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
