import Image from "next/image";
import React from "react";

interface ProductCheckOutSuccessProps {
  productData: any;
}

export const ProductCheckOutSuccess = ({
  productData,
}: ProductCheckOutSuccessProps) => {
  return (
    <div className="flex gap-2 xl:gap-10 p-0 xl:p-4">
      <img
        src={productData.price.product.images[0]}
        alt="Loadgin"
        height={150}
        width={150}
      ></img>
      <div className="flex flex-col justify-between gap-2 xl:gap-0 py-2">
        <div>
          <h2 className="font-bold text-left">
            {productData.price.product.name}
          </h2>
          {/* <p className="text-slate-500 text-left w-full xl:w-3/5 h-20 xl:h-auto overflow-auto">{productData.price.product.description}</p> */}
          <p className="text-slate-500 text-left w-full xl:w-3/5 h-20 xl:h-auto overflow-auto">
            Lorem ipsum!
          </p>
        </div>
        <div className="flex w-48 justify-between">
          <p className="font-bold">Quantity: {productData.quantity}</p>
          <p className="font-bold">
            Price: {productData.price.unit_amount / 100}€
          </p>
        </div>
      </div>
    </div>
  );
};