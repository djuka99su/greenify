"use server";

import { stripe } from "@/lib/stripe";
import { absoluteUrl } from "@/lib/utils";
import { auth } from "@/auth";
import { error } from "console";

const successUrl = absoluteUrl("/checkout-confirmation/{CHECKOUT_SESSION_ID}");
const cancelUrl = absoluteUrl("/products");

export const createStripeUrl = async (items: any) => {

  const user = await auth()

  if(!user){
    return { error: "Unauthorized"}
  }

  const stripeSession = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    customer_email: user.user.email as string | undefined,
    line_items: items,
    metadata: {
      userId: user.user.id,
    },
    success_url: successUrl,
    cancel_url: cancelUrl,
  });

  return { data: stripeSession.url };
};
