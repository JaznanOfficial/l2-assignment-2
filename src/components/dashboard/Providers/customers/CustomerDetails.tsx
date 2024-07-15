// @ts-nocheck

"use client";

import { motion as m } from "framer-motion";
import { X } from "lucide-react";
import SingleCustomerDetails from "./SingleCustomerDetails";

const CustomersDetails = ({ setShowDetails }) => {
  return (
    <m.div
      exit={{ opacity: 0 }}
      className="fixed inset-0 h-full w-full bg-black/50 z-[100] flex justify-end"
    >
      <m.div
        initial={{ x: "100%" }}
        animate={{ x: 0, transition: { bounce: 1 } }}
        exit={{ x: "100%" }}
        className="w-full sm:w-1/2 bg-white dark:bg-blonde-dark h-svh flex flex-col justify-between overflow-y-auto"
      >
        <div>
          {/* header */}
          <div className="flex justify-between items-center p-4 border-b border-solid border-slate-200">
            <h2 className="text-xl font-bold flex items-center gap-3">
              <X onClick={() => setShowDetails(false)} />
              Customer details
            </h2>
            <div className="flex gap-4 items-center">
              <p className="text-[#2A8DE4] capitalize font-medium text-base">
                Edit
              </p>
            </div>
          </div>
          {/* Details */}
          <SingleCustomerDetails />
        </div>
      </m.div>
    </m.div>
  );
};

export default CustomersDetails;
