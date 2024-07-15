"use client";

import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import Heading from "@/components/dashboard/common/Heading";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import CustomFromProvider from "@/components/shared/CustomFormProvider/CustomFormProvider";
import CustomInput from "@/components/shared/CustomFormProvider/CustomInput";
import { Save } from "lucide-react";

const EmployeesDetailsPage = () => {
  const defaultValues = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: "123 Main St, Anytown, USA",
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("form data==> :", data);
    // Handle form submission
  };

  return (
    <section className="bg-white h-full p-6 rounded-md">
      <CustomFromProvider defaultValues={defaultValues} onSubmit={onSubmit}>
        <div className="pb-5 rounded-md border-b border-solid border-slate-200 flex justify-between items-center">
          <Heading title="Employees" />
          <Button className="w-fit" variant="default" type="submit">
            <Save className="mr-2" /> Save
          </Button>
        </div>
        <div className="mt-5">
          <div className="flex justify-center items-center my-5">
            <Image src="/profile.png" alt="Avatar" width={100} height={100} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CustomInput
              type="text"
              name="name"
              label="Name"
              placeholder="Enter your name"
            />
            <CustomInput
              type="text"
              name="email"
              label="Email"
              placeholder="Enter email"
            />
            <CustomInput
              type="text"
              name="phone"
              label="Phone"
              placeholder="Enter phone"
            />
            <CustomInput
              type="text"
              name="address"
              label="Address"
              placeholder="Enter address"
            />
          </div>
        </div>
      </CustomFromProvider>
    </section>
  );
};

export default EmployeesDetailsPage;
