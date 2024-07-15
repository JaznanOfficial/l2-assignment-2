// @ts-nocheck

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import SelectCategory from "../category/SelectCategory";
import { FaAngleLeft } from "react-icons/fa";

const BookingModal = ({ handleContinue }) => {
  const [inputValue, setInputValue] = useState("");
  const [showCategorySelect, setShowCategorySelect] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value && Number(value) > 0) {
      setShowCategorySelect(true);
    } else {
      setShowCategorySelect(false);
    }
  };

  return (
    <Dialog className="!max-w-[1200px]">
      <DialogTrigger asChild>
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-full">
          <div onClick={handleContinue} className="relative w-[500px] mx-auto">
            <Button className="w-full" variant="default" size="primarySize">
              Continue
            </Button>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="!max-w-[1280px] h-[800px] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            <div className="flex justify-between items-center border-b border-solid border-slate-200 px-5 pb-2">
              <div className="cursor-pointer">
                <FaAngleLeft size={44} className="text-primary" />
              </div>
              <h2 className="text-3xl font-semibold mb-4 font-nunito">
                Select a <span className="text-primary">Category</span>
              </h2>
              <div></div>
            </div>
          </DialogTitle>
        </DialogHeader>
        <div className="">
          {!showCategorySelect ? (
            <div className="flex justify-between items-center border-b border-solid border-slate-200 px-5 pb-2 mb-5 gap-8 max-w-5xl mx-auto">
              <Input
                type="text"
                placeholder="Enter number of vehicles"
                value={inputValue}
                onChange={handleInputChange}
                className="w-full text-base"
              />
              <Button onClick={() => setShowCategorySelect(true)}>
                Select Vehicle
              </Button>
            </div>
          ) : (
            <SelectCategory numberOfTabs={Number(inputValue)} />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
