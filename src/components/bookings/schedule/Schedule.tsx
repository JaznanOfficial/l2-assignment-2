// @ts-nocheck

"use client";

import { Button } from "@/components/ui/button";
import DateTimeSelector from "./DateTimeSelector";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addBookingDate,
  addBookingTime,
} from "@/redux/features/bookings/bookingSlice";

const Schedule = () => {
  const dispatch = useDispatch();
  const [selectedDateTime, setSelectedDateTime] = useState(null); // State to store selected date and time

  const onDateTimeSelect = (dateTime) => {
    setSelectedDateTime(dateTime);
    // Extract and set the date and time parts
    const date = dateTime.toLocaleDateString();
    const time = dateTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    dispatch(addBookingDate(date));
    dispatch(addBookingTime(time));
    console.log(date, time, "date and time");

    // Update state with selected date and time
    // You can perform any other actions here based on the selected date and time
  };

  console.log(selectedDateTime, "selectedDateTime");
  return (
    <div>
      <h2 className="text-3xl text-center my-5 font-extrabold text-secondary font-nunito mt-5">
        Select <span className="text-primary">Date And Time</span>
      </h2>
      <DateTimeSelector onDateTimeSelect={onDateTimeSelect} />
      <div className="flex justify-end gap-3 border-t border-solid border-slate-300 pt-5 mt-10">
        <Button variant="outline">
          <Link href={"/checkout"}>Continue</Link>
        </Button>
      </div>
    </div>
  );
};

export default Schedule;
