"use client";

import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import { useState, useEffect } from "react";
import CartItem from "./components/cart-item";
import Summary from "./components/summary";

interface CartPageProps {}

const CartPage: React.FC<CartPageProps> = ({}) => {
  const cart = useCart();
  const items = useCart((state) => state.items);

  // Calculate the total price
  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  return (
    <div className="bg-white">
      <Container>
        <div className="py-12">
          <h1 className="font-semibold text-2xl md:text-3xl text-black">
            {cart.items.length === 1
              ? `${cart.items.length} item in your cart for $${totalPrice}`
              : `${cart.items.length} items in your cart for $${totalPrice}`}
          </h1>

          <div className="mt-4 md:mt-8 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              <ul>
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>

            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
