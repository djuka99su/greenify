"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import imgOne from "@/public/imgOne.png";
import Link from "next/link";
import { Button } from "../ui/button";
import { useShoppingCart } from "@/context/shopping-cart-context";

interface ProductCardProps {
  id: string
  productLink: string;
  image: StaticImageData;
  productDescr: string;
  productTitle: string;
}

export const ProductCard = ({
  id,
  productLink,
  image,
  productDescr,
  productTitle,
}: ProductCardProps) => {

  const {getitemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart}= useShoppingCart()
  const quantity = getitemQuantity(id)

  return (
    <Card className="w-[190px] sm:w-[250px] min-h-[350px] sm:min-h-[450px] cursor-pointer">
      <Link href={productLink}>
        <CardHeader className="items-center">
          <Image src={image} alt="Loading..." height={200} />
          <CardTitle className="text-lg text-emerald-600">
            {productTitle}
          </CardTitle>
          <CardDescription className="h-20 xl:h-28 overflow-auto">{productDescr}</CardDescription>
        </CardHeader>
      </Link>
      <CardFooter className="justify-center">
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
            variant={"custom"}
            onClick={() => increaseCartQuantity(id)}
          >
            + Add to cart
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
