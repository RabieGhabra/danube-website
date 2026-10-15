/* eslint-disable @next/next/no-img-element */
"use client";
import { assetPath } from "@/lib/asset-path";
import { Card, CardContent } from "@/components/ui/card";
import { ProductCard } from "../../products/ProductCard";
import type { CartItem } from "../Checkout";

type Props = {
  items: CartItem[];
  updateQty: (id: number, delta: number) => void;
};

export const LastMinuteBuy = ({ items, updateQty }: Props) => {
  return (
    <>
      <div className="mb-5 flex items-center gap-3">
        <img
          src={assetPath("/assets/icons/shopping-cart-(1).png")}
          alt="Cart"
          className="object-contain"
        />
        <h2 className="text-lg font-semibold text-primary">Last Minute Buy</h2>
      </div>

      <Card className="rounded-[40px] border-0 bg-[#FAFFCF] shadow-none">
        <CardContent className="p-3 sm:p-4 md:p-5">
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
              <ProductCard
                key={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                oldPrice={item.oldPrice}
                qty={item.qty}
                discount="-15%"
                compact
                onIncrease={() => updateQty(item.id, 1)}
                onDecrease={() => updateQty(item.id, -1)}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
};
