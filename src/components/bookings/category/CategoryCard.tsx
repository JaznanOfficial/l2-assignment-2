/* eslint-disable no-unused-vars */
import { FaAngleRight } from "react-icons/fa";
import { Button } from "../../ui/button";
import React from "react";

interface Category {
  id: number;
  name: string;
  // Add other properties if needed
}

interface CategoryCardProps {
  category: Category;
  isSelected: boolean;
  onSelect: (category: Category) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  isSelected,
  onSelect,
}) => {
  return (
    <div
      className={`w-[22%] h-[200px] ${
        isSelected ? "border-2 border-primary" : "border-slate-200"
      } bg-white shadow-xl rounded-lg border border-solid relative`}
    >
      <div className="flex justify-center items-center rounded-md h-full">
        <p className="text-lg font-medium text-[#55575B]">{category.name}</p>
      </div>
      <Button
        onClick={() => onSelect(category)}
        size="primarySize"
        variant="default"
        className="w-full absolute bottom-0"
      >
        Select <FaAngleRight size={20} className="ml-3" />
      </Button>
    </div>
  );
};

export default CategoryCard;
