import { ProductCard } from "@/components/products/product-card";
import React from "react";
import { products } from "@/data/products";

interface CategoryPageProps {
  params: {
    categories: string;
  };
}

const CategoryPage = ({ params }: CategoryPageProps) => {

  const productsFiltered = products.filter((product) => product.category.toLowerCase() === params.categories.toLowerCase().replace("-", " "))

  return (
    <>
      <div className="w-full m-auto py-4 flex justify-center xl:justify-normal gap-x-4 xl:gap-x-10 gap-y-4 flex-wrap">
        {productsFiltered.map((product, index) => (
          <ProductCard id={product.id} productTitle={product.title} productDescr={product.descr} productLink={`/products/${product.category.toLowerCase().replace(" ","-")}/${product.title.toLowerCase().replace(" ", "-").replace(" ","-")}`} image={product.image}/>
        ))}
      </div>
    </>
  );
};

export default CategoryPage;
