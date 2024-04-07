import { ProductCard } from "@/components/products/product-card";
import React from "react";
import imageOne from "@/public/imgOne.png"
import { products } from "@/data/products";

const Products = () => {
  return (
    <div className="w-full xl:w-3/5 m-auto py-4 flex justify-center gap-x-4 xl:gap-x-10 gap-y-4 flex-wrap">
      {products.map((product, index) => (
        <ProductCard key={product.id} id={product.id} productTitle={product.title} productDescr={product.descr} productLink={`/products/${product.category.toLowerCase().replace(" ","-")}/${product.title.toLowerCase().replace(" ","-").replace(" ","-")}`} image={product.image}/>
      ))}
    </div>
  );
};

export default Products;
