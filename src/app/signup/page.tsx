"use client";

import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IoIosEyeOff, IoIosEye } from "react-icons/io";
import Link from "next/link";
import CircularDesign from "@/components/shared/Common/CircularDesign";
import CustomFromProvider from "@/components/shared/CustomFormProvider/CustomFormProvider";
import CustomInput from "@/components/shared/CustomFormProvider/CustomInput";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("Login Form data:", data);
    // Handle form submission
  };

  return (
    <section className="bg-gradient-to-br from-[#e0ebf8] to-[#d6e3f6] h-screen relative">
      <div className="absolute -top-[23rem] left-0">
        <CircularDesign />
      </div>
      <div className="flex justify-center items-center h-full relative max-w-[450px] mx-auto">
        <div className=" px-6 w-full bg-white shadow-lg rounded-lg py-10 relative z-30">
          <Link href="/">
            <Image
              width={180}
              height={40}
              src="/images/header/logo.png"
              alt="logo"
              className="mx-auto"
            />
          </Link>
          <h1 className="text-xl font-bold text-center mt-2">Sign Up</h1>
          <p className="mb-8 mt-3 text-center">
            Please enter these details to create your account
          </p>
          <div className="relative z-30">
            <CustomFromProvider onSubmit={onSubmit}>
              <CustomInput
                type="text"
                name="username"
                label="Username"
                placeholder="Enter your name"
              />
              <CustomInput
                type="text"
                name="email"
                label="email"
                placeholder="Enter your email"
              />
              <div className="relative">
                <CustomInput
                  type={showPassword ? "text" : "password"}
                  name="password"
                  label="Password"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute inset-y-0 right-3 top-3/4 -translate-y-3/4"
                >
                  {showPassword ? (
                    <IoIosEyeOff size={20} />
                  ) : (
                    <IoIosEye size={20} />
                  )}
                </button>
              </div>
              <div className="text-right my-4">
                <Link className="text-primary" href="/forget-password">
                  Forgot Password?
                </Link>
              </div>
              <div className="flex justify-center">
                <Button type="submit" variant="default" className="w-full">
                  Login
                </Button>
              </div>
            </CustomFromProvider>
            <p className="text-center mt-4">
              Already have an account?{" "}
              <Link href="/login" className="text-primary font-medium ">
                Log in
              </Link>
            </p>
          </div>
        </div>
        {/* Gradient shape */}
        <div className="absolute top-[20rem] -left-32 z-0">
          <div className="w-[300px] h-[300px] bg-[#3E9CF3] rounded-full absolute z-10 -left-[120px]"></div>
          <div className="w-[239px] h-[239px] bg-[#6398BF] rounded-full absolute z-0 top-[-100px]"></div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
