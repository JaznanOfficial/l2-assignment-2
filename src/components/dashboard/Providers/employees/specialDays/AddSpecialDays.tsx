"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Plus } from "lucide-react";
import { SubmitHandler, FieldValues } from "react-hook-form";

import CustomFromProvider from "@/components/shared/CustomFormProvider/CustomFormProvider";
import CustomArrayFieldsForPeriod from "@/components/shared/CustomFormProvider/CustomArrayFieldsForPeriod";
import CustomDatePicker from "@/components/shared/CustomFormProvider/CustomDatePicker";

const AddSpecialDaysModal = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data, "data for special event");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">
          <Plus className="mr-2" /> Add special day
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px] max-h-[600px] md:max-h-[800px] overflow-x-hidden overflow-y-auto">
        <DialogHeader className="text-center mb-6 py-5 border-b border-solid border-slate-300">
          <DialogTitle className="text-xl font-bold text-center">
            Add special day
          </DialogTitle>
        </DialogHeader>
        <div>
          <CustomFromProvider onSubmit={onSubmit}>
            <CustomDatePicker label="Date" name="date" />
            <CustomArrayFieldsForPeriod />
            <div className="flex justify-end gap-3 mt-4 col-span-full">
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" variant="default">
                Add special day
              </Button>
            </div>
          </CustomFromProvider>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddSpecialDaysModal;
