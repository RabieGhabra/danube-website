"use client";
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";

const assetBase = "/danube-website/assets/images/";

const brands = [
  {
    productAlt: "Lays Chips",
    productClass: "max-h-[84.21%] max-w-[83.19%] object-contain",
    productSrc: `${assetBase}lays-chips.png`,
    logoAlt: "Lays Logo",
    logoClass: "w-[52.59%] object-contain",
    logoSrc: `${assetBase}lays-logo.png`,
  },
  {
    productAlt: "Digestive",
    productClass: "max-h-[73.65%] max-w-[81.47%] object-contain",
    productSrc: `${assetBase}digestive-biscuits.png`,
    logoAlt: "Digestive Logo",
    logoClass: "w-[71.98%] object-contain",
    logoSrc: `${assetBase}Digestive-Logo.png`,
  },
  {
    productAlt: "Lurpak Butter",
    productClass: "max-h-[100%] max-w-[100%] object-contain",
    productSrc: `${assetBase}lurpak-butter.png`,
    logoAlt: "Lurpak Logo",
    logoClass: "w-[55.17%] object-contain",
    logoSrc: `${assetBase}lurpak-logo.png`,
  },
  {
    productAlt: "Puck Cream",
    productClass: "max-h-[86.07%] max-w-[43.1%] object-contain",
    productSrc: `${assetBase}puck-cream.png`,
    logoAlt: "Puck Logo",
    logoClass: "w-[56.03%] object-contain",
    logoSrc: `${assetBase}puck-logo.png`,
  },
  {
    productAlt: "Digestive",
    productClass: "max-h-[73.65%] max-w-[81.47%] object-contain",
    productSrc: `${assetBase}digestive-biscuits.png`,
    logoAlt: "Digestive Logo",
    logoClass: "w-[71.98%] object-contain",
    logoSrc: `${assetBase}digestive-logo.png`,
  },
  {
    productAlt: "Pampers",
    productClass: "max-h-[77.54%] max-w-[71.98%] object-contain",
    productSrc: `${assetBase}pampers.png`,
    logoAlt: "Pampers Logo",
    logoClass: "w-[65.52%] object-contain",
    logoSrc: `${assetBase}pampers-logo.png`,
  },
];

export const ShopByBrands = () => {
  const [selectedBrand, setSelectedBrand] = useState<number | null>(null);

  return (
    <section
      aria-labelledby="shop-by-brands-heading"
      className="w-full overflow-hidden bg-[linear-gradient(158deg,rgba(255,170,210,1)_0%,rgba(255,185,217,1)_52%,rgba(255,225,161,1)_100%)]"
    >
      <Container className="pb-[min(1.51vw,29px)]">
        <header className="mx-auto flex h-14.5 items-center justify-center rounded-b-[18px] border-x-2 border-b-2 border-white bg-[#ffffff80] shadow-[0px_4px_4px_#0000000f] backdrop-blur-[2px] min-[480px]:h-15.5 min-[480px]:w-[55%] min-[768px]:h-17 min-[768px]:w-[40%] min-[1024px]:h-18.75 min-[1024px]:w-[32%] min-[1200px]:h-20.5 min-[1200px]:w-[27%] min-[1420px]:h-23.25 min-[1420px]:w-[22.4%]">
          <h2
            id="shop-by-brands-heading"
            className="whitespace-nowrap text-[20px] font-semibold text-[#904c6c] min-[480px]:text-[21px] min-[768px]:text-[23px] min-[1024px]:text-[26px] min-[1200px]:text-[30px] min-[1420px]:text-[min(1.7708vw,34px)]"
          >
            Shop by Brands
          </h2>
        </header>

        <div className="mx-auto mt-[min(3.90625vw,75px)] grid w-full grid-cols-1 justify-items-center gap-y-8 min-[480px]:grid-cols-2 min-[480px]:gap-x-5 min-[768px]:grid-cols-3 min-[1024px]:grid-cols-4 min-[1200px]:grid-cols-5 min-[1420px]:grid-cols-6 min-[1420px]:gap-x-[1.77%]">
          {brands.map((brand, index) => {
            const isSelected = selectedBrand === index;

            return (
              <div key={index} className="flex w-full flex-col items-center">
                <Button
                  type="button"
                  aria-label={`Shop 100+ products from brand ${index + 1}`}
                  aria-pressed={isSelected}
                  variant="ghost"
                  className="group block h-auto w-full max-w-76 rounded-[min(1.25vw,24px)] p-0 outline-none focus-visible:ring-white focus-visible:ring-offset-[#fdaed4]"
                  onClick={() => setSelectedBrand(isSelected ? null : index)}
                >
                  <Card
                    className={`overflow-visible border-0 bg-transparent shadow-none transition-transform ${isSelected ? "scale-[1.02]" : ""}`}
                  >
                    <CardContent className="flex flex-col items-center p-0">
                      <div className="flex aspect-232/180 w-full items-center justify-center overflow-hidden rounded-[min(1.25vw,24px)] border-white bg-[#ffffff80] shadow-[0px_4px_4px_#0000000f] backdrop-blur-[2px]">
                        <img
                          src={brand.productSrc}
                          alt={brand.productAlt}
                          className={brand.productClass}
                          width={304}
                          height={236}
                          loading={index === 0 ? "eager" : "lazy"}
                          decoding="async"
                          fetchPriority={index === 0 ? "high" : "auto"}
                        />
                      </div>

                      <Badge className="z-0 mt-[-7.33%] flex w-[58.62%] justify-center rounded-full bg-white text-[10px] font-semibold text-black min-[768px]:text-[11px] min-[1024px]:text-[12px] min-[1200px]:text-[13px] min-[1420px]:text-[14px]">
                        100+ Products
                      </Badge>
                    </CardContent>
                  </Card>
                </Button>

                <div className="mt-7 flex w-full max-w-76 items-center justify-center min-[480px]:mt-8 min-[768px]:mt-[min(1.8vw,34px)]">
                  <img
                    src={brand.logoSrc}
                    alt={brand.logoAlt}
                    className={brand.logoClass}
                    width={220}
                    height={100}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
