import { CartItem } from "@/context/shopping-cart-context";
import { type ClassValue, clsx } from "clsx"
import { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function stripeData (products: any, cartItems: CartItem[]){
  const checkoutItems = [];
  for (const product of products) {
    for (const item of cartItems) {
      if (product.id === item.id) {
        product.quantity = item.quantity
        checkoutItems.push(product);
      }
    }
  }

  return checkoutItems.map(item => {
    return {
      quantity: item.quantity,
      price_data: {
        currency: "EUR",
        product_data: {
          name: item.title,
          description: item.descr,
          images: [item.stripeImageUrl]
        },
        unit_amount: item.price * 100
      }
    }
  })
}

export function absoluteUrl(path:string){
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}
