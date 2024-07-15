// @ts-nocheck

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getDay, setHours, setMinutes } from "date-fns";

const DateRangePicker = ({ onDateTimeSelect }) => {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), 9)
  );

  const filterWeekend = (date) => {
    const day = getDay(date);
    return day !== 0 && day !== 6; // Disable Sundays (0) and Saturdays (6)
  };

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  const onChange = (dateTime) => {
    setSelectedDateTime(dateTime);
    if (onDateTimeSelect) {
      onDateTimeSelect(dateTime);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <DatePicker
        selected={selectedDateTime}
        onChange={onChange}
        showTimeSelect
        filterDate={filterWeekend}
        filterTime={filterPassedTime} // Add the filterTime prop here
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="MMMM d, yyyy h:mm aa"
        inline
      />
    </div>
  );
};

export default DateRangePicker;
