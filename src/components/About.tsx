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
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet ipsa
          obcaecati provident laborum hic architecto quae incidunt magnam
          maiores omnis aspernatur, voluptatibus laudantium nam minima dolorem
          est rerum quia mollitia!
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
          saepe, qui perspiciatis cupiditate doloribus pariatur, nemo natus
          consectetur magnam quasi aspernatur? Nobis rem tempora deleniti, harum
          eveniet beatae dolorem ullam!
        </p>
      </div>
    </div>
  );
}

export default About;
