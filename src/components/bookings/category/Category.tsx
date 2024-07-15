/* eslint-disable no-unused-vars */
import React from "react";

interface Category {
  id: string; // Adjusted to match your CategoryType or keep as number if changed in CategoryType
  name: string;
  services: Service[];
}

interface Service {
  id: string;
  name: string;
}

interface CategoryProps {
  selectedCategories: Category[];
  handleSelectCategory: (category: Category) => void;
}

const Category: React.FC<CategoryProps> = ({
  selectedCategories,
  handleSelectCategory,
}) => {
  return (
    <div>
      {selectedCategories.map((category) => (
        <div key={category.id}>
          <p>{category.name}</p>
          <button onClick={() => handleSelectCategory(category)}>Select</button>
        </div>
      ))}
    </div>
  );
};

export default Category;
