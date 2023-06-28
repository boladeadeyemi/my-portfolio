import React from "react";
import { recentworks } from "../Informations/data";
import UnitWorks from "./UnitWorks";

function RecentWork() {
  return (
    <div className="w-full bg-white py-16 px-4" id="recentWorks">
      <p className="md:ml-32 ml-5 font-Kaushan font-bold text-left md:text-3xl text-xl mb-4">
        Recent Works
      </p>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 md:grid-rows-2">
        {recentworks.map((recentWork) => {
          return <UnitWorks key={recentWork.id} {...recentWork} />;
        })}
      </div>
    </div>
  );
}

export default RecentWork;
