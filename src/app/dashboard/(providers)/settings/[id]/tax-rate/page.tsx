"use client";

import Heading from "@/components/dashboard/common/Heading";
import CustomFromProvider from "@/components/shared/CustomFormProvider/CustomFormProvider";
import CustomInput from "@/components/shared/CustomFormProvider/CustomInput";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "antd";
import { Minus, Plus, Save } from "lucide-react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const AddTaxRateSettingPage = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("Form data:", data);
    // Handle form submission
  };

  return (
    <section className="bg-white h-full p-6 rounded-md">
      <CustomFromProvider onSubmit={onSubmit}>
        <div className="pb-5 rounded-md border-b border-solid border-slate-200 flex justify-between items-center">
          <Heading title="Add Tax Rate" />
          <Button className="w-fit" variant="default" type="submit">
            <Save className="mr-2" /> Add Tax Rate
          </Button>
        </div>
        <div className="mt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CustomInput type="text" name="taxRateName" label="Tax rate name" />
            <div className="flex gap-3 items-center">
              <Button type="button" className="mt-3">
                <Minus />
              </Button>
              <CustomInput
                type="number"
                name="taxRate"
                label="Tax rate (%)"
                placeholder="1"
              />
              <Button type="button" className="mt-3">
                <Plus />
              </Button>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Switch id="task-rate" />
            <Label htmlFor="task-rate">Make this Task Rate default</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="all-services" />
            <Label htmlFor="all-services">
              Apply this task rate to all services
            </Label>
          </div>
        </div>
      </CustomFromProvider>
    </section>
  );
};

export default AddTaxRateSettingPage;
