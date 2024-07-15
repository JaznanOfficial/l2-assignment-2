import { useFormContext, useFieldArray } from "react-hook-form";
import { Plus, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import CustomTimePicker from "./CustomTimePicker";
import CustomSelect from "./CustomSelect";
import { options } from "@/utils/data";

interface IFormInput {
  addPeriod: {
    startTime: string;
    endTime: string;
    services: string[];
    locations: string[];
  }[];
}

const CustomArrayFieldsForPeriod = () => {
  const { control, getValues } = useFormContext<IFormInput>();
  const { fields, append, remove } = useFieldArray<IFormInput>({
    control,
    name: "addPeriod",
  });

  // Ensure at least one period is rendered
  if (fields.length === 0) {
    append({
      startTime: "",
      endTime: "",
      services: [],
      locations: [],
    });
  }

  const handleAppend = () => {
    append({
      startTime: "",
      endTime: "",
      services: [],
      locations: [],
    });
    console.log("add: ", getValues());
  };

  // Disable remove button if there's only one period
  const canRemove = fields.length > 1;

  return (
    <>
      {fields.map((field, index) => (
        <div
          key={field.id}
          className="border border-solid border-slate-200 p-6 rounded-md col-span-full mb-6"
        >
          <div className="col-span-full flex justify-between items-center">
            <h2 className="text-lg font-semibold">Add period {index + 1}</h2>
            {canRemove && (
              <Button
                className="w-fit py-1 text-sm text-red-400 hover:bg-red-500/15 hover:text-red-600 border-red-500"
                variant="outline"
                type="button"
                onClick={() => remove(index)}
              >
                <Trash /> Remove
              </Button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <CustomTimePicker
              name={`addPeriod[${index}].startTime`}
              label="Start Time"
            />
            <CustomTimePicker
              name={`addPeriod[${index}].endTime`}
              label="End Time"
            />
            <CustomSelect
              name={`addPeriod[${index}].services`}
              label="Services"
              options={options}
            />
            <CustomSelect
              name={`addPeriod[${index}].locations`}
              label="Locations"
              options={options}
            />
          </div>
        </div>
      ))}
      <Button variant="outline" type="button" onClick={handleAppend}>
        <Plus className="mr-2" /> Add
      </Button>
    </>
  );
};

export default CustomArrayFieldsForPeriod;
