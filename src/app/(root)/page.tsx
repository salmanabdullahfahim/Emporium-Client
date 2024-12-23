"use client";

import Banner from "@/components/home/Banner/Banner";
import Category from "@/components/home/Category";
import Products from "@/components/home/Products";

export default function Home() {
  return (
    <div className="px-8 pb-20">
      <Banner />
      <Category />
      <Products />
    </div>
  );
}
