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
import { useState, useTransition } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ProductSheet } from "./products/product-sheet";
import { products } from "@/data/products";
import { useShoppingCart } from "@/context/shopping-cart-context";
import { stripeData } from "@/lib/utils";

import { links, linksCategory } from "@/routes";
import { createStripeUrl } from "@/actions/stripe-checkout";
import { useRouter } from "next/navigation";

import { BeatLoader } from "react-spinners";
import { toast, Toaster } from "sonner";

export const SheetBucket = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { cartItems } = useShoppingCart();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const checkoutItems = stripeData(products, cartItems);

  const checkOut = () => {
    startTransition(() => {
      createStripeUrl(checkoutItems)
        .then((response) => {
          if (response.data) {
            window.location.href = response.data;
          }
          if (response.error) {
            setOpen(false);
            router.push("/auth/login");
            toast.info("Log in to make a purchase!");
          }
        })
        .catch(() => console.log("Something went wrong!"));
    });
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <Toaster />
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
          <Button
            onClick={checkOut}
            variant={"custom"}
            className="w-full text-white"
            disabled={isPending}
          >
            {isPending ? <BeatLoader className="text-white" /> : "Checkout"}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export const SheetNavbar = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const handleEnterDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push(`/search/${search}`);
      setOpen(false)
      setSearch("");
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent className="w-screen" side={"left"}>
        <SheetHeader>
          <SheetTitle className="text-left text-2xl">greenify 🍃</SheetTitle>
          <SheetDescription className="py-2">
            Navigate trough pages
          </SheetDescription>
          <Input onKeyDown={handleEnterDown} onChange={(e)=> setSearch(e.target.value)} value={search} placeholder="Search..." />
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
