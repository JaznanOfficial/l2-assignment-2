"use client";

import Heading from "@/components/dashboard/common/Heading";

import CustomFromProvider from "@/components/shared/CustomFormProvider/CustomFormProvider";
import CustomInput from "@/components/shared/CustomFormProvider/CustomInput";
import { Button } from "@/components/ui/button";

import { Save } from "lucide-react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const ProviderSettingsPage = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("Form data:", data);
    // Handle form submission
  };
  const changePassSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("Form data for change password:", data);
    // Handle form submission
  };

  return (
    <section className="bg-white h-full p-6 rounded-md ">
      <div className="flex gap-20">
        <CustomFromProvider onSubmit={onSubmit}>
          <div className="pb-5 rounded-md border-b border-solid border-slate-200 flex justify-between items-center w-full">
            <Heading title="Provider" />
            <Button className="w-fit" variant="default" type="submit">
              <Save className="mr-2" /> Save
            </Button>
          </div>
          <div className="mt-5 w-full">
            <CustomInput
              type="text"
              name="name"
              label="Name"
              placeholder="Juan Dela Cruz"
            />
            <CustomInput
              type="text"
              name="phone"
              label="Phone"
              placeholder="+63 9169588445"
            />
            <CustomInput
              type="text"
              name="email"
              label="Email"
              placeholder="sample-email@gmail.com"
            />
            <p className="text-sm">
              Used for payments when wire transfer payment method is selected
            </p>
          </div>
        </CustomFromProvider>
        <CustomFromProvider onSubmit={changePassSubmit}>
          <div className="pb-5 rounded-md border-b border-solid border-slate-200 flex justify-between items-center w-full">
            <Heading title="Change Password" />
            <Button className="w-fit" variant="default" type="submit">
              <Save className="mr-2" /> Save
            </Button>
          </div>
          <div className="mt-5 w-full">
            <CustomInput
              type="password"
              name="password"
              label="Password"
              placeholder="****"
            />
            <CustomInput
              type="password"
              name="confirmPassword"
              label="Confirm Password"
              placeholder="****"
            />
          </div>
        </CustomFromProvider>{" "}
      </div>
    </section>
  );
};

export default ProviderSettingsPage;
