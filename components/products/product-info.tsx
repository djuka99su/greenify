"use client";

import React from "react";
import { products } from "@/data/products";
import { useShoppingCart } from "@/context/shopping-cart-context";
import { Button } from "@/components/ui/button";

export const ProductInfo = ({ id }: { id: string }) => {
  
  const {getitemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart}= useShoppingCart()
  const product = products.find((prod) => prod.id === id);
  if (!product) return null;

  const quantity = getitemQuantity(id)

  return (
    <div className="space-y-1 w-full p-4 xl:p-0 xl:w-2/5">
      <h2 className="text-2xl font-bold">{product.title}</h2>
      <hr />
      <p className="text-xl font-semibold pt-8">Price: {product.price}€</p>
      <p className="text-slate-500 w-4/5 text-md">
        {product.descr} {product.descr}
      </p>
      <ul className="p-2 font-bold space-y-2 text-emerald-500 pb-10">
        <li> - Hypoallergenic</li>
        <li> - Sound dampening</li>
        <li> - Requires no maintenance</li>
      </ul>
      {quantity > 0 && (
          <div className="flex justify-center items-center gap-3">
            <Button
              variant={"custom"}
              className=""
              onClick={() => decreaseCartQuantity(id)}
            >
              -
            </Button>
            <span>{quantity}</span>
            <Button
              variant={"custom"}
              className=""
              onClick={() => increaseCartQuantity(id)}
            >
              +
            </Button>
          </div>
        )}

        {quantity === 0 && (
          <Button
          className="w-full"
            variant={"custom"}
            onClick={() => increaseCartQuantity(id)}
          >
            + Add to cart
          </Button>
        )}
    </div>
  );
};
