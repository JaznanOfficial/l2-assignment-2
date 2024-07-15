"use client";

import Heading from "@/components/dashboard/common/Heading";
import { Button } from "@/components/ui/button";

import { Save } from "lucide-react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import CustomFromProvider from "@/components/shared/CustomFormProvider/CustomFormProvider";
import CustomInput from "@/components/shared/CustomFormProvider/CustomInput";
const ChangePasswordPage = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("form data==> :", data);
    // Handle form submission
  };
  return (
    <section className="bg-white h-full p-6 rounded-md">
      <CustomFromProvider onSubmit={onSubmit}>
        <div className="pb-5 rounded-md border-b border-solid border-slate-200 flex justify-between items-center">
          <Heading title="Change password" />
          <Button
            className="w-fit"
            variant="default"
            type="submit"
            // onClick={handleSubmit(onSubmit)}
          >
            <Save className="mr-2" /> Save
          </Button>
        </div>
        <div className="mt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CustomInput
              type="password"
              name="password"
              label="Password"
              placeholder="****"
            />
            <CustomInput
              type="password"
              name="confirmPassword"
              label="Confirm password"
              placeholder="****"
            />
          </div>
        </div>
      </CustomFromProvider>
    </section>
  );
};

export default ChangePasswordPage;
