import React from "react";

const UnitWorks = ({ image, link, title }) => {
  return (
    <div className="px-3 rounded-2xl mr-2 mb-8 ">
      <a href={link} target="_blank" rel="noreferrer">
        <img
          src={image}
          alt="hum"
          className="mb-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-90 ..."
        />
      </a>

      <h1 className="font-Poppins mt-2 ">{title}</h1>
    </div>
  );
};

export default UnitWorks;
