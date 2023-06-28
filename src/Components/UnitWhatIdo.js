import React from "react";

const UnitWhatIdo = ({ id, logo, title, body }) => {
  return (
    <div className="px-3">
      {logo}
      <h1 className="font-Poppins font-medium">{title}</h1>
      <p className="text-[#999999] font-Poppins font-light  mb-4 text-justify">
        {body}
      </p>
    </div>
  );
};

export default UnitWhatIdo;
