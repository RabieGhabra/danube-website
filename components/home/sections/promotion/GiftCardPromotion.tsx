import { assetPath } from "@/lib/asset-path";
/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Container from "@/components/ui/container";

const productImage = assetPath("/assets/images/Group-(5).png");

const giftCards = [
  { amount: "500", alignment: "pt-[58px]" },
  { amount: "200", alignment: "pt-[113px]" },
  { amount: "100", alignment: "pt-[58px]" },
];

export const GiftCardPromotion = () => {
  return (
    <Container aria-label="Gift card promotion">
      <div className="relative flex w-full overflow-hidden rounded-[25px] bg-[linear-gradient(135deg,rgba(255,251,145,1)_0%,rgba(151,224,128,1)_54%,rgba(255,231,178,1)_100%)] px-[4%] py-12 md:py-14 lg:py-16 min-h-75 md:min-h-112.5 lg:min-h-137.5">
        {/* Ribbons */}
        <img
          src={assetPath("/assets/images/Group-(4).png")}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 h-24 w-32 md:h-36 md:w-48 lg:h-46.5 lg:w-63.25 object-contain"
        />
        <img
          src={assetPath("/assets/images/Group-(3).png")}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-24 w-32 md:h-36 md:w-48 lg:h-46.5 lg:w-63.25 object-contain"
        />

        {/* Main content */}
        <div className="relative z-10 mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
          {/* Main gift card image */}
          <div className="flex shrink-0 items-center pt-10 md:pt-20 lg:pt-32">
            <img
              src={assetPath("/assets/images/Group-(2).png")}
              alt="Gift card"
              className="w-60 md:w-72 lg:w-87.75 h-auto"
            />
          </div>

          {/* Gift cards */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-3.75">
            {giftCards.map((giftCard) => (
              <div
                key={giftCard.amount}
                className={`group shrink-0 text-[#97E080] w-44 md:w-48 lg:w-51.5 ${giftCard.alignment}`}
              >
                <Card className="relative h-82.5 md:h-90 lg:h-92.5 overflow-visible rounded-3xl border border-[#ededed] bg-[#F2F3F7] shadow-none">
                  <CardContent className="relative h-full p-0">
                    {/* Top area */}
                    <div className="absolute left-[4.72%] top-2 w-[91.67%] h-[60.5%] rounded-[22px] bg-white">
                      <img
                        src={productImage}
                        alt=""
                        aria-hidden="true"
                        className="absolute left-[13.92%] top-7.75 h-28 md:h-32 lg:h-41 w-[70.39%] object-contain"
                      />
                    </div>

                    {/* Card info */}
                    <div className="absolute left-[6.31%] top-[63%] w-24">
                      <p className="text-[17px] md:text-[19px] font-medium text-primary">
                        Danube
                      </p>

                      <div className="mt-3 flex items-center gap-1.25">
                        <img
                          src={assetPath("/assets/icons/sar-(2).png")}
                          alt="sar"
                          className="h-6 w-6 md:h-6.75 md:w-6"
                        />
                        <span className="text-[19px] font-bold text-primary-green">
                          {giftCard.amount}
                        </span>
                      </div>
                    </div>

                    {/* Add to cart */}
                    <div className="absolute -bottom-9.5 left-1/2 -translate-x-1/2 flex items-center justify-center h-17.5 w-17.5 md:h-20 md:w-20 rounded-full border border-white bg-white shadow-[0px_4px_4px_0px_#0000000D]">
                      <Button
                        type="button"
                        aria-label={`Add Danube ${giftCard.amount} SAR gift card to cart`}
                        className="flex items-center justify-center h-13.75 w-13.75 md:h-16.5 md:w-16.5 rounded-full bg-[radial-gradient(45.83%_45.83%_at_50%_50%,#BAFFA4_0%,#8EF86C_100%)] p-0 shadow-none"
                      >
                        <img
                          src={assetPath("/assets/icons/shopping-cart.png")}
                          alt=""
                          aria-hidden="true"
                          className="h-6 w-6 md:h-7 md:w-7"
                        />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};