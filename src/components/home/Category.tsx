import { cardCategories } from "@/constants";
import React from "react";
import CategorySelectOption from "./CategorySelectOption";

const Category = () => {
  return (
    <section className="py-16 px-4">
      <div className="flex flex-col lg:flex-row justify-start items-center lg:gap-20">
        <h2 className="text-2xl lg:text-5xl font-bold text-black dark:text-white mb-10">
          Popular <span className="text-blue-500">Categories</span>
        </h2>
        <CategorySelectOption />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {cardCategories.map((category) => (
          <React.Fragment key={category.id}>
            <div className="flex flex-col items-center p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow  group dark:hover-shadow-[0_30px_75px_rgba(255,255,255,0.2)]">
              <div className="relative w-32 h-32 flex items-center justify-center bg-gray-100/60 rounded-full mb-4">
                <span className="text-5xl">{category.icon}</span>
                <span className="absolute top-0 right-0 bg-gray-300 group-hover:bg-blue-500 text-black group-hover:text-white text-xs font-bold rounded-full w-10 h-10 flex items-center justify-center">
                  {category.count}
                </span>
              </div>
              <h3 className="text-center text-gray-700 dark:text-white font-medium">
                {category.title}
              </h3>
            </div>
            {/* Add the Separator after each card except the last one */}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
export default Category;
