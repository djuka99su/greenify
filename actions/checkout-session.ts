"use server";

import { stripe } from '@/lib/stripe';


export async function checkOutSession (id: string){
    const checkoutSession = await stripe.checkout.sessions.retrieve(id, {
        expand: ["payment_intent", "line_items.data.price.product"],
      });

      return checkoutSession
}