/* eslint-disable @next/next/no-img-element */
"use client";
import { Card, CardContent } from "@/components/ui/card";
import { ProductCard } from "../../products/ProductCard";
import type { CartItem } from "../Checkout";
import { Button } from "@/components/ui/button";

type Props = {
  items: CartItem[];
  updateQty: (id: number, delta: number) => void;
};

export const CartItems = ({ items, updateQty }: Props) => {
  return (
    <Card className="w-full rounded-2xl border-0 shadow-none">
      <CardContent className="w-full p-0">
        {/* HEADER */}
        <div className="mb-5 flex w-full flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/assets/icons/shopping-cart-(1).png"
              alt="Cart"
              className="object-contain"
            />
            <h2 className=" text-lg font-semibold text-primary">
              Cart Items (2)
            </h2>
          </div>
          <Button
            type="button"
            className="h-9.5 w-full rounded-[48px] bg-[#1a1a1a] text-base font-medium text-[#97E080] sm:w-47.25"
          >
            Continue Shopping
          </Button>
        </div>

        {/* CART */}
        <div className="w-full rounded-[40px] bg-[#F2F3F7] p-3 sm:p-4 md:p-5">
          <div
            className="
              grid w-full gap-3
              grid-cols-1
              min-[600px]:grid-cols-2
              min-[850px]:grid-cols-3
              min-[1100px]:grid-cols-4
              min-[1400px]:grid-cols-5
            "
          >
            {items.map((item) => (
              <div key={item.id} className="min-w-0">
                <ProductCard
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  oldPrice={item.oldPrice}
                  qty={item.qty}
                  compact
                  onIncrease={() => updateQty(item.id, 1)}
                  onDecrease={() => updateQty(item.id, -1)}
                />
              </div>
            ))}
          </div>

          {/* FOOTER NOTE */}
          <p className="my-5 w-full text-[14px] font-medium italic leading-[100%] tracking-[0%] text-[#84899d] sm:my-6 sm:text-[16px] md:my-8 md:text-[18px]">
            * Final weight of fruits & vegetables may vary
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
