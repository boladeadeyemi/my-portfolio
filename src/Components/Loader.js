import { CircularProgress } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <div className=" flex justify-center m-[auto] top-[50%] absolute left-[50%]">
      <CircularProgress color="success" />
    </div>
  );
};

export default Loader;
