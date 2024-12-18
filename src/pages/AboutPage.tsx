import React from 'react';
import useMetaData from '../hooks/useMetaData';

const AboutPage: React.FC = () => {
  useMetaData({
    title: 'About Marcello',
    description: 'Learn more about Marcello, his career, and his journey.',
    ogTitle: 'About Marcello De Feo',
    ogDescription: 'Read about Marcello’s path from journalism to software engineering.'
  });

  return (
    <div>
      <h2 className="text-2xl font-semibold">About</h2>
      <p>Hello there, I'm Marcello. I believe in the power of hard work and servant leadership. Over the years, I've worn many hats—I'm a developer, a former journalist, and a former restaurateur. Each of these chapters has shaped my approach to leadership, technology, and life in general.</p>

        <h3>A Culinary History</h3>
        <p>My journey began in the kitchen. I started working in restaurants at the age of 12, washing dishes, and quickly climbed up the ranks to become a chef and restaurant owner. My proudest venture was Valente’s Cucina, a boutique modern Italian restaurant where I poured my heart into every dish. With a 4.9-star rating across the board, it was more than just a place to eat—it was a tribute to the strong women in my family, my matriarchs who made sure food was always a central part of our lives. As a first-generation Italian-American, cooking is in my blood, and making fresh pasta is something I take great pride in.</p>

        <h3>The Journey to Journalism</h3>
        <p>My journey took an unexpected turn when I found a passion for writing. In high school, I started writing for the Philadelphia Daily News, contributing to their "Fresh Ink" section. In college, I earned a dual BA in English and Fine Arts, focusing on writing and digital design. I went on to become the youngest Editor-in-Chief of our school paper, The Hawk. After college, I moved to Colorado and worked for The Colorado Daily, the oldest consecutive daily publication in America, as the Layout Designer and News Editor. I also continued freelancing, contributing features to various publications, which marked the transition from journalism to tech.</p>

        <h3>The Developer's Journey</h3>
        <p>Over the past two decades, I’ve built a career in technology, starting with Web Development and Database Administration at my alma mater. I worked on Java, Oracle, and JavaScript technologies and fell in love with the endless possibilities technology provides. Since then, I've embraced the evolving landscape of tech, tackling projects in full-stack and back-end development.</p>

        <p>My time at an ad agency for Fortune 500 companies allowed me to work on major projects like IKEA’s Seasonal Launch Vehicle, a high-traffic interactive digital catalog. I’ve always leaned toward LAMP stack technologies, though I’ve worked with .NET and C# as well. Today, I’m immersed in full-stack JavaScript development, using Node.js, React, NestJS, and Azure DevOps to build APIs and full-fledged applications.</p>

        <h3>Leadership: More Than a Title</h3>
        <p>To me, leadership is not about titles or hierarchy. It’s about setting an example, being part of the team, and pushing toward a common goal. Whether in the kitchen or in a tech team, I lead with empathy, understanding, and a relentless pursuit of excellence. Leadership is about showing up, inspiring others, and making an impact together.</p>

        <h3>Sum of My Experiences</h3>
        <p>Though my professional journey is a bit unconventional, each role has added depth to my skills and perspective. I see myself as a lifelong learner, constantly seeking out new opportunities to grow and explore creative passions.</p>

        <p>Music has always been an integral part of my life. From playing in bands and touring the East Coast to refurbishing guitars as a hobby, I’ve found that music allows me to express myself in ways that technology can’t. It’s a therapeutic process—taking something old and forgotten and giving it new life.</p>

        <p>Family is my anchor. My wife and children inspire me to strive for greatness, and our home is filled with laughter, music, and, often, the smell of fresh pasta. I aim to leave behind a legacy of kindness, creativity, and hard work.</p>

        <p>Lastly, I have a deep love for storytelling, especially through the lens of the Star Wars universe. The way narratives are crafted by storytellers like Dave Filoni and Jon Favreau resonate with me. They remind me of the incredible power of storytelling to unite, inspire, and entertain.</p>
    </div>
  );
};

export default AboutPage;
