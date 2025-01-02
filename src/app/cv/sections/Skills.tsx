"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDatabase, faTools, faUsers, faCogs } from "@fortawesome/free-solid-svg-icons"; 
import SkillIcon from "@/components/ui/SkillIcon";
import SectionHeader from "@/components/ui/SectionHeading";

export default function Skills() {
  return (
    <section aria-labelledby="skills-heading" role="contentinfo">
      <SectionHeader id="skills" name="Skills" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center mb-4">
            <h4 className="text-xl font-semibold">Back-End Technologies</h4>
          </div>
          <SkillIcon name="node" alt="Node.js" />
          <SkillIcon name="php" alt="PHP" />
          <SkillIcon name="express" alt="Express.js" />
          <SkillIcon name="nest" alt="Nest.js" />
          <SkillIcon name="python" alt="Python" />
          <SkillIcon name="perl" alt="Perl" />
          <SkillIcon name="jest" alt="Jest" />
          <SkillIcon name="docker" alt="Docker" />
          <SkillIcon name="api" alt="RESTful API Development" />
          <SkillIcon name="sqlServer" alt="SQL Server" />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faCode} className="text-green-500 text-2xl mr-4" />
            <h4 className="text-xl font-semibold">Front-End Technologies</h4>
          </div>
          <SkillIcon name="react" alt="React" />
          <SkillIcon name="next" alt="Next.js" />
          <SkillIcon name="html5" alt="HTML5" />
          <SkillIcon name="css3" alt="CSS3" />
          <SkillIcon name="javascript" alt="JavaScript" />
          <SkillIcon name="typescript" alt="TypeScript" />
          <SkillIcon name="bootstrap" alt="Bootstrap" />
          <SkillIcon name="tailwind" alt="Tailwind" />
          <SkillIcon name="material" alt="Material UI" />
          <SkillIcon name="adobe" alt="Adobe Creative Cloud" />
          <SkillIcon name="jQuery" alt="jQuery" />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faDatabase} className="text-purple-500 text-2xl mr-4" />
            <h4 className="text-xl font-semibold">Databases & Storage</h4>
          </div>
          <SkillIcon name="azureSql" alt="Azure SQL" />
          <SkillIcon name="mysql" alt="MySQL" />
          <SkillIcon name="postgresql" alt="PostgreSQL" />
          <SkillIcon name="mongodb" alt="MongoDB" />
          <SkillIcon name="redis" alt="Redis" />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faCogs} className="text-orange-500 text-2xl mr-4" />
            <h4 className="text-xl font-semibold">Development Practices</h4>
          </div>
          <SkillIcon name="agile" alt="Agile" />
          <SkillIcon name="sync" alt="CI/CD" />
          <SkillIcon name="scrum" alt="Scrum" />
          <SkillIcon name="git" alt="Git" />
          <SkillIcon name="brackets" alt="Test-Driven Development" />
          <SkillIcon name="postman" alt="Unit/API/E2E Testing" />
          <SkillIcon name="playwright" alt="Web Scraping" />
          <SkillIcon name="reviews" alt="Code Reviews" />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faTools} className="text-yellow-500 text-2xl mr-4" />
            <h4 className="text-xl font-semibold">Web Servers & Security</h4>
          </div>
          <SkillIcon name="azure" alt="Azure" />
          <SkillIcon name="aws" alt="AWS" />
          <SkillIcon name="apache" alt="Apache" size={14} />
          <SkillIcon name="nginx" alt="NGINX" />
          <SkillIcon name="oauth" alt="OAuth" />
          <SkillIcon name="jwt" alt="JWT" />
          <SkillIcon name="googleanalytics" alt="Google Analytics" />
          <SkillIcon name="gtm" alt="Google Tag Manager" />
          <SkillIcon name="nagios" alt="Nagios" />
          <SkillIcon name="debian" alt="Debian Linux" />
          <SkillIcon name="ssl" alt="SSL/TLS" />
          <SkillIcon name="soc2" alt="SOC 2" />
          <SkillIcon name="hipaa" alt="HIPAA Compliance" />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faUsers} className="text-red-500 text-2xl mr-4" />
            <h4 className="text-xl font-semibold">Leadership & Management</h4>
          </div>
          <SkillIcon name="finance" alt="Financial Management" />
          <SkillIcon name="marketing" alt="Marketing" />
          <SkillIcon name="chess" alt="Strategic Planning" />
          <SkillIcon name="staff" alt="Staff Development" />
          <SkillIcon name="budget" alt="Budgeting" />
          <SkillIcon name="leadership" alt="Team Leadership" />
        </div>
      </div>
    </section>
  );
}
