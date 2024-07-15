// @ts-nocheck

import { useState } from "react";
import Category from "./Category";
import Services from "../services/Services";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Define types for Category and Service
interface Service {
  id: number;
  name: string;
  // Add other properties if needed
}

interface ICategory {
  id: number;
  name: string;
  services: Service[];
  // Add other properties if needed
}

interface SelectCategoryProps {
  numberOfTabs: number;
}

const SelectCategory: React.FC<SelectCategoryProps> = ({ numberOfTabs }) => {
  const initialCategoryState: ICategory[][] = Array.from(
    { length: numberOfTabs },
    () => []
  );
  const initialServiceState: Service[][] = Array.from(
    { length: numberOfTabs },
    () => []
  );

  const [selectedCategories, setSelectedCategories] =
    useState<Category[][]>(initialCategoryState);
  const [selectedServices, setSelectedServices] =
    useState<Service[][]>(initialServiceState);

  // const handleTabChange = (tabIndex: number) => {
  //   // Functionality to handle tab change if needed
  // };

  const handleCategoryChange = (tabIndex: number, category: Category) => {
    setSelectedCategories((prevCategories) => {
      const newCategories = [...prevCategories];
      if (newCategories[tabIndex].some((c) => c.id === category.id)) {
        // If category is already selected, remove it
        newCategories[tabIndex] = newCategories[tabIndex].filter(
          (c) => c.id !== category.id
        );
      } else {
        // Otherwise, add the category
        newCategories[tabIndex] = [...newCategories[tabIndex], category];
      }
      return newCategories;
    });
  };

  const handleServiceChange = (tabIndex: number, service: Service) => {
    setSelectedServices((prevServices) => {
      const newServices = [...prevServices];
      if (newServices[tabIndex].some((s) => s.id === service.id)) {
        // If service is already selected, remove it
        newServices[tabIndex] = newServices[tabIndex].filter(
          (s) => s.id !== service.id
        );
      } else {
        // Otherwise, add the service
        newServices[tabIndex] = [...newServices[tabIndex], service];
      }
      return newServices;
    });
  };

  return (
    <section id="select_category">
      <div>
        <div className="p-5">
          <div className="mb-5">
            <Tabs defaultValue="vehicle1">
              {[...Array(numberOfTabs)].map((_, tabIndex) => (
                <TabsList
                  key={tabIndex}
                  className="text-center inline-flex justify-center items-center"
                >
                  <TabsTrigger
                    value={`vehicle${tabIndex + 1}`}
                    // onClick={() => handleTabChange(tabIndex)}
                  >
                    Vehicle {tabIndex + 1}
                  </TabsTrigger>
                </TabsList>
              ))}
              {[...Array(numberOfTabs)].map((_, tabIndex) => (
                <TabsContent key={tabIndex} value={`vehicle${tabIndex + 1}`}>
                  <h3 className="text-3xl font-semibold mb-4 font-inter my-5">
                    {`vehicle${tabIndex + 1}`} Info
                  </h3>

                  <Category
                    selectedCategories={selectedCategories[tabIndex]}
                    handleSelectCategory={(category: Category) =>
                      handleCategoryChange(tabIndex, category)
                    }
                  />

                  {selectedCategories[tabIndex]?.length > 0 &&
                    selectedCategories[tabIndex].map(
                      (category, categoryIndex) => (
                        <Services
                          key={categoryIndex}
                          category={category}
                          selectedServices={selectedServices[tabIndex]}
                          setSelectedServices={(service: Service) =>
                            handleServiceChange(tabIndex, service)
                          }
                          services={category.services} // Passing services from the category
                        />
                      )
                    )}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectCategory;
