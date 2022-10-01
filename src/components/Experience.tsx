import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import firebase from "../assets/firebase.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import mongodb from "../assets/mongodb.png";
import mysql from "../assets/mysql.png";
import node from "../assets/node.png";
import redux from "../assets/redux.png";
import telegram from "../assets/telegram.png";
import unity from "../assets/unity.png";
import bootstrap from "../assets/bootstrap.svg";
import csharp from "../assets/csharp.svg";
import angular from "../assets/angular.png";
import aws from "../assets/aws.png";
import typescript from "../assets/typescript.png";
import serverless from "../assets/serverless.png";

function Experience() {
  const techs = [
    {
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      src: javascript,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      src: typescript,
      title: "Typescript",
      style: "shadow-blue-500",
    },
    {
      src: reactImage,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      src: redux,
      title: "Redux",
      style: "shadow-purple-600",
    },
    {
      src: nextjs,
      title: "NextJs",
      style: "shadow-white",
    },
    {
      src: angular,
      title: "Angular",
      style: "shadow-red-500",
    },
    {
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-500",
    },
    {
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-300",
    },
    {
      src: node,
      title: "NodeJS",
      style: "shadow-green-600",
    },
    {
      src: telegram,
      title: "Telegram API",
      style: "shadow-sky-300",
    },
    {
      src: csharp,
      title: "C#",
      style: "shadow-purple-500",
    },
    {
      src: unity,
      title: "Unity",
      style: "shadow-gray-500",
    },
    {
      src: github,
      title: "Github",
      style: "shadow-gray-400",
    },
    {
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-400",
    },
    {
      src: mysql,
      title: "MySQL",
      style: "shadow-blue-400",
    },
    {
      src: firebase,
      title: "Firebase",
      style: "shadow-yellow-600",
    },
    {
      src: aws,
      title: "AWS",
      style: "shadow-yellow-700",
    },
    {
      src: serverless,
      title: "Serverless",
      style: "shadow-red-400",
    },
  ];

  return (
    <div
      //@ts-ignore
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I worked with:</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ src, title, style }, index) => {
            return (
              <div
                key={index}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Experience;
