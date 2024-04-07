"use client";


import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import Link from "next/link";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ProductSheet } from "./products/product-sheet";
import { products } from "@/data/products";
import { useShoppingCart } from "@/context/shopping-cart-context";

import { links, linksCategory } from "@/routes";

export const SheetBucket = ({ children }: { children: React.ReactNode }) => {
  const { cartItems } = useShoppingCart();
  console.log(cartItems);

  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent
        className="w-screen overflow-auto flex flex-col justify-between"
        side={"right"}
      >
        <div>
          <SheetHeader>
            <SheetTitle>Cart 🛒</SheetTitle>
            <SheetDescription className="text-center">
              This is shopping cart
            </SheetDescription>
          </SheetHeader>
          {cartItems.map((product, i) => (
            <SheetFooter key={product.id} className="my-4 space-x-4">
              <ProductSheet id={product.id} quantity={product.quantity} />
            </SheetFooter>
          ))}
        </div>
        <div>
          <p className="text-right">
            Total:{" "}
            {cartItems.reduce((total, cartItem) => {
              const item = products.find((i) => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)}
            €
          </p>
          <hr className="my-2" />
          <Button variant={"custom"} className="w-full text-white" asChild>
            <Link
              href={"https://buy.stripe.com/test_3cseYCdeub0z6di4gg"}
              target="_blank"
            >
              Checkout
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export const SheetNavbar = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent className="w-screen" side={"left"}>
        <SheetHeader>
          <SheetTitle className="text-left text-2xl">greenify 🍃</SheetTitle>
          <SheetDescription className="py-2">
            Navigate trough pages
          </SheetDescription>
          <Input placeholder="Search..." />
          <SheetFooter className="flex flex-col gap-2 text-left text-lg p-1">
            {links.map((link, i) => (
              <Link
                key={link.name}
                onClick={() => setOpen(false)}
                href={link.href}
              >
                {link.name}
              </Link>
            ))}
          </SheetFooter>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export const SheetFilter = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false);
  const pathName = usePathname();

  if (pathName.split("/").length == 4) {
    return null;
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="bg-emerald-500 text-white py-2 w-4/5 hover:bg-emerald-500/90">
        {children}
      </SheetTrigger>
      <SheetContent className="h-3/5" side={"bottom"}>
        <SheetHeader>
          <SheetTitle className="text-left text-2xl">Categories</SheetTitle>
          <SheetDescription>Choose one of the categories</SheetDescription>
          <SheetFooter className="flex flex-col gap-2 text-left text-lg p-1">
            {linksCategory.map((link, i) => (
              <Link
                key={link.name}
                onClick={() => setOpen(false)}
                href={
                  link.href + "/" + link.name.toLowerCase().replace(" ", "-")
                }
              >
                {link.name}
              </Link>
            ))}
          </SheetFooter>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
