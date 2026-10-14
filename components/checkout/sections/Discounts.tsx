/* eslint-disable @next/next/no-img-element */
"use client";
import { Card, CardContent } from "@/components/ui/card";

const discounts = [
  { id: 1, bank: "SAB Bank", discount: "25% Off", logo: "/assets/icons/sab-bank.png" },
  { id: 2, bank: "Al Rajhi", discount: "25% Off", logo: "/assets/icons/al-rajhi.png" },
  { id: 3, bank: "SAB Bank", discount: "25% Off", logo: "/assets/icons/sab-bank.png" },
  { id: 4, bank: "Al Rajhi", discount: "25% Off", logo: "/assets/icons/al-rajhi.png" },
];

const descriptionText = (
  <span className="whitespace-normal text-[14px] leading-[100%]">
    25% off with SAB Credit Cards
  </span>
);

export const Discounts = () => {
  return (
    <Card className="border-0 bg-transparent shadow-none">
      <CardContent className="p-0">
        <div className="mb-5 flex items-center gap-3">
          <img src="/assets/icons/discount.png" alt="Discounts" className="object-contain" />
          <h2 className="text-[20px] font-semibold leading-6 text-primary">Discounts</h2>
        </div>

        <div className="overflow-hidden rounded-[40px] bg-[#CFFFCF] px-5 py-8.5 sm:px-6 lg:px-8.5">
          <div className="grid grid-cols-1 gap-5 min-[640px]:grid-cols-2 min-[1024px]:grid-cols-3 min-[1280px]:grid-cols-4">
            {discounts.map((item) => (
              <div
                key={item.id}
                className="relative min-h-37.75 w-full min-w-0 rounded-[7px] border border-[#B5DDAF] bg-white"
              >
                <div className="absolute -left-2.75 top-1/2 z-10 h-8.5 w-8.5 -translate-y-1/2 rounded-full border-r border-[#B5DDAF] bg-[#CFFFCF]" />
                <div className="absolute -right-2.75 top-1/2 z-10 h-8.5 w-8.5 -translate-y-1/2 rounded-full border-l border-[#B5DDAF] bg-[#CFFFCF]" />

                <div className="flex min-h-37.75 flex-col px-6 py-7.5 sm:px-7 lg:px-8.25">
                  <div className="flex -translate-y-2 items-center gap-3">
                    <div className="flex h-9.5 w-9.5 shrink-0 items-center justify-center overflow-hidden rounded-lg">
                      <img src={item.logo} alt={item.bank} className="h-full w-full object-contain" />
                    </div>

                    <div className="flex min-w-0 flex-col">
                      <span className="text-[12px] font-normal leading-3.75 text-[#8C8C8C]">
                        {item.bank}
                      </span>
                      <span className="text-[14px] font-bold leading-4.5 text-primary">
                        {item.discount}
                      </span>
                    </div>
                  </div>

                  <div className="my-2.25 ml-0.5 border-t border-dashed border-[#C8C8C8]" />

                  <p className="text-[14px] font-semibold leading-[100%] text-primary">
                    {descriptionText}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
