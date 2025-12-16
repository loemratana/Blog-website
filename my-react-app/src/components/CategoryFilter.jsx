import React from "react";

const CategoryFilter = ({ categories, selectedCategory, onSelect }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-6">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => onSelect(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
            selectedCategory === category
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
