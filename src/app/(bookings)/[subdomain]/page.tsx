"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

import { FiSend } from "react-icons/fi";

const BookingPage = () => {
  const router = useRouter();
  const [value, setValue] = useState("");

  const handleContinue = () => {
    if (!value) {
      toast.error("please provide your address");
    } else {
      router.push(`/booking`);
    }
  };

  return (
    <main className="flex  min-h-screen flex-col items-center justify-between p-6  bg-gradient-to-br from-[#DBE5F7] to-[#EBF2FB]">
      <div className="px-[90px] custom_container">
        {/* top content */}
        <div className="flex flex-col items-center justify-center">
          <Link href="/" prefetch={false}>
            <Image
              src={"/images/header/logo.png"}
              className="w-full h-auto"
              width={150}
              height={60}
              alt={"logo"}
            />
          </Link>
          <h1 className="text-[40px] font-extrabold text-secondary font-nunito mt-12">
            Book an <span className="text-primary">Appointment</span>
          </h1>
          <p className="text-xl text-center font-medium text-[#55575B] font-nunito mt-5 max-w-[558px] mx-auto mb-7">
            Please select your location, you can use the pin or search for your
            address
          </p>
        </div>
        {/* Map start */}
        <section className="relative">
          <div>
            <Image
              src={"/map.png"}
              width={1000}
              height={500}
              className="w-full h-auto"
              alt={"map"}
            />
          </div>
          <div className="absolute  top-5 left-1/2  -translate-x-1/2 w-full">
            <div className="relative w-[500px] mx-auto">
              <Input
                onChange={(e: any) => setValue(e.target.value)}
                placeholder="Enter your address"
                className=" placeholder:text-primary  placeholder:text-base py-6 pl-8 border border-solid border-primary"
              />
              <div className="absolute top-1/2 -translate-y-1/2 right-0 w-14 h-full bg-primary rounded-md flex items-center justify-center  ">
                <FiSend className="text-white text-lg" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-full">
            <div
              onClick={handleContinue}
              className="relative w-[500px] mx-auto"
            >
              <Button className="w-full" variant="default" size="primarySize">
                Continue
              </Button>
            </div>
          </div>
        </section>
        {/* Map End */}
      </div>
    </main>
  );
};

export default BookingPage;
