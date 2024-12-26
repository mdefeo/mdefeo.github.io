import React from "react";
import HomeContent from "./home/HomeContent";

export const metadata = {
  title: "Welcome",
  description: "Explore the professional portfolio of Marcello De Feo, showcasing Full-Stack Software Engineering projects and more.",
  openGraph: {
    title: "Welcome",
    description: "Explore the professional portfolio of Marcello De Feo.",
    url: "/",
    type: "website",
  },
};

const Home: React.FC = () => {
  return <HomeContent />;
};

export default Home;
