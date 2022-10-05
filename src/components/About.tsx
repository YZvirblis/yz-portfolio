import React from "react";

function About() {
  return (
    <div
      //@ts-ignore
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-2xl md:text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="md:text-xl mt-5 md:mt-20">
          My name is Yuriy Zhvirblis. <br />
          I am a Fullstack developer. I finished a Full Stack Development course
          at ITC (Israel Tech Challenge Tel-Aviv).
          <br />
          Mainly my experience comes from working with companies like Moonverse,
          TLVTech, Deeb and also from creating personal projects.
          <br />
          Today I am a freelance Full Stack Developer. some of my works include:
          creating websites, blogs, backend API servers, games, bots and more..{" "}
          <br /> I am looking for the right opportunity.
        </p>
        <br />
        <p className="md:text-xl">
          Aside from coding I like admiring art and playing video games. <br />I
          see video games as the ultimate art as it combines all of the aspects
          of it. <br />I also like learning new stuff if it's from books or from
          documentaries.
        </p>
      </div>
    </div>
  );
}

export default About;
