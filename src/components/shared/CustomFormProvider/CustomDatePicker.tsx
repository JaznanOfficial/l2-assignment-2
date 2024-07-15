import { Label } from "@radix-ui/react-label";
import { DatePicker } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import ErrorMessage from "../Common/ErrorMessage";
import dayjs from "dayjs";

type TCustomeDatePicker = {
  name: string;
  label: string;
};

const CustomDatePicker = ({ name, label }: TCustomeDatePicker) => {
  const {
    formState: { errors },
  } = useFormContext();

  // Example function to disable dates in the DatePicker
  const disabledDate = (current: any) => {
    // Logic to disable dates, if needed
    return current && current < dayjs().endOf("day");
  };

  // Example function to disable specific times in the TimePicker
  const disabledDateTime = () => {
    // Logic to disable times, if needed
    return {
      disabledHours: () => [0, 1, 2, 3, 4, 5],
      disabledMinutes: () => [0, 15, 30, 45],
      disabledSeconds: () => [0],
    };
  };

  return (
    <div className="mb-4">
      <Controller
        name={name}
        rules={{ required: `${label} is required` }}
        render={({ field }) => (
          <>
            <Label htmlFor={name}>{label}</Label>
            <DatePicker
              {...field}
              // open
              format="YYYY-MM-DD HH:mm:ss"
              disabledDate={disabledDate}
              disabledTime={disabledDateTime}
              showTime={{ defaultValue: dayjs("00:00:00", "HH:mm:ss") }}
              className="w-full py-2.5"
            />
          </>
        )}
      />
      {errors[name] && <ErrorMessage message={errors[name].message || ""} />}
    </div>
  );
};

export default CustomDatePicker;
