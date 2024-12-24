"use client";

import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const ProductFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // States for filters
  const [priceRange, setPriceRange] = useState<number[]>([0, 1500]);
  const [discountRange, setDiscountRange] = useState<number[]>([0, 100]);
  const [sortOption, setSortOption] = useState<string>("price-asc");

  // Handle Filter and Sort Apply
  const applyFilters = () => {
    const params = new URLSearchParams();

    // Add existing search params
    searchParams.forEach((value, key) => {
      params.set(key, value);
    });

    // Update with new filters
    params.set("minPrice", String(priceRange[0]));
    params.set("maxPrice", String(priceRange[1]));
    params.set("minDiscount", String(discountRange[0]));
    params.set("maxDiscount", String(discountRange[1]));

    // Sorting
    const [sortBy, sortOrder] = sortOption.split("-");
    params.set("sortBy", sortBy);
    params.set("sortOrder", sortOrder);

    // Navigate with updated query
    router.push(`/all-products?${params.toString()}`);
  };

  // Handle Clear Filters
  const clearFilters = () => {
    router.push(`/all-products`); // Clear all query parameters
    setPriceRange([0, 1500]); // Reset price range
    setDiscountRange([0, 100]); // Reset discount range
    setSortOption("price-asc"); // Reset sort option
  };

  return (
    <div className="flex flex-col gap-4 p-2 w-full max-w-full overflow-x-hidden md:px-6">
      {/* Price Range Filter */}
      <div className="w-full px-2">
        <h4 className="text-sm sm:text-base font-medium mb-3">
          Filter by Price
        </h4>
        <Slider
          value={priceRange}
          onValueChange={(value) => setPriceRange(value)}
          min={0}
          max={1500}
          step={10}
          className="mt-2 w-[90%] mx-auto"
        />
        <div className="flex justify-between text-xs md:text-base mt-2 px-4">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      {/* Discount Range Filter */}
      <div className="w-full px-2">
        <h4 className="text-sm sm:text-base font-medium mb-3">
          Filter by Discount
        </h4>
        <Slider
          value={discountRange}
          onValueChange={(value) => setDiscountRange(value)}
          min={0}
          max={100}
          step={5}
          className="mt-2 w-[90%] mx-auto"
        />
        <div className="flex justify-between text-xs md:text-base mt-2 px-4">
          <span>{discountRange[0]}%</span>
          <span>{discountRange[1]}%</span>
        </div>
      </div>

      {/* Sort Options */}
      <div className="w-full px-2">
        <h4 className="text-sm sm:text-base font-medium mb-3">Sort by</h4>
        <Select onValueChange={setSortOption} defaultValue="price-asc">
          <SelectTrigger className="w-full text-sm">
            <SelectValue placeholder="Sort Options" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
            <SelectItem value="discount-asc">Discount: Low to High</SelectItem>
            <SelectItem value="discount-desc">Discount: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-3 mt-4 px-2">
        <Button
          onClick={applyFilters}
          className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-sm h-10 rounded-md shadow-md text-white"
        >
          Apply Filters
        </Button>
        <Button
          onClick={clearFilters}
          variant="outline"
          className="w-full text-sm h-10"
        >
          Clear Filters
        </Button>
      </div>
    </div>
  );
};

export default ProductFilters;
