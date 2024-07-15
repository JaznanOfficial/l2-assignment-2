"use client";

import Heading from "@/components/dashboard/common/Heading";
import CustomFromProvider from "@/components/shared/CustomFormProvider/CustomFormProvider";
import CustomInput from "@/components/shared/CustomFormProvider/CustomInput";
import CustomSelect from "@/components/shared/CustomFormProvider/CustomSelect";
import { Button } from "@/components/ui/button";
import { options } from "@/utils/data";
import { Minus, Plus, Save } from "lucide-react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const PaymentsSettingPage = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("Form data:", data);
    // Handle form submission
  };

  return (
    <section className="bg-white h-full p-6 rounded-md">
      <CustomFromProvider onSubmit={onSubmit}>
        <div className="pb-5 rounded-md border-b border-solid border-slate-200 flex justify-between items-center">
          <Heading title="Payments" />
          <Button className="w-fit" variant="default" type="submit">
            <Save className="mr-2" /> Save
          </Button>
        </div>
        <div className="mt-5">
          <h4 className="mb-4">Price settings</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CustomSelect options={options} name="currency" label="Currency" />
            <CustomSelect
              options={options}
              name="priceSymbolPosition"
              label="Price symbol position"
            />
            <CustomSelect
              options={options}
              name="priceSeparator"
              label="Price separator"
            />
            <div className="flex gap-3 items-center">
              <Button type="button" className="mt-3">
                <Minus />
              </Button>
              <CustomInput
                type="number"
                name="advanceBookingDays"
                label="The number of days available for booking in advance"
                placeholder="30"
              />
              <Button type="button" className="mt-3">
                <Plus />
              </Button>
            </div>
          </div>
        </div>
        {/* Payment methods */}
        <div className="mt-9">
          <h4 className="mb-4">Payment methods</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-[#002256] flex justify-center items-center gap-2">
                  <Image
                    src="/images/icons/logos_paypal.svg"
                    width={17}
                    height={21}
                    alt="visa"
                  />
                  <span> Paypal</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Connected as:</p>
                <p>youraccount@email.com</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="destructive" type="submit">
                  Disconnect Account
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-[#002256] flex justify-center items-center gap-2">
                  <Image
                    src="/images/icons/logos_paypal.svg"
                    width={17}
                    height={21}
                    alt="visa"
                  />
                  <span> Paypal</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Connected as:</p>
                <p>youraccount@email.com</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline" type="submit">
                  Connect Account
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="pb-10">
            <CustomSelect
              options={options}
              name="primaryPaymentOption"
              label="Primary payment option"
            />
            <small>
              The payment method that will be set as default for payment
              processing. Helpful when you use multiple payment methods.
            </small>
            <div className="md:flex items-center space-x-2 my-3">
              <Switch id="buffer-time" />
              <div>
                <Label htmlFor="buffer-time">Disable On-site</Label>
                <p className="text-[#0D172B]">
                  Check this box to prevent your customers from making on-site
                  payments.
                </p>
              </div>
            </div>
            <div className="md:flex items-center space-x-2 mb-3">
              <Switch id="set-redirect" />
              <div>
                <Label htmlFor="set-redirect">Payment link redirect URL</Label>
                <p className="text-[#0D172B]">
                  Insert the URL to which customers will be redirected after
                  completing a payment via the link.
                </p>
              </div>
            </div>

            <CustomInput
              type="text"
              name="redirectUrl"
              label="Set redirect URL"
              placeholder="https://trafft.com/pricing"
            />
          </div>
        </div>
      </CustomFromProvider>
    </section>
  );
};

export default PaymentsSettingPage;
