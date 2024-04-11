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

  console.log(order)
  return (
    <div className="flex justify-center mt-10">
      <Toaster />
      <div className="p-2 w-full xl:w-4/5 text-center xl:text-left">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Thanks for purchase!</h2>
          <p className="text-slate-600 m-auto xl:m-0 w-full xl:w-3/5">
            
            Thank you for your order! Your purchase was successful. We are
            preparing your items for shipment. Expect a confirmation email with
            tracking details shortly.
          </p>
        </div>
        <div className="mt-6 xl:mt-2 mb-4 xl:mb-8">
          <p className="font-bold">
            Order Number: <span className="text-emerald-500">{order?.id}</span>
          </p>
        </div>
        <hr className="w-4/5 xl:w-3/5 m-auto xl:m-0" />
        <div>
          {products?.map((product, i) => (
            <div key={i}>
              <ProductCheckOutSuccess productData={product} />
              <hr className="w-4/5 xl:w-3/5 m-auto xl:m-0" />
            </div>
          ))}
        </div>
        <div className="w-full xl:w-3/5 p-4 flex justify-between">
          <p className="text-slate-500 tracking-wider ">Total amount including VAT</p>
          <p className="font-bold">Total: {order.amount/100}€</p>
        </div>
        <h2></h2>
      </div>
    </div>
  );
};
