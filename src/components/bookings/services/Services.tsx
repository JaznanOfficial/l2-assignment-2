/* eslint-disable no-unused-vars */
// @ts-nocheck

import React from "react";
import ServiceCard from "./ServiceCard";
import { CategoryType, ServiceType } from "../category/SelectCategoryStepper";

interface ServicesProps {
  category: CategoryType;
  selectedServices: ServiceType[];
  setSelectedServices: (service: ServiceType) => void;
  services: ServiceType[];
  tabIndex: number;
}

const Services: React.FC<ServicesProps> = ({
  category,
  selectedServices,
  setSelectedServices,
  services,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  tabIndex,
}) => {
  return (
    <div>
      <h4 className="text-2xl font-semibold mb-4">{category.name} Services</h4>
      <div className="flex justify-center items-center gap-6 flex-wrap">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            isSelected={selectedServices.some((s) => s.id === service.id)}
            onSelect={() => setSelectedServices(service)}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
