// /src/app/cv/sections/Experience.tsx
// /src/app/cv/sections/Entrepreneurship.tsx
"use client";

import Image from "next/image";

export default function Experience() {
  return (
    <section aria-labelledby="experience-heading" role="contentinfo">
      <h2 id="experience-heading">Experience</h2>
      <div className="space-y-6">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col sm:flex-row sm:space-x-8">
            <div className="flex-shrink-0 mb-4 sm:mb-0">
              <Image
                src="/images/businesses/Medical_Solutions.svg" 
                alt="Medical Solutions Logo"
                width={80}
                height={80}
                className="object-contain rounded-full"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h4 className="mb-0 text-gray-600">Medical Solutions</h4>
                <p className="text-right text-md">2023 - Present</p>
              </div>
              <div className="flex justify-between items-top">
                <p className="text-lg text-gray-500 mb-2">Back End Developer (Full-Stack JavaScript, Azure)</p>
                <p className="text-right text-sm text-gray-400">Omaha, NE</p>
              </div>
              <ul className="text-sm m-0 pl-3 text-gray-500">
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
            <div className="flex-shrink-0 mb-4 sm:mb-0">
              <Image
                src="/images/businesses/United_BioSource.svg"
                alt="United Biosource / Marketshare Movers Logo"
                width={80}
                height={80}
                className="object-contain rounded-full"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h4 className="mb-0 text-gray-600">Marketshare Movers (United BioSource)</h4>
                <p className="text-right text-md">2017 - 2023</p>
              </div>
              <div className="flex justify-between items-top">
                <p className="text-lg text-gray-500 mb-2">Senior Software Development Engineer (LAMP Stack, Azure)</p>
                <p className="text-right text-sm text-gray-400">Furlong, PA</p>
              </div>
              <ul className="text-sm m-0 pl-3 text-gray-500">
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
            <div className="flex-shrink-0 mb-4 sm:mb-0">
              <Image
                src="/images/businesses/Sunbelt_Rentals.svg"
                alt="Sunbelt Rentals / Interstate Aerials Logo"
                width={80}
                height={80}
                className="object-contain rounded-full"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h4 className="mb-0 text-gray-600">Interstate Aerials (Sunbelt)</h4>
                <p className="text-right text-md">2015 - 2017</p>
              </div>
              <div className="flex justify-between items-top">
                <p className="text-lg text-gray-500 mb-2">Senior Application Engineer (LAMP Stack)</p>
                <p className="text-right text-sm text-gray-400">Paulsboro, NJ</p>
              </div>
              <ul className="text-sm m-0 pl-3 text-gray-500">
                <li>Architected PHP and SQL-based Rental Management Software, enabling efficient tracking of $11M in equipment assets.</li>
                <li>Developed real-time GPS alert systems, improving delivery efficiency by 35% and eliminating theft incidents.</li>
                <li>Integrated accounting workflows using Sage 300 and SAP Crystal Reports.</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-8">
            <div className="flex-shrink-0 mb-4 sm:mb-0">
              <Image
                src="/images/businesses/Toll_Brothers.svg"
                alt="Toll Brothers Logo"
                width={80}
                height={80}
                className="object-contain rounded-full"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h4 className="mb-0 text-gray-600">Toll Brothers</h4>
                <p className="text-right text-md">2014 - 2015</p>
              </div>
              <div className="flex justify-between items-top">
                <p className="text-lg text-gray-500 mb-2">Web Developer (LAMP Stack)</p>
                <p className="text-right text-sm text-gray-400">Horsham, PA</p>
              </div>
              <ul className="text-sm m-0 pl-3 text-gray-500">
                <li>Developed high-visibility consumer-facing sites to market new developments, including luxury Park Avenue buildings with listings up to $35 million, as featured on Bravo’s Million Dollar Listing.</li>
                <li>Spearheaded the development of Toll Career Center, with real-time job listings sourced from iCIMS and an internal API, leading to a 10% increase in job candidates.</li>
                <li>Created internal framework for rapid deployment, project checklists, and management tools.</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-8">
            <div className="flex-shrink-0 mb-4 sm:mb-0">
              <Image
                src="/images/businesses/Brownstein_Group.svg"
                alt="Brownstein Group Logo"
                width={80}
                height={80}
                className="object-contain rounded-full"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h4 className="mb-0 text-gray-600">Brownstein Group</h4>
                <p className="text-right text-md">2012 - 2014</p>
              </div>
              <div className="flex justify-between items-top">
                <p className="text-lg text-gray-500 mb-2">Senior Developer (LAMP Stack, C#, AWS)</p>
                <p className="text-right text-sm text-gray-400">Philadelphia, PA</p>
              </div>
              <ul className="text-sm m-0 pl-3 text-gray-500">
                <li>Managed a team of developers to deliver award-winning websites for Fortune 500 companies like IKEA.</li>
                <li>Created IKEA&apos;s Seasonal Launch Vehicle (SLV), an interactive digital catalog driving customer engagement with over 500,000 monthly users.</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-8">
            <div className="flex-shrink-0 mb-4 sm:mb-0">
              <Image
                src="/images/businesses/Saint_Josephs_University.svg"
                alt="Saint Joseph's University Logo"
                width={80}
                height={80}
                className="object-contain rounded-full"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h4 className="mb-0 text-gray-600">Saint Joseph&apos;s University</h4>
                <p className="text-right text-md">2005 - 2012</p>
              </div>
              <div className="flex justify-between items-top">
                <p className="text-lg text-gray-500 mb-2">Web Developer and Database Administrator (Java, LAMP Stack, Oracle)</p>
                <p className="text-right text-sm text-gray-400">Philadelphia, PA</p>
              </div>
              <ul className="text-sm m-0 pl-3 text-gray-500">
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
