import {
  ArrowDownward,
  FacebookOutlined,
  GitHub,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import React from "react";
import { useTypewriter } from "react-simple-typewriter";

function Banner() {
  const [text] = useTypewriter({
    words: ["Developer", "Coder", "Freelancer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 20,
    delaySpeed: 4000,
  });
  return (
    <div className="h-full">
      <div className="max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
        <p className="text-white font-Poppins-800 font-bold md:text-8xl sm:text-6xl text-4xl">
          {text}
        </p>
        <div className=" text-white py-2 flex-row justify-between w-auto ">
          <a
            href="https://github.com/boladeadeyemi?tab=repositories"
            target="_blank"
            className="pr-4"
          >
            <GitHub />
          </a>
          <a
            href="https://www.facebook.com/Boleegin"
            target="_blank"
            className="pr-4"
          >
            <FacebookOutlined />
          </a>
          <a
            href="https://twitter.com/boladeadeyemi"
            target="_blank"
            className="pr-4"
          >
            <Twitter />
          </a>
          <a
            href="https://www.linkedin.com/in/bolade-adeyemi-8b254680/"
            target="_blank"
            className="pr-4"
          >
            <LinkedIn />
          </a>
          <a
            href="https://www.youtube.com/channel/UC3vQUIV9EOTwD7vARo5ViiA"
            target="_blank"
          >
            <YouTube />
          </a>
        </div>
      </div>
      <a href="#about">
        <ArrowDownward className="text-white animate-bounce w-6 mx-[50%]" />
      </a>
    </div>
  );
}

export default Banner;
