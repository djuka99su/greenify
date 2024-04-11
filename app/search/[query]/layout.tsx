import { BreadcrumbCustom } from "@/components/breadcrumb-custom";
import { CategoryFilter } from "@/components/products/category-filter";
import { SheetFilter } from "@/components/sheet-custom";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const linksCategory = [
  { href: "/products", name: "Moss pictures" },
  { href: "/products", name: "Moss wall" },
  { href: "/products", name: "Moss Decorations" },
  { href: "/products", name: "Other" },
];

const ProductsLayout = ({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: {query:string}
}>) => {


  return (
    <div className="mt-10 min-h-full w-full xl:w-4/5 m-auto">
      <div className="w-full flex justify-center mt-2 xl:hidden">
        <SheetFilter>Filter</SheetFilter>
      </div>
      <div className="w-full pt-10 xl:pt-20">
        <div className="flex gap-0 xl:gap-32">
          <CategoryFilter/>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ProductsLayout;
