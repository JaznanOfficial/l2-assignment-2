"use client";

import { Breadcrumbs } from "@/components/dashboard/common/BreadCrumbs";
import Heading from "@/components/dashboard/common/Heading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Copy } from "lucide-react";

import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";

const SharePage = () => {
  return (
    <section className="bg-white h-full  p-6 rounded-md">
      <Breadcrumbs />
      <Heading title="Share booking link" />
      <p className="text-black text-base border-b border-solid border-slate-300 pb-4 mb-4">
        Share your appointment booking link with anyone
      </p>
      <div>
        <Label className="text-base mb-2">Your link</Label>
        <div className="relative w-full md:w-1/2">
          <Input
            type="text"
            defaultValue="www.sample-link.com"
            placeholder="Enter your link"
            className="w-full px-3 py-2"
          />
          <div className="flex gap-2 border border-solid border-slate-300 absolute right-0 inset-y-0 w-fit items-center px-3 py-2">
            <Copy /> Copy
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-2 items-center my-3">
          <p className="text-black text-base ">Share on:</p>
          <div className="flex gap-4 items-center">
            <Image
              src="/images/icons/logos_facebook.svg"
              width={18}
              height={18}
              alt="whatsapp"
            />
            <Image
              src="/images/icons/mage_x.svg"
              width={18}
              height={18}
              alt="whatsapp"
            />
            <Image
              src="/images/icons/logos_messenger.svg"
              width={18}
              height={18}
              alt="whatsapp"
            />
            <Image
              src="/images/icons/logos_google-gmail.svg"
              width={18}
              height={18}
              alt="whatsapp"
            />
            <Image
              src="/images/icons/skill-icons_instagram.svg"
              width={18}
              height={18}
              alt="whatsapp"
            />
            <Image
              src="/images/icons/logos_whatsapp-icon.svg"
              width={18}
              height={18}
              alt="whatsapp"
            />
            <Image
              src="/images/icons/skill-icons_linkedin.svg"
              width={18}
              height={18}
              alt="whatsapp"
            />
          </div>
        </div>
        <div className="flex items-center space-x-2 mt-5">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Embed booking widget on the website
          </label>
        </div>
      </div>
    </section>
  );
};

export default SharePage;
