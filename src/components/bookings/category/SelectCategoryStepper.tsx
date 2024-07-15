// @ts-nocheck

"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaCheck } from "react-icons/fa";
import { Button } from "@/components/ui/button";

import VehicleDetails from "../vehicles/VehicleDetails";
import Category from "./Category";
import Services from "../services/Services";
import Schedule from "../schedule/Schedule";
import {
  updateVehicleCategory,
  updateVehicleDetails,
} from "@/redux/features/bookings/bookingSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const steps = [
  { number: 1, description: "Vehicle details" },
  { number: 2, description: "Select a Category" },
  { number: 3, description: "Select a Service" },
];

const SelectCategoryStepper = ({ numberOfTabs }) => {
  const dispatch = useAppDispatch();
  const vehicles = useAppSelector((state) => state.bookingsInfo.vehicles);

  const initialStepState = Array.from({ length: numberOfTabs }, () => 1);
  const initialCompletedStepsState = Array.from(
    { length: numberOfTabs },
    () => []
  );

  const [selectedCategories, setSelectedCategories] = useState(
    Array.from({ length: numberOfTabs }, () => [])
  );
  const [selectedServices, setSelectedServices] = useState(
    Array.from({ length: numberOfTabs }, () => [])
  );
  const [currentSteps, setCurrentSteps] = useState(initialStepState);
  const [completedSteps, setCompletedSteps] = useState(
    initialCompletedStepsState
  );
  const [showDateAndTime, setShowDateAndTime] = useState(false);

  const handleCategoryChange = (tabIndex, category) => {
    setSelectedCategories((prevCategories) => {
      const newCategories = [...prevCategories];
      if (newCategories[tabIndex].some((c) => c.id === category.id)) {
        newCategories[tabIndex] = newCategories[tabIndex].filter(
          (c) => c.id !== category.id
        );
      } else {
        newCategories[tabIndex] = [...newCategories[tabIndex], category];
      }
      dispatch(
        updateVehicleCategory({
          vehicleIndex: tabIndex,
          selectedCategory: newCategories[tabIndex],
        })
      );
      return newCategories;
    });
  };

  const handleServiceChange = (tabIndex, service) => {
    setSelectedServices((prevServices) => {
      const newServices = [...prevServices];
      if (newServices[tabIndex].some((s) => s.id === service.id)) {
        newServices[tabIndex] = newServices[tabIndex].filter(
          (s) => s.id !== service.id
        );
      } else {
        newServices[tabIndex] = [...newServices[tabIndex], service];
      }
      dispatch(
        updateVehicleServices({
          vehicleIndex: tabIndex,
          selectedServices: newServices[tabIndex],
        })
      );
      return newServices;
    });
  };

  const handleVehicleDetailsChange = (tabIndex, details) => {
    dispatch(
      updateVehicleDetails({ vehicleIndex: tabIndex, vehicleDetails: details })
    );
  };

  const isStepCompleted = (tabIndex) => {
    switch (currentSteps[tabIndex]) {
      case 1:
        return vehicles[tabIndex]?.vehicleDetails !== undefined;
      case 2:
        return vehicles[tabIndex]?.selectedCategory?.length > 0;
      case 3:
        return vehicles[tabIndex]?.selectedServices?.length > 0;
      default:
        return true;
    }
  };

  const handleStepClick = (stepNumber, tabIndex) => {
    if (stepNumber <= currentSteps[tabIndex]) {
      setCurrentSteps((prevSteps) => {
        const newSteps = [...prevSteps];
        newSteps[tabIndex] = stepNumber;
        return newSteps;
      });
    }
  };

  const handleNextStep = (tabIndex) => {
    if (isStepCompleted(tabIndex) && currentSteps[tabIndex] < steps.length) {
      setCurrentSteps((prevSteps) => {
        const newSteps = [...prevSteps];
        newSteps[tabIndex] += 1;
        return newSteps;
      });
      setCompletedSteps((prevCompletedSteps) => {
        const updatedCompletedSteps = [...prevCompletedSteps];
        updatedCompletedSteps[tabIndex] = [
          ...updatedCompletedSteps[tabIndex],
          currentSteps[tabIndex],
        ];
        return updatedCompletedSteps;
      });
    }
  };

  const handlePreviousStep = (tabIndex) => {
    setCurrentSteps((prevSteps) => {
      const newSteps = [...prevSteps];
      newSteps[tabIndex] -= 1;
      return newSteps;
    });
  };

  const handleContinueDateAndTime = () => {
    setShowDateAndTime(true);
  };

  const isAllStepsCompleted = () => {
    return completedSteps.every((stepsArray, index) => {
      return stepsArray.length === steps.length - 1 && isStepCompleted(index);
    });
  };

  return (
    <section id="select_category">
      <div>
        {!showDateAndTime ? (
          <div className="p-5">
            <div className="mb-5">
              <Tabs defaultValue="vehicle1">
                <TabsList className="text-center inline-flex justify-center items-center">
                  {[...Array(numberOfTabs)].map((_, tabIndex) => (
                    <TabsTrigger
                      key={tabIndex}
                      value={`vehicle${tabIndex + 1}`}
                    >
                      Vehicle {tabIndex + 1}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {[...Array(numberOfTabs)].map((_, tabIndex) => (
                  <TabsContent
                    value={`vehicle${tabIndex + 1}`}
                    key={tabIndex}
                    className="p-0"
                  >
                    <div className="grid grid-cols-4 justify-between items-center gap-4 px-5 border-b border-solid border-slate-200 py-2 my-5">
                      {steps.map((step) => (
                        <div
                          key={step.number}
                          className="flex gap-3 cursor-pointer"
                          onClick={() => handleStepClick(step.number, tabIndex)}
                        >
                          <p
                            className={`text-black ${
                              currentSteps[tabIndex] === step.number
                                ? "text-primary"
                                : completedSteps[tabIndex].includes(step.number)
                                ? "text-green-500"
                                : "text-gray-400"
                            }`}
                          >
                            {completedSteps[tabIndex].includes(step.number) ? (
                              <FaCheck />
                            ) : (
                              step.number
                            )}
                          </p>
                          <div className="text-black flex-1">
                            <div className="flex gap-2 items-center">
                              <p className="text-black">
                                {currentSteps[tabIndex] === step.number
                                  ? "In Progress"
                                  : completedSteps[tabIndex].includes(
                                      step.number
                                    )
                                  ? "Finished"
                                  : "Waiting"}
                              </p>
                              <div className="w-16 h-[1px] bg-slate-300"></div>
                            </div>
                            <p className="text-sm text-black">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <h3 className="text-3xl font-semibold mb-4 font-inter my-5">
                      {`Vehicle ${tabIndex + 1}`} Info
                    </h3>
                    {currentSteps[tabIndex] === 1 && (
                      <>
                        <VehicleDetails
                          details={vehicles[tabIndex]?.vehicleDetails || {}}
                          onChange={(details) =>
                            handleVehicleDetailsChange(tabIndex, details)
                          }
                        />
                        <div className="flex justify-end border-t border-solid border-slate-300 pt-5 mt-10">
                          <Button
                            variant="outline"
                            onClick={() => handleNextStep(tabIndex)}
                            disabled={!isStepCompleted(tabIndex)}
                          >
                            Next
                          </Button>
                        </div>
                      </>
                    )}
                    {currentSteps[tabIndex] === 2 && (
                      <>
                        <Category
                          selectedCategories={selectedCategories[tabIndex]}
                          handleSelectCategory={(category) =>
                            handleCategoryChange(tabIndex, category)
                          }
                        />
                        <div className="flex justify-between gap-3 border-t border-solid border-slate-300 pt-5 mt-10">
                          <Button
                            variant="outline"
                            onClick={() => handlePreviousStep(tabIndex)}
                          >
                            Previous
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => handleNextStep(tabIndex)}
                            disabled={!isStepCompleted(tabIndex)}
                          >
                            Next
                          </Button>
                        </div>
                      </>
                    )}
                    {currentSteps[tabIndex] === 3 && (
                      <>
                        {selectedCategories[tabIndex]?.length > 0 &&
                          selectedCategories[tabIndex].map(
                            (category, categoryIndex) => (
                              <Services
                                key={categoryIndex}
                                category={category}
                                selectedServices={selectedServices[tabIndex]}
                                setSelectedServices={(service) =>
                                  handleServiceChange(tabIndex, service)
                                }
                                services={category.services}
                                tabIndex={tabIndex}
                              />
                            )
                          )}
                        <div className="flex justify-between gap-3 border-t border-solid border-slate-300 pt-5 mt-10">
                          <Button
                            variant="outline"
                            onClick={() => handlePreviousStep(tabIndex)}
                          >
                            Previous
                          </Button>
                          <Button
                            variant="outline"
                            onClick={handleContinueDateAndTime}
                            disabled={!isAllStepsCompleted()}
                          >
                            Continue
                          </Button>
                        </div>
                      </>
                    )}
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        ) : (
          <Schedule />
        )}
      </div>
    </section>
  );
};

export default SelectCategoryStepper;
