import React from "react";
import { useLocation } from "react-router-dom";
import useProducts from "../utils/useProducts";
import ShimmerGeneric from "./ShimmerGeneric";
import ProductCard from "./ProductCard";

const ProductsContaier = () => {
  const {
    state: { id },
  } = useLocation();
  const { products, isFetching } = useProducts(id);
  console.log("products ", products);

  return (
    <div className="mt-6 mb-6 overflow-y-auto flex flex-wrap flex-grow-0 max-h-screen">
      {products.length === 0 &&
        ((isFetching && <ShimmerGeneric />) ||
          (!isFetching && <p>No products available for this subcategory</p>))}
      {products.length > 0 &&
        products.map((product: any) => (
          <ProductCard key={product.productId} product={product} />
        ))}
    </div>
  );
};

export default ProductsContaier;
