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
import DetailsHeading from "@/components/bookings/reviewAndPayment/DetailsHeading";
import Details from "@/components/bookings/reviewAndPayment/Details";
import { useAppSelector } from "@/redux/hooks";

type VehicleDetails = {
  year: string;
  make: string;
  model: string;
  engineSize: string;
};

type SelectedService = {
  name: string;
  price: number;
};

type Vehicle = {
  vehicleDetails: VehicleDetails;
  selectedServices: SelectedService[];
};

type BookingData = {
  bookingDate: string;
  bookingTime: string;
  vehicles: Vehicle[];
};

const BookingDetails: React.FC = () => {
  const data = useAppSelector((state) => state.bookingsInfo) as BookingData;
  console.log(data, "payment info");

  const [carts, setCarts] = useState<SelectedService[]>([]);

  useEffect(() => {
    if (data?.vehicles) {
      const allSelectedServices = data.vehicles.flatMap(
        (vehicle) => vehicle.selectedServices
      );
      setCarts(allSelectedServices);
    }
  }, [data]);

  const subtotal = carts.reduce((acc, cart) => acc + cart.price, 0);

  return (
    <div className="p-10">
      {/* Customer details */}
      <div>
        <DetailsHeading heading="Customer details" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 mb-8">
          <Details title="Name" text="John Doe" />
          <Details title="Email" text="email@gmail.com" />
          <Details title="Address" text="address" />
          <Details title="Note" text="Your note here" />
        </div>
      </div>
      {/* Schedule details */}
      <div>
        <DetailsHeading heading="Schedule details" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 mb-8">
          <Details title="Date" text={data?.bookingDate} />
          <Details title="Time" text={data?.bookingTime} />
        </div>
      </div>
      {/* Vehicles details */}
      {data?.vehicles?.map((vehicle, index) => (
        <div key={index}>
          <DetailsHeading heading={`Vehicle ${index + 1} details`} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 mb-8">
            <Details title="Year" text={vehicle.vehicleDetails.year} />
            <Details title="Make" text={vehicle.vehicleDetails.make} />
            <Details title="Model" text={vehicle.vehicleDetails.model} />
            <Details
              title="Engine size"
              text={vehicle.vehicleDetails.engineSize}
            />
          </div>
        </div>
      ))}
      {/* Cart details */}
      <div>
        <DetailsHeading heading="Cart details" />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Vehicle</TableHead>
              <TableHead className="text-right">Fee</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {carts.map((cart, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>{cart?.name}</TableCell>
                <TableCell>Category 1</TableCell>
                <TableCell>Vehicle 1</TableCell>
                <TableCell className="text-right">{cart.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableHead colSpan={4}>
                <div className="flex items-center gap-5 w-[30rem]">
                  <span>Subtotal ${subtotal.toFixed(2)}</span>
                  <span>Coupon code: None</span>
                </div>
              </TableHead>
              <TableHead className="text-right">
                Total: ${subtotal.toFixed(2)}
              </TableHead>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default BookingDetails;
