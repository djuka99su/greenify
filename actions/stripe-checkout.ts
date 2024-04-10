"use server";

import { stripe } from "@/lib/stripe";
import { absoluteUrl } from "@/lib/utils";

const successUrl = absoluteUrl("/checkout-confirmation?sessionId={CHECKOUT_SESSION_ID}");
const cancelUrl = absoluteUrl("/products");

export const createStripeUrl = async (items: any) => {

  const stripeSession = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: items,
    metadata: {
      userId: "35423adsdsa",
    },
    success_url: successUrl,
    cancel_url: cancelUrl,
  });

  return { data: stripeSession.url };
};
