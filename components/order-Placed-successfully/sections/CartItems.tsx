/* eslint-disable @next/next/no-img-element */
"use client";
import { assetPath } from "@/lib/asset-path";
import { Card, CardContent } from "@/components/ui/card";
import { ProductCard } from "../../products/ProductCard";
import type { CartItem } from "../OrderPlacedSuccessfully";
import { Button } from "@/components/ui/button";

type Props = {
  items: CartItem[];
  updateQty: (id: number, delta: number) => void;
};

export const CartItems = ({ items }: Props) => {
  return (
    <Card className="w-full rounded-2xl border-0 shadow-none">
      <CardContent className="w-full p-0">
        {/* HEADER */}
        <div className="mb-5 flex items-center gap-3">
          <img
            src={assetPath("/assets/icons/shopping-cart-(1).png")}
            alt="Cart"
            className="object-contain"
          />
          <h2 className="text-lg font-semibold text-primary">Items</h2>
        </div>

        <div className="flex w-full flex-col overflow-hidden rounded-[40px] bg-[#F2F3F7]">
          <div
            className="
              grid w-full gap-3 p-3 sm:p-4 md:p-5
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
                  showQuantity={false}
                  showDelete={false}
                  showOldPrice={false}
                  showQty
                />
              </div>
            ))}
          </div>

          <Button
            className="
            mt-3 h-11 w-full
            text-[16px] font-semibold
            leading-5.5 tracking-[-0.41px]
            text-primary
            "
            style={{
              background:
                "linear-gradient(102.46deg, #FFFB91 -1.62%, #97E080 69.72%, #FFE7B2 129.7%)",
            }}
          >
            <span className="cursor-pointer">See more</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
