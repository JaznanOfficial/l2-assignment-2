"use client";

import { useState } from "react";

const Toggle = () => {
  const [active, setActive] = useState(false);
  return (
    <div
      onClick={() => setActive((prev) => !prev)}
      className={`w-10 h-6 px-1 rounded-full flex items-center cursor-pointer ${
        active ? "bg-primary" : "bg-primary/20 dark:bg-neutral-700 shadow-sm"
      }`}
    >
      <div
        className={`h-5 w-5 rounded-full duration-300 ${
          active
            ? "translate-x-3 bg-white"
            : "translate-x-0 bg-white dark:bg-neutral-300"
        }`}
      ></div>
    </div>
  );
};

export default Toggle;
