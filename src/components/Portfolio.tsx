import React from "react";
import nasaTracker from "../assets/portfolio/nasa-tracker.png";

function Portfolio() {
  const portfolios = [
    {
      src: nasaTracker,
      url: "https://nasa-event-tracker-app.netlify.app/",
      code: "https://github.com/YZvirblis/nasa-realtime-event-google-map",
      title: "NASA Event Tracker",
      info: "A simple app presenting natural event data from NASA API on to a Google map",
    },
  ];

  return (
    <div
      //@ts-ignore
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-2xl md:text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">My work:</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ src, url, code, title, info }, index) => {
            return (
              <div key={index} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt={`project-${index}`}
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="my-2 px-3">
                  <p className="font-bold">{title}</p>
                  <p>{info}</p>
                </div>
                <div className="flex items-center justify-center ">
                  <a target={"_blank"} href={url}>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 ">
                      Demo
                    </button>
                  </a>
                  <a target={"_blank"} href={code}>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
