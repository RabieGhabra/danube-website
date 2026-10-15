/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";

export type FloatingImage = {
  alt: string;
  src: string;
};

export type OfferImage = {
  alt: string;
  content: string;
  floatingImages: FloatingImage[];
  highlight?: boolean;
  floatingSize?: number;
  floatingOffset?: number;
};

type OffersGridProps = {
  offers: OfferImage[];
  showNavigation?: boolean;
  className?: string;
};

const SPECIAL_OFFERS = ["Offer 11", "Offer 12", "Offer 16"] as const;

export const OffersGrid = ({
  offers,
  className = "",
  showNavigation = false,
}: OffersGridProps) => {
  const [, setActiveSlide] = useState(0);

  const changeSlide = (direction: number) => {
    setActiveSlide((current) => (current + direction + 3) % 3);
  };

  return (
    <Container className={`mt-6 ${className}`}>
      <div className="relative flex w-full items-center">
        {showNavigation && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Previous"
            onClick={() => changeSlide(-1)}
            className="absolute -left-3.75 top-1/2 z-9999 hidden -translate-y-1/2 cursor-pointer rounded-full p-0 lg:flex"
          >
            <img alt="" src="/danube-website/assets/icons/Group-1171275623.png" />
          </Button>
        )}

        <div className="grid w-full grid-cols-1 gap-5 min-[320px]:grid-cols-2 min-[620px]:grid-cols-3 min-[1000px]:grid-cols-4 min-[1200px]:grid-cols-5 min-[1450px]:grid-cols-6">
          {offers.map((offer, index) => {
            const isSpecial = SPECIAL_OFFERS.includes(
              offer.alt as (typeof SPECIAL_OFFERS)[number],
            );

            return (
              <article
                key={index}
                className="relative overflow-hidden rounded-[20px]"
              >
                {offer.highlight && (
                  <img
                    src="/danube-website/assets/images/frame.png"
                    alt="Frame"
                    className="absolute inset-0 z-20 h-full w-full pointer-events-none"
                  />
                )}

                <div
                  className={`${offer.highlight ? "p-2" : ""} relative z-10`}
                >
                  <img
                    src={offer.content}
                    alt={offer.alt}
                    className="block h-auto w-full rounded-2xl object-contain"
                  />
                </div>

                {/* Offer 11 Overlay */}
                {offer.alt === "Offer 11" && (
                  <>
                    <img
                      src="/danube-website/assets/images/floating-bg.png"
                      alt="Floating Background"
                      className="absolute left-1/2 top-[4%] z-15 w-[92%] max-w-[92%] -translate-x-1/2 pointer-events-none"
                    />
                    <div className="absolute left-1/2 top-[5%] z-18 flex w-[75%] -translate-x-1/2 flex-col items-center gap-[1%] pointer-events-none">
                      <span className="whitespace-nowrap text-center font-black leading-none text-[#FFCE56] text-[clamp(9px,3.2vw,25px)]">
                        BEST
                      </span>
                      <span className="whitespace-nowrap text-center font-black leading-none text-[#FFCE56] text-[clamp(13px,4.8vw,36px)]">
                        OFFERS
                      </span>
                    </div>
                  </>
                )}

                {/* Offer 12 Overlay */}
                {offer.alt === "Offer 12" && (
                  <div className="absolute left-1/2 top-[7%] z-25 flex w-[92%] -translate-x-1/2 items-center justify-center pointer-events-none">
                    <img
                      src="/danube-website/assets/images/offer12-left.png"
                      alt="Left Icon"
                      className="h-auto w-[clamp(24px,8vw,77px)] shrink-0 object-contain -mr-[clamp(6px,2vw,28px)] -translate-y-[clamp(4px,1.5vw,15px)]"
                    />
                    <div className="flex shrink-0 flex-col items-center gap-0.5">
                      <span className="whitespace-nowrap text-center font-bold leading-none text-white text-[clamp(8px,2.4vw,20px)]">
                        Online
                      </span>
                      <div className="flex items-center justify-center rounded-[clamp(6px,1.2vw,15px)] bg-[#CEFF24] px-[clamp(4px,1.5vw,10px)] py-[clamp(2px,1vw,10px)] z-10">
                        <span className="whitespace-nowrap text-center font-semibold leading-none text-black text-[clamp(11px,3.5vw,32px)]">
                          Deals
                        </span>
                      </div>
                    </div>
                    <img
                      src="/danube-website/assets/images/offer12-right.png"
                      alt="Right Icon"
                      className="h-auto w-[clamp(22px,7vw,71px)] shrink-0 object-contain -ml-[clamp(5px,1.8vw,25px)] -translate-y-[clamp(4px,1.5vw,15px)]"
                    />
                  </div>
                )}

                {/* Offer 16 Overlay */}
                {offer.alt === "Offer 16" && (
                  <div className="absolute left-1/2 top-[5%] z-25 flex w-[96%] -translate-x-1/2 items-center justify-center pointer-events-none sm:top-[2%] sm:w-[94%] md:top-[-6%] md:w-[91%] lg:top-[-8%] lg:w-[88%] xl:top-[-6%] xl:w-[85%] max-[740px]:min-[621px]:top-[-2%]! max-[740px]:min-[621px]:w-[90%]! max-[770px]:min-[741px]:top-[-2%]!">
                    <img
                      src="/danube-website/assets/images/offer16-left.png"
                      alt="Left Icon"
                      className="h-auto w-[clamp(32px,9.5vw,74px)] shrink-0 object-contain -mr-[clamp(4px,1.5vw,15px)] translate-y-[clamp(4px,1.8vw,15px)] max-[740px]:min-[621px]:w-14.5! max-[740px]:min-[621px]:translate-y-2!"
                    />
                    <div className="flex shrink-0 flex-col items-center gap-0.5">
                      <span
                        className="whitespace-nowrap text-center font-black leading-none text-[#FC68A1] text-[clamp(10px,2.8vw,19px)] max-[740px]:min-[621px]:text-[15px]!"
                        style={{ WebkitTextStroke: "0.5px #FC68A1" }}
                      >
                        LABUBU
                      </span>
                      <span
                        className="whitespace-nowrap text-center font-black leading-none text-[#6D2424] text-[clamp(15px,5.2vw,33px)] max-[740px]:min-[621px]:text-[26px]!"
                        style={{ WebkitTextStroke: "1.5px #6D2424" }}
                      >
                        CAKE
                      </span>
                    </div>
                    <img
                      src="/danube-website/assets/images/offer16-right.png"
                      alt="Right Icon"
                      className="h-auto w-[clamp(28px,8vw,52px)] shrink-0 object-contain translate-y-[clamp(4px,1.8vw,15px)] max-[740px]:min-[621px]:w-10.5! max-[740px]:min-[621px]:translate-y-2!"
                    />
                  </div>
                )}

                {/* Floating Images */}
                <div
                  className="absolute left-1/2 z-30 flex w-[90%] -translate-x-1/2 items-end justify-center"
                  style={{
                    bottom: offer.floatingOffset
                      ? `${offer.floatingOffset}%`
                      : "13%",
                  }}
                >
                  {offer.floatingImages.map((image, floatingIndex) => {
                    const translateX =
                      offer.alt === "Offer 16"
                        ? floatingIndex === 0 || floatingIndex === 1
                          ? "15px"
                          : "0"
                        : "0";

                    const translateY =
                      floatingIndex === 1 ? (isSpecial ? "-2px" : "20px") : "0";

                    const zIndex =
                      offer.alt === "Offer 16"
                        ? floatingIndex === 1
                          ? 10
                          : 30
                        : isSpecial
                          ? floatingIndex === 1
                            ? 15
                            : 10
                          : floatingIndex === 1
                            ? 10
                            : 5;

                    return (
                      <div
                        key={floatingIndex}
                        className="flex max-w-full items-end justify-center"
                        style={{
                          transform: `translateX(${translateX}) translateY(${translateY}) scale(${offer.floatingSize || 1})`,
                          zIndex,
                          marginLeft: floatingIndex > 0 ? "-18px" : "0",
                          maxWidth: "100%",
                        }}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="block h-auto w-auto max-w-full object-contain"
                        />
                      </div>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>

        {showNavigation && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Next"
            onClick={() => changeSlide(1)}
            className="absolute -right-3.75 top-1/2 z-9999 -translate-y-1/2 cursor-pointer rounded-full p-0 lg:flex"
          >
            <img alt="" src="/danube-website/assets/icons/Group-78191.png" />
          </Button>
        )}
      </div>
    </Container>
  );
};
