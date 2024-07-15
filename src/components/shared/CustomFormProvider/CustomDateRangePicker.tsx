import { Label } from "@radix-ui/react-label";
import { DatePicker } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import ErrorMessage from "../Common/ErrorMessage";

const { RangePicker } = DatePicker;

type TCustomDateRangePicker = {
  name: string;
  label: string;
};

const CustomDateRangePicker = ({ label, name }: TCustomDateRangePicker) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const disabledDate = (current: any) => {
    // Logic to disable dates, if needed
    // Example: Disable dates before today
    return current && current < new Date();
  };

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
            <RangePicker
              {...field}
              className="w-full py-3"
              placeholder={["Start Date", "End Date"]}
              // Always open
              disabledDate={disabledDate}
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

export default CustomDateRangePicker;
