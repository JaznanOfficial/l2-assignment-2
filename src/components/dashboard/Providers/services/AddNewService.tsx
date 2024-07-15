"use client";

import { SubmitHandler, FieldValues } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Plus, Upload } from "lucide-react";
import Image from "next/image";
import CustomFromProvider from "@/components/shared/CustomFormProvider/CustomFormProvider";
import CustomInput from "@/components/shared/CustomFormProvider/CustomInput";
import CustomSelect from "@/components/shared/CustomFormProvider/CustomSelect";
import { options } from "@/utils/data";
import CustomArrayFields from "@/components/shared/CustomFormProvider/CustomArrayFields";

const AddNewService = () => {
  const defaultValue = {
    addOns: [{ name: "foo1", price: "bar1" }],
  };
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("Form data:", data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">
          <Plus className="mr-2" /> Add New Service
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px] max-h-[600px] md:max-h-[800px] overflow-x-hidden overflow-y-auto">
        <DialogHeader className="text-center mb-6 py-5 border-b border-solid border-slate-300">
          <DialogTitle className="text-xl font-bold text-center">
            Edit Service
          </DialogTitle>
        </DialogHeader>

        <div className="flex md:flex-row flex-col gap-6">
          {/* avatar */}
          <div className="max-w-[200px] w-full space-y-4">
            <p className="text-black/85 font-medium text-lg">Profile avatar</p>
            <div className="w-[100px] h-[100px] mx-auto">
              <Image
                className="rounded-full"
                src="/face.png"
                alt="avatar"
                width={100}
                height={100}
              />
            </div>
            <div>
              <Label
                className="cursor-pointer border border-solid border-slate-200 px-4 py-2 w-full rounded-md flex items-center gap-2 justify-center"
                htmlFor="file"
              >
                <Upload /> Change avatar
              </Label>
              <Input
                id="file"
                type="file"
                className="hidden"
                // {...register("avatar")}
              />
            </div>
          </div>
          {/* form */}
          <div className="flex-1">
            <CustomFromProvider
              defaultValues={defaultValue}
              onSubmit={onSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CustomInput
                  placeholder="Enter service name"
                  type="text"
                  name="service_name"
                  label="Name"
                />
                <CustomSelect
                  name="category"
                  label="Category"
                  options={options}
                />
                <CustomInput
                  placeholder="Enter service description"
                  type="text"
                  name="service_description"
                  label="Description"
                />
                <CustomSelect
                  name="assigned_staff"
                  label="Assigned staff"
                  options={options}
                />
                <CustomSelect
                  name="available_slot"
                  label="Available slot"
                  options={options}
                />
                <CustomInput
                  placeholder="Enter number of slots"
                  type="text"
                  name="number_of_slots"
                  label="Number of slots"
                />
                <CustomInput
                  placeholder="Enter waste oil price"
                  type="text"
                  name="waste_oil_price"
                  label="Waste oil price"
                />
                <CustomInput
                  placeholder="Enter price"
                  type="text"
                  name="price"
                  label="Price"
                />
                {/* Add-ons */}
                <div className="border-t border-slate-300 border-solid py-3 mb-3 col-span-full">
                  <h3 className="text-black/85 font-medium text-base mb-3">
                    Add-ons
                  </h3>
                  <CustomArrayFields />
                </div>

                {/* Add-ons */}
              </div>

              {/* submit button */}
              <div className="flex justify-end gap-3">
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
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewService;
