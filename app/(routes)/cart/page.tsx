"use client";

import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import { useState, useEffect } from "react";
import CartItem from "./components/cart-item";

interface CartPageProps {}

const CartPage: React.FC<CartPageProps> = ({}) => {
  const cart = useCart();

  return (
    <div className="bg-white">
      <Container>
        <div className="py-12">
          <h1 className="font-semibold text-2xl md:text-3xl text-black">
            {cart.items.length === 1
              ? `${cart.items.length} item in your cart`
              : `${cart.items.length} items in your cart`}
          </h1>

          <div className="mt-4 md:mt-8 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              <ul>
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
