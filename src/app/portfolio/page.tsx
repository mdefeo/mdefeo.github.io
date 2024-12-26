import React from "react";
import { generateMetadata } from "@/utils/metaData";

export const metadata = generateMetadata({
  title: "Portfolio",
  description: "Explore the professional portfolio of Marcello De Feo, showcasing Full-Stack Software Engineering projects and more.",
  url: "/portfolio",
});

const PortfolioPage: React.FC = () => {
  const portfolioItems = [
    {
      title: "Web Scraping Dashboard",
      description: "A dashboard for tracking and analyzing web scraping operations using modern React and NestJS.",
    },
    {
      title: "NHL Analytics Tracker",
      description: "An advanced NHL analytics platform using live game tracking, player statistics, and predictive insights.",
    },
    {
      title: "Real Estate Aggregator",
      description: "A real estate data aggregation app built with PostgreSQL, Sequelize, and Material UI.",
    },
  ];

  return (
    <div className="space-y-12 px-4 md:px-10 py-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Portfolio</h1>
        <p className="text-lg text-gray-700">
          Explore a selection of projects showcasing my expertise in Full-Stack Software Engineering.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
