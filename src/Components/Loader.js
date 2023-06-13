import React from "react";

const Loader = () => {
  return (
    <div className=" flex justify-center m-[auto] top-[50%] absolute left-[50%]">
      <span class="relative flex h-3 w-3">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 ">
          {" "}
        </span>
      </span>
    </div>
  );
};

export default Loader;
