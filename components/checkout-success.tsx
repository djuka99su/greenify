"use client";

import React, { useEffect } from "react";
import { Toaster, toast } from "sonner";
import Stripe from "stripe";
import { ProductCheckOutSuccess } from "./products/product-checkout-success";

interface CheckOutSuccessProps {
  order: Stripe.PaymentIntent | string | null | any;
  products: Stripe.LineItem[] | undefined;
}

export const CheckOutSuccess = ({ order, products }: CheckOutSuccessProps) => {
  useEffect(() => {
    toast.success("Payment successful!");
  }, []);
  return (
    <div className="min-h-full flex justify-center mt-10">
      <Toaster />
      <div className="p-2 w-full xl:w-4/5 text-center xl:text-left space-y-10 ">
        <div className="space-y-6 xl:space-y-2">
          <h2 className="text-4xl font-bold">Thanks for purchase!</h2>
          <p className="text-slate-600 m-auto xl:m-0 w-full xl:w-3/5">
            Thank you for your order! Your purchase was successful. We're
            preparing your items for shipment. Expect a confirmation email with
            tracking details shortly.{" "}
          </p>
        </div>
        <div>
          <p className="font-bold">
            Order Number: <span className="text-emerald-500">{order?.id}</span>
          </p>
        </div>
        <hr />
        <div className="space-y-2 pb-2">
          {products?.map((product, i) => (
            <div key={i}>
              <ProductCheckOutSuccess productData={product} />
              {i != products.length - 1 && <hr className="w-3/5" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
