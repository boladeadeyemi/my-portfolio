import React from "react";
import tekstor from "../asset/tekstor.jpg";
import amazon from "../asset/amazon-clone.png";
import clock from "../asset/digital-clock.png";
import portfolio from "../asset/portfolio.png";
import youtube from "../asset/youtube-clone.png";
import gym from "../asset/gym-exercise.png";

function RecentWork() {
  return (
    <div className="w-full bg-white py-16 px-4" id="recentWorks">
      <p className="md:ml-32 ml-5 font-Kaushan font-bold text-left md:text-3xl text-xl mb-4">
        Recent Works
      </p>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 md:grid-rows-2">
        <div className="px-3 rounded-2xl mr-2 mb-2 ">
          <a
            href="https://tekstor-code-nest.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={tekstor}
              alt=""
              className="mb-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-90 ..."
            />
          </a>
          <h1 className="font-Poppins ">TEKSTOR ECOMMERCE</h1>
        </div>
        <div className="px-3 rounded-2xl mr-2 mb-2">
          <a
            href="https://youtube-clone-one-livid.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={youtube}
              alt=""
              className="mb-4 h-[19.1em] mx-auto pt-3 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-90 ..."
            />
          </a>
          <h1 className="font-Poppins">YOUTUBE CLONE</h1>
        </div>
        <div className="px-3 rounded-2xl mr-2 mb-2">
          <a
            href="https://bolade-gym-exercises.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={gym}
              alt=""
              className="mb-4 h-[19.1em] mx-auto pt-3 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-90 ..."
            />
          </a>
          <h1 className="font-Poppins">GYM EXERCISE SITE</h1>
        </div>
        <div className="px-3 rounded-2xl mb-2">
          <a
            href="https://bolade-digital-clock.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={clock}
              alt=""
              className="mb-4 h-[19.1em] mx-auto pt-3 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-90 ..."
            />
          </a>
          <h1 className="font-Poppins">DIGITAL CLOCK</h1>
        </div>
        <div className="px-3 rounded-2xl mb-2">
          <a
            href="https://my-portfolio-zg1z.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={portfolio}
              alt=""
              className="mb-4 h-[20.4em] mx-auto pt-3 mt-[-19px] transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-90 ..."
            />
          </a>
          <h1 className="font-Poppins">PORTFOLIO WEBSITE</h1>
        </div>
        <div className="px-3 rounded-2xl mr-2 mb-2">
          <a
            href="https://amazonclone-delta.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={amazon}
              alt=""
              className="mb-4 h-[19.1em] mx-auto pt-3 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-90 ..."
            />
          </a>
          <h1 className="font-Poppins">AMAZON CLONE</h1>
        </div>
      </div>
    </div>
  );
}

export default RecentWork;
