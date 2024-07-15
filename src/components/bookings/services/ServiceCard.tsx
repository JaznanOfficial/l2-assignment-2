// @ts-nocheck

"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const ServiceCard = ({ service, isSelected, onSelect }) => {
  return (
    <div
      className={`w-[22%] h-auto bg-white shadow rounded-lg border ${
        isSelected ? "border-blue-500" : "border-[#82B2E3]"
      } relative p-4`}
    >
      <div className="flex justify-center items-center flex-col gap-4">
        <Image
          src={"/images/s-1.png"}
          width={133}
          height={81}
          className="rounded-3xl w-[80%]"
        />
        <p>{service.name}</p>
        <Button
          className="w-full"
          size="primarySize"
          variant="default"
          onClick={onSelect}
        >
          {isSelected ? "Remove from cart" : "Add to cart"}
        </Button>
        <Button className="w-full" size="primarySize" variant="outline">
          See Details
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
