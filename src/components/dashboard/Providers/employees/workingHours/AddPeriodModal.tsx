"use client";


import { Plus } from "lucide-react";
import { SubmitHandler, FieldValues } from "react-hook-form";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import CustomFromProvider from "@/components/shared/CustomFormProvider/CustomFormProvider";

import CustomTimePicker from "@/components/shared/CustomFormProvider/CustomTimePicker";
import CustomSelect from "@/components/shared/CustomFormProvider/CustomSelect";
import { options } from "@/utils/data";
import moment from "moment";

const AddPeriodModal = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("form data==> :", data);
    const startTime = moment(new Date(data.time)).format("HH:mm");
    console.log(startTime, "start time");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">
          <Plus className="mr-2" /> Add Period
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px] max-h-[600px] md:max-h-[800px] overflow-x-hidden overflow-y-auto">
        <DialogHeader className="text-center mb-6 py-5 border-b border-solid border-slate-300">
          <DialogTitle className="text-xl font-bold text-center">
            Add Period
          </DialogTitle>
        </DialogHeader>
        <div>
          <CustomFromProvider onSubmit={onSubmit}>
            <CustomTimePicker name="time" label="Time" />
            <CustomSelect name="service" label="Service" options={options} />
            <CustomSelect name="location" label="Location" options={options} />
            <div className="flex justify-end gap-3 mt-4">
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" variant="default">
                Submit
              </Button>
            </div>
          </CustomFromProvider>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddPeriodModal;
