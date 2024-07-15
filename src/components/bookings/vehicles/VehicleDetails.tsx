// @ts-nocheck

"use client";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ErrorMessage from "@/components/shared/Common/ErrorMessage";
import { useEffect, useState } from "react";

const VehicleDetails = ({ details, onChange }) => {
  const [vehicleDetails, setVehicleDetails] = useState({
    year: details.year || "",
    make: details.make || "",
    model: details.model || "",
    engineSize: details.engineSize || "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      vehicleDetails: {
        year: details.year || "",
        make: details.make || "",
        model: details.model || "",
        engineSize: details.engineSize || "",
      },
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedDetails = { ...vehicleDetails, [name]: value };
    setVehicleDetails(updatedDetails);
    onChange(updatedDetails);
  };

  useEffect(() => {
    onChange(vehicleDetails);
  }, [vehicleDetails, onChange]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 px-20">
      <div>
        <Label className="text-base">Year</Label>
        <Input
          {...register("vehicleDetails.year", { required: "Year is required" })}
          name="year"
          type="text"
          placeholder="Enter Year"
          value={vehicleDetails.year}
          onChange={handleChange}
          className="w-full text-base"
        />
        {errors.vehicleDetails?.year && (
          <ErrorMessage message={errors.vehicleDetails.year.message} />
        )}
      </div>
      <div>
        <Label className="text-base">Make</Label>
        <Input
          {...register("vehicleDetails.make", { required: "Make is required" })}
          name="make"
          type="text"
          placeholder="Enter Make"
          value={vehicleDetails.make}
          onChange={handleChange}
          className="w-full text-base"
        />
        {errors.vehicleDetails?.make && (
          <ErrorMessage message={errors.vehicleDetails.make.message} />
        )}
      </div>
      <div>
        <Label className="text-base">Model</Label>
        <Input
          {...register("vehicleDetails.model", {
            required: "Model is required",
          })}
          name="model"
          type="text"
          placeholder="Enter Model"
          value={vehicleDetails.model}
          onChange={handleChange}
          className="w-full text-base"
        />
        {errors.vehicleDetails?.model && (
          <ErrorMessage message={errors.vehicleDetails.model.message} />
        )}
      </div>
      <div>
        <Label className="text-base">Engine size</Label>
        <Input
          {...register("vehicleDetails.engineSize", {
            required: "Engine size is required",
          })}
          name="engineSize"
          type="text"
          placeholder="Enter Engine size"
          value={vehicleDetails.engineSize}
          onChange={handleChange}
          className="w-full text-base"
        />
        {errors.vehicleDetails?.engineSize && (
          <ErrorMessage message={errors.vehicleDetails.engineSize.message} />
        )}
      </div>
    </div>
  );
};

export default VehicleDetails;
