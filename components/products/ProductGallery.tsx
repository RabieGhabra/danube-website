/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "../ui/badge";

type ProductGalleryProps = {
  thumbnails: string[];
  mainImage: string;
};

const ProductGallery = ({
  thumbnails,
  mainImage,
}: ProductGalleryProps) => {
  const [, setActiveThumb] = useState(0);

  return (
    <div className="flex w-full flex-col gap-4 md:flex-row">
      {/* Thumbnails + Arrows */}
      <div className="relative flex h-auto shrink-0 items-center gap-3 md:h-150 md:w-28 md:flex-col md:gap-0">
        {/* Up Arrow */}
        <Button
          type="button"
          variant="ghost"
          aria-label="Previous thumbnails"
          className="absolute -top-4 hidden h-10 w-10 items-center justify-center p-0 md:flex"
        >
          <img
            src="/danube-website/assets/icons/Group-78194.png"
            className="h-8 w-8 cursor-pointer object-contain"
            alt="up"
          />
        </Button>

        {/* Thumbnails */}
        <div className="flex w-full gap-3 overflow-x-auto md:h-full md:flex-col md:justify-between md:gap-0 md:overflow-visible">
          {thumbnails.map((src, i) => (
            <Button
              key={i}
              type="button"
              variant="ghost"
              onClick={() => setActiveThumb(i)}
              className="h-22.5 min-w-22.5 overflow-hidden rounded-[20px] bg-[#F2F3F7] p-0 transition-all md:h-26.25 md:w-28"
            >
              <img
                src={src}
                alt={`Product thumbnail ${i + 1}`}
                className="h-full w-full object-contain p-3"
              />
            </Button>
          ))}
        </div>

        {/* Down Arrow */}
        <Button
          type="button"
          variant="ghost"
          aria-label="Next thumbnails"
          className="absolute -bottom-4 hidden h-10 w-10 items-center justify-center p-0 md:flex"
        >
          <img
            src="/danube-website/assets/icons/Group-78192.png"
            className="h-8 w-8 cursor-pointer object-contain"
            alt="down"
          />
        </Button>
      </div>

      {/* Main Image */}
      <div
        className="relative flex h-75 w-full shrink-0 items-center justify-center overflow-hidden md:h-150 md:w-150"
        style={{
          backgroundColor: "#F2F3F7",
          borderRadius: "40px",
        }}
      >
        {/* Sale Badge */}
        <Badge
          className="absolute left-3 top-3 z-10 flex items-center justify-center gap-1 bg-[#050505] text-sm font-semibold text-[#90e874] md:left-5 md:top-5 md:text-lg"
          style={{
            width: "99px",
            height: "36px",
            borderRadius: "18px",
          }}
        >
          <img
            src="/danube-website/assets/icons/discount-shape-(2).png"
            alt="sale"
            className="h-5 w-5 object-contain md:h-6 md:w-6"
          />
          SALE
        </Badge>

        {/* Favorite Icon */}
        <Button
          type="button"
          variant="ghost"
          aria-label="Add to favorites"
          className="absolute right-3 top-3 z-10 flex h-11.25 w-11.25 items-center justify-center p-0 md:right-5 md:top-5"
        >
          <img
            src="/danube-website/assets/icons/heart-circle.png"
            alt="favorite"
            className="h-12 w-12 cursor-pointer object-contain md:h-14 md:w-14"
          />
        </Button>

        {/* Main Product Image */}
        <img
          src={mainImage}
          alt="Main Product"
          className="h-[80%] w-[80%] object-contain md:h-[85%] md:w-[85%]"
        />

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 md:bottom-5">
          <span
            className="rounded-full border-2 border-black bg-[#97E080]"
            style={{
              width: "12px",
              height: "12px",
            }}
          />

          <span
            className="rounded-full bg-gray-400"
            style={{
              width: "10px",
              height: "10px",
            }}
          />

          <span
            className="rounded-full bg-gray-400"
            style={{
              width: "10px",
              height: "10px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;