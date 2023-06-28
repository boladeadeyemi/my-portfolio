import React from "react";
import { skills } from "../Informations/data2";
import UnitWhatIdo from "./UnitWhatIdo";

function WhatIDo() {
  return (
    <div className="w-full bg-[#F9F9F9] py-16 px-4" id="whatIdo">
      <p className="md:ml-32 ml-5 font-Kaushan font-bold text-left md:text-3xl text-xl mb-4">
        My Skills
      </p>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 md:grid-rows-2">
        {skills.map((skill) => {
          return <UnitWhatIdo key={skill.id} {...skill} />;
        })}
      </div>
    </div>
  );
}

export default WhatIDo;
