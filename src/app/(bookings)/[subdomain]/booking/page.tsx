"use client";

import { useState, ChangeEvent } from "react";
import { useAppDispatch } from "@/redux/hooks";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";

import {
  addVehicle,
  clearVehicles,
} from "@/redux/features/bookings/bookingSlice";
// import { RootState } from "@/redux/store";
import SelectCategoryStepper from "@/components/bookings/category/SelectCategoryStepper";
import { Button } from "@/components/ui/button";

interface Vehicle {
  id: number;
  name: string;
  selectedCategory: string | undefined;
  selectedServices: string[];
  vehicleDetails: Record<string, unknown>;
}

const BookingPage = () => {
  const dispatch = useAppDispatch();
  // const bookingState = useAppSelector((state: RootState) => state.bookingsInfo);

  const [inputValue, setInputValue] = useState<string>("");
  const [showCategorySelect, setShowCategorySelect] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    const inputValueNumber = Number(value);
    if (value && inputValueNumber > 0) {
      dispatch(clearVehicles());
      const newVehicles: Vehicle[] = [];
      for (let i = 0; i < inputValueNumber; i++) {
        const vehicle: Vehicle = {
          id: i + 1,
          name: `Vehicle ${i + 1}`,
          selectedCategory: undefined,
          selectedServices: [],
          vehicleDetails: {},
        };
        dispatch(addVehicle(vehicle));
        newVehicles.push(vehicle);
      }
      setShowCategorySelect(true);
    } else {
      setShowCategorySelect(false);
    }
  };

  const handleSelectVehicles = () => {
    const inputValueNumber = Number(inputValue);
    if (inputValue && inputValueNumber > 0) {
      dispatch(clearVehicles());
      const newVehicles: Vehicle[] = [];
      for (let i = 0; i < inputValueNumber; i++) {
        const vehicle: Vehicle = {
          id: i + 1,
          name: `Vehicle ${i + 1}`,
          selectedCategory: undefined,
          selectedServices: [],
          vehicleDetails: {},
        };
        dispatch(addVehicle(vehicle));
        newVehicles.push(vehicle);
      }
      setShowCategorySelect(true);
    } else {
      setShowCategorySelect(false);
    }
  };

  // console.log(vehicles, "vehicles");

  return (
    <section>
      <div className="px-[90px] custom_container">
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
          <h1 className="text-[40px] font-extrabold text-secondary font-nunito mt-5">
            Book an <span className="text-primary">Service</span>
          </h1>
          <p className="text-xl text-center font-medium text-[#55575B] font-nunito mt-5 max-w-[558px] mx-auto mb-7">
            Please select your vehicle
          </p>
        </div>

        <div className="">
          <div className="flex justify-between items-center border-b border-solid border-slate-200 px-5 pb-2 mb-5 gap-8 max-w-5xl mx-auto">
            <Input
              type="text"
              placeholder="Enter number of vehicles"
              value={inputValue}
              onChange={handleInputChange}
              className="w-full text-base"
            />
            <Button onClick={handleSelectVehicles}>Select Vehicle</Button>
          </div>

          {showCategorySelect && (
            <SelectCategoryStepper numberOfTabs={Number(inputValue)} />
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingPage;
