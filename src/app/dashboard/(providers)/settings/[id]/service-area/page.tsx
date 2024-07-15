"use client";

import Heading from "@/components/dashboard/common/Heading";
import CustomFromProvider from "@/components/shared/CustomFormProvider/CustomFormProvider";
import CustomInput from "@/components/shared/CustomFormProvider/CustomInput";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Save } from "lucide-react";
import Image from "next/image";
import { FieldValues, SubmitHandler } from "react-hook-form";

const ServiceAreaSettingsPage = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("Form data:", data);
    // Handle form submission
  };

  return (
    <section className="bg-white h-full p-6 rounded-md">
      <CustomFromProvider onSubmit={onSubmit}>
        <div className="pb-5 rounded-md border-b border-solid border-slate-200 flex justify-between items-center">
          <Heading title="Service area" />
          <Button className="w-fit" variant="default" type="submit">
            <Save className="mr-2" /> Save
          </Button>
        </div>
        <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-7">
          <div className=" ">
            <CustomInput
              type="text"
              name="origin"
              label="Origin"
              placeholder="New York, NY 10011, USA"
            />
            <div className="flex gap-3 items-center">
              <Button type="button" className="mt-3">
                <Minus />
              </Button>
              <CustomInput
                type="number"
                name="mileFromOrigin"
                label="Mile/s from origin"
                placeholder="30"
              />
              <Button type="button" className="mt-3">
                <Plus />
              </Button>
            </div>
            <small className="block my-4">30 mins travel time</small>
            <Button className="w-fit">Draw</Button>
          </div>
          <div>
            <Image
              src="/images/icons/map.svg"
              width={200}
              height={200}
              alt="map"
              className="w-full"
            />
          </div>
        </div>
      </CustomFromProvider>
    </section>
  );
};

export default ServiceAreaSettingsPage;
