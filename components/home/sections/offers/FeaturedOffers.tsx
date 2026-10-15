"use client";
import { assetPath } from "@/lib/asset-path";
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";

export const FeaturedOffers = () => {
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [activeOfferSlide, setActiveOfferSlide] = useState(0);

  const dots = [0, 1, 2];

const Dot = ({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) => (
  <Button
    type="button"
    aria-label={label}
    aria-pressed={active}
    onClick={onClick}
    className={`h-3 w-3 min-w-0 rounded-full p-0 transition-colors sm:h-4 sm:w-4 md:h-5 md:w-5 ${
      active ? "bg-[#97e080]" : "bg-[#d9d9d9]"
    }`}
  />
);

  return (
    <Container className="pt-8" aria-label="Featured offers">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_400px] lg:items-stretch">
        {/* Featured Offers */}
        <div className="flex flex-col">
          <div className="overflow-hidden rounded-[20px] bg-white lg:flex-1 max-[1480px]:lg:flex-none">
            <img
              src={assetPath("/assets/images/Rectangle-139456.png")}
              alt="Featured products"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="mt-3 flex justify-center gap-2.5">
            {dots.map((i) => (
              <Dot
                key={i}
                active={activeHeroSlide === i}
                onClick={() => setActiveHeroSlide(i)}
                label={`Show featured offer ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* White Friday */}
        <div className="flex flex-col">
          <div className="flex-1 overflow-hidden rounded-[20px]">
            <img
              src={assetPath("/assets/images/Rectangle-139465.png")}
              alt="White Friday sale"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mt-3 flex justify-center gap-2.5">
            {dots.map((i) => (
              <Dot
                key={i}
                active={activeOfferSlide === i}
                onClick={() => setActiveOfferSlide(i)}
                label={`Show White Friday offer ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
