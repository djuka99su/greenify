"use client";

import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "@/context/shopping-cart-context";
import { products } from "@/data/products";
import { IoMdClose } from "react-icons/io";

interface ProductSheetProps {
  id: string;
  quantity: number;
}

export const ProductSheet = ({ id, quantity }: ProductSheetProps) => {
  const {
    getitemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const product = products.find((i) => i.id === id);
  const productQuantity = getitemQuantity(id);

  if (product == null) return null;

  return (
    <>
      <Image src={product.image} alt="Loading image..." height={80} />
      <div className="flex flex-col justify-center">
        <h3 className="font-bold text-sm text-emerald-500">{product.title}</h3>
        <span className="text-xs">Color: {product.color}</span>
        {product.size && <span className="text-xs">Size: {product.size}</span>}
        <span className="text-xs">Frame: {product.frame}</span>
      </div>
      <div className="flex flex-col justify-evenly pl-4">
        <div className="flex gap-1">
          <span className="text-sm">
            Price: {product.price * productQuantity}€
          </span>
          <button
            onClick={() => removeFromCart(product.id)}
            className="relative bottom-2 left-4"
          >
            <IoMdClose />
          </button>
        </div>
        <div className="flex justify-center items-center gap-2">
          <Button
            variant={"custom"}
            onClick={() => decreaseCartQuantity(product.id)}
            className="w-4 h-6"
          >
            -
          </Button>
          <span>{productQuantity}</span>
          <Button
            variant={"custom"}
            onClick={() => increaseCartQuantity(product.id)}
            className="w-4 h-6"
          >
            +
          </Button>
        </div>
      </div>
    </>
  );
};
