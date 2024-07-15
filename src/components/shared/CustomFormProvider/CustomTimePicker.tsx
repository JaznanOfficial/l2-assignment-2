"use client";

import { Label } from "@radix-ui/react-label";
import { TimePicker } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import ErrorMessage from "../Common/ErrorMessage";

type TCustomTimePicker = {
  name: string;
  label: string;
};

const CustomTimePicker = ({ name, label }: TCustomTimePicker) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="w-full mb-4">
      <Controller
        name={name}
        control={control}
        rules={{ required: `${label} is required` }}
        render={({ field }) => (
          <>
            <Label className="mb-2 block" htmlFor={name}>
              {label}
            </Label>
            <TimePicker
              {...field}
              className="w-full py-2.5" // Ensure the TimePicker is full width
              use12Hours
              format="h:mm a"
            />
          </>
        )}
      />
      {errors[name] && (
        <ErrorMessage message={(errors[name] as any)?.message || ""} />
      )}
    </div>
  );
};

export default CustomTimePicker;
