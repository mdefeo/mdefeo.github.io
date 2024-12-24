import React from "react";
import useMetaData from "../hooks/useMetaData";

const AboutPage: React.FC = () => {
  useMetaData({
    title: "About Marcello",
    description: "Learn more about Marcello, his career, and his journey.",
    ogTitle: "About Marcello De Feo",
    ogDescription:
      "Read about Marcello’s path from journalism to software engineering.",
  });

  return (
    <main
      className="max-w-4xl mx-auto px-6 sm:px-12 py-12 text-gray-700"
      aria-label="About Marcello"
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About</h1>

      <section className="mb-10 space-y-4">
        <p className="text-lg">
          Hello there, I'm Marcello. I believe in the power of hard work and
          servant leadership. Over the years, I've worn many hats—developer,
          former journalist, and restaurateur. Each chapter has shaped my
          approach to leadership, technology, and life.
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-3xl font-semibold text-gray-800">A Culinary History</h2>
        <p className="text-lg">
          My journey began in the kitchen at age 12, washing dishes and climbing
          the ranks to chef and restaurant owner. My proudest venture was
          Valente’s Cucina, a boutique modern Italian restaurant where I
          celebrated my Italian heritage and the strong women in my family. With
          a 4.9-star rating, it was more than a restaurant—it was a tribute.
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-3xl font-semibold text-gray-800">The Journey to Journalism</h2>
        <p className="text-lg">
          High school introduced me to journalism at the Philadelphia Daily News.
          In college, I earned a dual BA in English and Fine Arts, becoming the
          youngest Editor-in-Chief of our school paper, <em>The Hawk</em>. My
          career evolved at <em>The Colorado Daily</em>, where I worked as Layout
          Designer and News Editor, bridging my passion for storytelling and
          design.
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-3xl font-semibold text-gray-800">The Developer's Journey</h2>
        <p className="text-lg">
          Technology became my focus as I transitioned to web development and
          database administration. Over 20 years, I’ve embraced full-stack and
          back-end roles, tackling projects for Fortune 500 companies like
          IKEA’s Seasonal Launch Vehicle. Today, I specialize in JavaScript
          ecosystems, using Node.js, React, NestJS, and Azure.
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-3xl font-semibold text-gray-800">
          Leadership: More Than a Title
        </h2>
        <p className="text-lg">
          Leadership is about setting an example, being part of the team, and
          pushing toward a common goal. Whether in the kitchen or in tech, I
          lead with empathy and a relentless pursuit of excellence.
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-3xl font-semibold text-gray-800">
          Sum of My Experiences
        </h2>
        <p className="text-lg">
          My unconventional journey has deepened my perspective and skills. I
          cherish music as a therapeutic outlet, whether playing in bands,
          touring, or refurbishing guitars. Above all, family keeps me grounded,
          inspiring me to leave a legacy of kindness, creativity, and hard work.
        </p>
        <p className="text-lg">
          I’m also passionate about storytelling, especially in the Star Wars
          universe. Storytellers like Dave Filoni remind me of the power of
          narratives to unite, inspire, and entertain.
        </p>
      </section>
    </main>
  );
};

export default AboutPage;
