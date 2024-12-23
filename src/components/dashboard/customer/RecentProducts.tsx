import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import Heading from "@/components/shared/CustomHeading";
import ProductCard from "@/components/shared/ProductCard";
import { useGetRecentProductsQuery } from "@/redux/api/recentProducts";
import { ProductData } from "@/types";
import React from "react";

const RecentProducts = () => {
  const { data: recentProducts } = useGetRecentProductsQuery();

  // Organize data to match the ProductData interface
  const products: ProductData[] =
    recentProducts?.data.map((item: any) => ({
      shopId: item.product.shopId,
      productId: item.product.id,
      categoryId: item.product.categoryId,
      vendorId: item.product.vendorId,
      name: item.product.name,
      discount: item.product.discount,
      description: item.product.description,
      image: item.product.image,
      inventory: item.product.inventory,
      price: item.product.price,
    })) || [];

  return (
    <div>
      <CustomBreadcrumb
        items={[
          { label: "Home", path: "/" },
          { label: "Dashboard", path: "/dashboard/customer" },
          { label: "Recent Visited Product" },
        ]}
        title="Recent Visited Product Page"
      />
      <Heading
        text="Recent Visited Products"
        className="text-4xl lg:text-6xl text-center py-20"
      />

      <div className="flex flex-wrap justify-center gap-6 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
        {products.length > 0 ? (
          products?.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))
        ) : (
          <div className="flex justify-center items-center my-12">
            <h1 className="text-blue-400 text-3xl ">
              You have not visited any product yet..
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentProducts;
