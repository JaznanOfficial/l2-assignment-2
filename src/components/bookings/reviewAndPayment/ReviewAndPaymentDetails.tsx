// @ts-nocheck

"use client";

import React, { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Details from "./Details";
import DetailsHeading from "./DetailsHeading";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/redux/hooks";

const ReviewAndPaymentDetails = () => {
  const data = useAppSelector((state) => state.bookingsInfo);
  console.log(data, "payment info");
  const [carts, setCarts] = useState([]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  useEffect(() => {
    if (data?.vehicles) {
      const allSelectedServices = data.vehicles.flatMap(
        (vehicle) => vehicle.selectedServices
      );
      setCarts(allSelectedServices);
    }
  }, [data, setCarts]);

  const subtotal = carts.reduce((acc, cart) => acc + cart.price, 0);

  // Handle payment method selection
  const handlePaymentMethodSelection = (method) => {
    setSelectedPaymentMethod(method);
  };

  return (
    <div className="pb-16">
      {/* Schedule details */}
      <div className="">
        <DetailsHeading heading={"Schedule details"} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 mb-8">
          <Details title={"Date"} text={data?.bookingDate} />
          <Details title={"Time"} text={data?.bookingTime} />
        </div>
      </div>

      {/* Vehicles details */}
      {data?.vehicles?.map((vehicle, index) => (
        <div key={index} className="">
          <DetailsHeading heading={`Vehicles ${index + 1} details`} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 mb-8">
            <Details title={"Year"} text={vehicle.vehicleDetails.year} />
            <Details title={"Make"} text={vehicle.vehicleDetails.make} />
            <Details title={"Model"} text={vehicle.vehicleDetails.model} />
            <Details
              title={"Engine size"}
              text={vehicle.vehicleDetails.engineSize}
            />
          </div>
        </div>
      ))}

      {/* Cart details */}
      <div className="">
        <DetailsHeading heading={"Cart details"} />
        {/* Cart table data */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Vehicles</TableHead>
              <TableHead className="text-right">Fee</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {carts?.map((cart, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>{cart.name}</TableCell>
                <TableCell>Category 1</TableCell>
                <TableCell>Vehicles 1</TableCell>
                <TableCell className="text-right">{cart.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableHead>
                <div className="flex items-center gap-5 w-[30rem]">
                  <span>Subtotal ${subtotal.toFixed(2)}</span>
                  <span>Coupon code: None</span>
                </div>
              </TableHead>
              <TableHead></TableHead>
              <TableHead></TableHead>
              <TableHead className="text-right">
                Total: ${subtotal.toFixed(2)}
              </TableHead>
            </TableRow>
          </TableFooter>
        </Table>
      </div>

      {/* Payment card */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div
          className={`border-2 border-solid border-primary py-6 rounded-lg cursor-pointer ${
            selectedPaymentMethod === "payLater" ? "border-primary" : ""
          }`}
          onClick={() => handlePaymentMethodSelection("payLater")}
        >
          <h2 className="text-lg font-semibold text-primary text-center border-b border-slate-200 border-solid flex justify-center items-center pb-3">
            Pay Later
          </h2>
          <div className="flex justify-center items-center mt-6 px-8">
            <Button
              className="md:w-[40%] mx-auto w-full"
              variant={
                selectedPaymentMethod === "payLater" ? "primary" : "outline"
              }
              size="primarySize"
            >
              Pay Later
            </Button>
          </div>
        </div>
        <div
          className={`border-2 border-solid border-primary py-6 rounded-lg cursor-pointer ${
            selectedPaymentMethod === "payOnline" ? "border-primary" : ""
          }`}
          onClick={() => handlePaymentMethodSelection("payOnline")}
        >
          <h2 className="text-lg font-semibold text-primary text-center border-b border-slate-200 border-solid flex justify-center items-center pb-3">
            Pay Online
          </h2>
          <div className="flex justify-center items-center mt-6 px-8">
            <Button
              className="md:w-[40%] mx-auto w-full"
              variant={
                selectedPaymentMethod === "payOnline" ? "primary" : "outline"
              }
              size="primarySize"
            >
              Pay Online
            </Button>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-5">
        <Button
          className="w-full md:w-auto"
          variant={selectedPaymentMethod ? "primary" : "outline"}
          size="primarySize"
          disabled={!selectedPaymentMethod}
        >
          Place Order
        </Button>
      </div>
    </div>
  );
};

export default ReviewAndPaymentDetails;
