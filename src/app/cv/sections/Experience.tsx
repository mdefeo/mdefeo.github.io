// /src/app/cv/sections/Experience.tsx
"use client";

export default function Experience() {
  return (
    <section aria-labelledby="experience-heading" role="contentinfo">
      <h2 id="experience-heading">Experience</h2>
      <div className="space-y-6">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col sm:flex-row sm:space-x-8">
            <div className="flex-1">
              <h4>Medical Solutions</h4>
              <p>Back End Developer (Full-Stack JavaScript, Azure) | 04/2023 - Present</p>
              <ul>
                <li>Engineered centralized job listing application using Azure Service Bus and Redis, streamlining asynchronous data processing.</li>
                <li>Provided technical mentorship and onboarded new developers, promoting collaboration and adherence to best practices.</li>
                <li>Designed robust APIs for a $5M loyalty rewards program, enhancing system scalability and third-party integrations.</li>
                <li>Collaborated with cross-functional teams to seamlessly translate Figma designs into React-based frontend systems, enhancing user experience and streamlining workflows.</li>
                <li>Optimized backend performance by implementing comprehensive testing frameworks, reducing system bugs by 30%.</li>
                <li>Developed AI-driven tools to automate job listing content generation, reducing manual workload by 75%.</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-8">
            <div className="flex-1">
              <h4>Marketshare Movers</h4>
              <p>Senior Software Development Engineer (LAMP Stack, Azure) | 07/2017 - 04/2023</p>
              <ul>
                <li>Architected PHP-based B2B data visualization portals, increasing customer retention by 10%.</li>
                <li>Implemented SOC 2 and HIPAA compliance protocols to ensure data security and meet regulatory standards.</li>
                <li>Built scalable communication systems using Twilio SMS and SendGrid API, enhancing customer engagement.</li>
                <li>Improved CI/CD pipelines to streamline development workflows, reducing deployment times by 20%.</li>
                <li>Developed and launched consumer-facing websites for copay card and patient assistance programs, enabling access to new drugs for patients in need.</li>
                <li>Collaborated with design and development teams to create intuitive front-end experiences that facilitated patient affordability and program enrollment.</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-8">
            <div className="flex-1">
              <h4>Interstate Aerials, LLC</h4>
              <p>Senior Application Engineer (LAMP Stack) | 08/2015 - 06/2017</p>
              <ul>
                <li>Architected PHP and SQL-based Rental Management Software, enabling efficient tracking of $11M in equipment assets.</li>
                <li>Developed real-time GPS alert systems, improving delivery efficiency by 35% and eliminating theft incidents.</li>
                <li>Integrated accounting workflows using Sage 300 and SAP Crystal Reports.</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-8">
            <div className="flex-1">
              <h4>Brownstein Group</h4>
              <p>Senior Developer (LAMP Stack, C#, AWS) | 01/2012 - 02/2014</p>
              <ul>
                <li>Managed a team of developers to deliver award-winning websites for Fortune 500 companies like IKEA.</li>
                <li>Created IKEA’s Seasonal Launch Vehicle (SLV), an interactive digital catalog driving customer engagement with over 500,000 monthly users.</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-8">
            <div className="flex-1">
              <h4>Saint Joseph&apos;s University</h4>
              <p>Web Developer and Database Administrator (Java, LAMP Stack, Oracle) |
                01/2005 - 01/2012</p>
              <ul>
                <li>Built and maintained department-specific Learning Management Systems (LMS).</li>
                <li>Developed APIs to interface with the University&apos;s Blackboard LMS.</li>
                <li>Developed and launched the initial courses for the University&apos;s online learning programs, laying the foundation for its digital education initiatives.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
