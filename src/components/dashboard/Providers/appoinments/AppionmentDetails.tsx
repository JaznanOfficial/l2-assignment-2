// @ts-nocheck

import { motion as m } from "framer-motion";
import { X } from "lucide-react";
import BookingDetails from "./BookingDetails";

const AppointmentDetails = ({ setShowDetails }) => {
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
              Booking Details
            </h2>
            <div className="flex gap-4 items-center">
              <p className="text-[#00C444] capitalize font-medium text-base">
                Pending
              </p>
              <p className="text-[#FB001D] capitalize font-medium text-base">
                Delete
              </p>
            </div>
          </div>
          {/* Details */}
          <BookingDetails />
        </div>
      </m.div>
    </m.div>
  );
};

export default AppointmentDetails;
