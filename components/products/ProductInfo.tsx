"use client";
/* eslint-disable @next/next/no-img-element */ 
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "../ui/badge";

const cuts = ["Trim Fat", "Slice", "Whole", "Minced"];

const Counter = ({ value }: { value: string | number }) => (
  <div className="mt-3 flex h-13 w-full max-w-96 items-center justify-between rounded-[68px] bg-[#F2F3F7] px-2">
    <Button
      type="button"
      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white"
    >
      <img src="/assets/icons/minus.png" alt="Decrease" className="h-4 w-4" />
    </Button>
    <span className="text-[16px] font-semibold text-primary">{value}</span>
    <Button
      type="button"
      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black"
    >
      <img src="/assets/icons/plus.png" alt="Increase" className="h-4 w-4" />
    </Button>
  </div>
);

const ProductInfo = ({ type }: { type: "detail-meat" | "detail" }) => {
  const [selectedCut, setSelectedCut] = useState("Trim Fat");
  const [weight] = useState(250);

  return (
    <div className="min-w-0 max-w-md flex-1">
      {/* Points */}
      <div className="mt-4 flex justify-start">
        <Badge className="flex h-8.5 w-23.75 items-center justify-center gap-2 rounded-[17px] bg-[#050505] text-xs font-semibold text-[#90e874] md:text-sm">
          <img
            src="/assets/icons/discount-shape-(3).png"
            alt="sale"
            className="h-4 w-4 object-contain md:h-5 md:w-5"
          />
          <span>20pts</span>
        </Badge>
      </div>

      {/* Title */}
      <h1 className="mt-4 w-full max-w-md text-[22px] font-semibold leading-[130%] text-primary">
        <span className="inline sm:whitespace-nowrap">
          Nescafe Red Mug Instant Coffee 190g
        </span>
        Smooth &amp; Rich Flavour
      </h1>

      {/* Rating */}
      <div className="mt-2 flex items-center gap-1.5">
        <div className="flex items-center">
          <img
            src="/assets/icons/Group-76720.png"
            alt="Rating"
            className="mr-2 h-4 w-4 object-contain"
          />
          <p className="text-lg font-medium">
            <span className="text-primary">4.5</span>
            <span className="text-[#84899d]">(5K)</span>
          </p>
        </div>
      </div>

      {/* Offer */}
      <div className="mt-3 flex w-full items-center justify-between rounded-2xl bg-[#FAFFCF] px-4 py-2.5 md:h-14 md:w-90">
        <div className="flex items-center gap-2.5 text-[15px] font-semibold text-primary">
          <img
            src="/assets/icons/offer-icon.png"
            alt="Offer"
            className="h-5 w-5 shrink-0 md:h-6 md:w-6"
          />
          50% off on second Item
        </div>
        <img src="/assets/icons/arrow-right.png" alt="Arrow right" className="shrink-0" />
      </div>

      {/* Price */}
      <div className="mt-4 flex flex-wrap items-center gap-2.5">
        <span className="flex items-center gap-1 text-[24px] font-bold text-primary">
          <img src="/assets/icons/sar.png" alt="SAR" className="h-5 w-5" />
          26.00
        </span>
        <span className="text-[16px] font-semibold text-[#FF3F3F] line-through">
          30.00
        </span>
        <Badge className="flex h-7.5 w-26 items-center justify-center rounded-[48px] border border-black bg-[radial-gradient(45.83%_45.83%_at_50%_50%,#BAFFA4_0%,#8EF86C_100%)]">
          <img src="/assets/icons/discount-shape.png" alt="" className="mr-1.5 h-4 w-4" />
          <span className="text-[15px] font-semibold text-primary">15% Off</span>
        </Badge>
      </div>

      {/* Meat */}
      {type === "detail-meat" && (
        <>
          <div className="mt-5">
            <p className="mb-2 text-[18px] font-semibold text-primary">Select Preferred Cut</p>
            <div className="flex flex-wrap gap-3">
              {cuts.map((cut) => (
                <Button
                  key={cut}
                  type="button"
                  onClick={() => setSelectedCut(cut)}
                  className={`flex h-18 w-22 flex-col items-center justify-center gap-1 rounded-xl transition-none ${
                    selectedCut === cut ? "bg-[#97E080]" : "bg-[#F2F3F7]"
                  }`}
                >
                  <img
                    src={`/assets/icons/${cut.toLowerCase().replace(" ", "-")}.png`}
                    alt={cut}
                    className="h-7 w-7 object-contain"
                  />
                  <span className="text-[14px] font-medium text-primary">{cut}</span>
                </Button>
              ))}
            </div>
          </div>

          <p className="mt-5 text-[18px] font-semibold text-primary">Select Weight</p>
          <Counter value={`${weight}g`} />
        </>
      )}

      {/* Normal */}
      {type === "detail" && (
        <div className="mt-6">
          <div className="flex h-11.25 w-24.25 items-center justify-center rounded-[48px] bg-[#F2F3F7]">
            <span className="text-[18px] font-semibold leading-none text-[#84899D]">500ml</span>
          </div>
          <p className="mt-3 text-[18px] font-semibold leading-none text-[#121212]">Quantity</p>
          <Counter value={1} />
        </div>
      )}

      {/* Add to Cart */}
      <Button className="mt-6 flex h-13 w-full max-w-96 cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[radial-gradient(50%_50%_at_50%_50%,#BAFFA4_0%,#8EF86C_100%)] text-[16px] font-semibold text-primary shadow-md shadow-green-200">
        Add to Cart
        <img src="/assets/icons/shopping-cart.png" alt="" className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default ProductInfo;
