"use client";

import Heading from "@/components/dashboard/common/Heading";
import CustomFromProvider from "@/components/shared/CustomFormProvider/CustomFormProvider";
import CustomInput from "@/components/shared/CustomFormProvider/CustomInput";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const ShopSettingsPage = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("Form data:", data);
    // Handle form submission
  };

  return (
    <section className="bg-white h-full p-6 rounded-md">
      {" "}
      <CustomFromProvider onSubmit={onSubmit}>
        <div className="pb-5 rounded-md border-b border-solid border-slate-200 flex justify-between items-center">
          <Heading title="Shop" />
          <Button className="w-fit" variant="default" type="submit">
            <Save className="mr-2" /> Save
          </Button>
        </div>
        <div className="mt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CustomInput
              type="text"
              name="shop_name"
              label="Shop Name"
              placeholder="Sample website"
            />
            <CustomInput
              type="text"
              name="website"
              label="Website address"
              placeholder="www.samplewebsite.com"
            />
            <CustomInput
              type="text"
              name="address"
              label="Address"
              placeholder="123 Main St, Anytown, USA"
            />
            <CustomInput
              type="text"
              name="country"
              label="Country of activity"
              placeholder="Country of activity "
            />
            <CustomInput
              type="text"
              name="bankAccount"
              label="Company bank account number"
              placeholder="Bank account number "
            />
          </div>
        </div>
      </CustomFromProvider>
    </section>
  );
};

export default ShopSettingsPage;
