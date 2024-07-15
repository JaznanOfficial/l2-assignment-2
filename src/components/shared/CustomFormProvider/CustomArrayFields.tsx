"use client";

import { useFormContext, useFieldArray } from "react-hook-form";
import CustomInput from "./CustomInput";
import { Plus, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

interface IFormInput {
  addOns: {
    name: string;
    price: string;
  }[];
}

const CustomArrayFields = () => {
  const { control, getValues } = useFormContext<IFormInput>();
  const { fields, append, remove } = useFieldArray<IFormInput>({
    control,
    name: "addOns",
  });

  const handleAppend = (value: { name: string; price: string }) => {
    append(value);
    console.log("add: ", getValues());
  };



  return (
    <>
      {fields.map((field, index) => (
        <div key={field.id} className="flex items-center rounded-md mb-2">
          <CustomInput
            type="text"
            placeholder="name"
            name={`addOns.${index}.name`}
            defaultValue={field.name}
          />
          <CustomInput
            type="text"
            placeholder="price"
            name={`addOns.${index}.price`}
            defaultValue={field.price}
          />
          <Button
            className="w-fit py-1 -mt-2 text-sm text-red-400 hover:bg-red-500/15 hover:text-red-600 border-red-500"
            variant="outline"
            type="button"
            onClick={() => remove(index)}
          >
            <Trash /> Remove
          </Button>
        </div>
      ))}
      <Button
        variant="outline"
        type="button"
        onClick={() => handleAppend({ name: "", price: "" })}
      >
        <Plus className="mr-2" /> Add
      </Button>
    </>
  );
};

export default CustomArrayFields;
