"use client";

import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";

import CustomFromProvider from "@/components/shared/CustomFormProvider/CustomFormProvider";
import CustomInput from "@/components/shared/CustomFormProvider/CustomInput";
import CustomImageUpload from "@/components/shared/CustomFormProvider/CustomImageUpload";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
const EditCategory = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);

    // You can handle the file upload here (e.g., send to a server)
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="text-[#2A8DE4] capitalize font-medium text-base">Edit</p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px] max-h-[600px] md:max-h-[800px] overflow-x-hidden overflow-y-auto">
        <DialogHeader className="text-center mb-6 py-5 border-b border-solid border-slate-300">
          <DialogTitle className="text-xl font-bold text-center">
            Edit Category
          </DialogTitle>
        </DialogHeader>
        <div>
          <CustomFromProvider onSubmit={onSubmit}>
            <CustomImageUpload name="image" label="Category Image" />
            <CustomInput
              placeholder="Enter category name"
              type="text"
              name="categoryName"
              label="Category Name"
            />
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

export default EditCategory;
