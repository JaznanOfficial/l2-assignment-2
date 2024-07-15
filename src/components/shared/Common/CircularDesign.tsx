// src/CircularDesign.jsx

import React from "react";

const CircularDesign = () => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center bg-black">
      <div className="absolute border-2 border-[#0172FF]/25 rounded-full w-[300px] h-[300px]"></div>
      <div className="absolute border-2 border-[#0172FF]/45 rounded-full w-[400px] h-[400px]"></div>
      <div className="absolute border-2 border-[#0172FF]/65 rounded-full w-[500px] h-[500px]"></div>
    </div>
  );
};

export default CircularDesign;
