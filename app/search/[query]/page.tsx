import { ProductCard } from "@/components/products/product-card";
import React from "react";
import imageOne from "@/public/imgOne.png";
import { products } from "@/data/products";

interface SearchPageProps {
  params: {
    query: string;
  };
}

const SearchPage = ({ params }: SearchPageProps) => {
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(params.query.toLowerCase())
  );
  return (
    <div>
      <h2 className="text-xl xl:text-2xl font-bold static xl:absolute top-40 left-40 text-center xl:text-left text-slate-500">
        Search word{" "}
        <span className="text-black">
          {`<<`}
          {params.query}
          {`>>`}
        </span>{" "}
        gave {filteredProducts.length}{" "}
        {filteredProducts.length > 1 ? "results" : "result"}
      </h2>
      <div className="w-full xl:w-4/5 m-auto py-4 flex justify-center gap-x-2 xl:gap-x-10 gap-y-4 flex-wrap">
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            id={product.id}
            productTitle={product.title}
            productDescr={product.descr}
            productLink={`/products/${product.category
              .toLowerCase()
              .replace(" ", "-")}/${product.title
              .toLowerCase()
              .replace(" ", "-")
              .replace(" ", "-")}`}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
