import React from "react";
import { products } from "@/data/products";
import Image from "next/image";
import { ProductInfo } from "@/components/products/product-info";
import { ExtraInfo } from "@/components/products/extra-info";
import { RelatedProducts } from "@/components/products/related-products";

interface ProductPageProps {
  params: {
    product: string;
  };
}

const ProductPage = ({ params }: ProductPageProps) => {
  const product = products.find(
    (product) =>
      product.title.toLowerCase() ===
      params.product.toLowerCase().replace("-", " ").replace("-", " ")
  );
  if (!product) return null;

  return (
    <div className="min-h-full space-y-4">
      <div className="xl:w-4/5 m-0 xl:m-auto flex flex-col xl:flex-row justify-center gap-10 xl:gap-20">
        <Image src={product.image} className="m-auto" alt="Loading" height={400} />
        <ProductInfo id={product.id} />
      </div>
      <hr />
      <ExtraInfo/>
      <hr />
      <h2 className="text-slate-500 font-bold text-2xl text-center xl:text-left ml-0 xl:ml-20">RELATE PRODUCTS</h2>
      <RelatedProducts category={product.category} id={product.id}/>
    </div>
  );
};

export default ProductPage;
