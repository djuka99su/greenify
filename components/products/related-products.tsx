"use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";

export function RelatedProducts({ category, id }: { category: string, id:string }) {
  const relatedProducts = products.filter(
    (product) => product.category === category && product.id !== id
  );

  return (
    <Carousel className="max-w-[16rem] xl:max-w-7xl m-auto pb-20">
      <CarouselContent className="w-full xl:w-4/5">
        {relatedProducts.map((product, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Link href={`/products/${product.category.toLowerCase().replace(" ", "-").replace(" ", "-")}/${product.title.toLowerCase().replace(" ", "-").replace(" ", "-")}`}>
                <Card className="min-h-[240px] w-[240px] xl:min-h-[300px] xl:w-[300px]">
                  <CardContent className="flex flex-col aspect-square space-y-2 justify-center p-6">
                    <Image src={product.image} alt="Loading..." />
                    <p className="text-sm text-slate-500 font-bold">
                      {product.title.toUpperCase()}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
