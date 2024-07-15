"use client";
import { Plus } from "lucide-react";
import { SubmitHandler, FieldValues } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
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
import CustomInput from "@/components/shared/CustomFormProvider/CustomInput";
import CustomDateRangePicker from "@/components/shared/CustomFormProvider/CustomDateRangePicker";
import moment from "moment";

const AddDayOffModal = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("From data", data);
    const [startDate, endDate] = data.date;
    const formattedStartDate = moment(startDate).format("YYYY-MM-DD");
    const formattedEndDate = moment(endDate).format("YYYY-MM-DD");
    console.log("Start Date:", formattedStartDate);
    console.log("End Date:", formattedEndDate);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">
          <Plus className="mr-2" /> Add day off
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px] max-h-[600px] md:max-h-[800px] overflow-x-hidden overflow-y-auto">
        <DialogHeader className="text-center mb-6 py-5 border-b border-solid border-slate-300">
          <DialogTitle className="text-xl font-bold text-center">
            Add Day off
          </DialogTitle>
        </DialogHeader>
        <div>
          <CustomFromProvider onSubmit={onSubmit}>
            <CustomInput type="text" name="name" label="Day off name" />
            <CustomDateRangePicker label="Date" name="date" />
            <div className="flex justify-end gap-3 mt-4 col-span-full">
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" variant="default">
                Add day off
              </Button>
            </div>
          </CustomFromProvider>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddDayOffModal;
