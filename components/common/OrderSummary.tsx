/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "../ui/badge";

type OrderSummaryProps = {
  showCheckoutButton?: boolean;
};

export const OrderSummary = ({
  showCheckoutButton = true,
}: OrderSummaryProps) => {
  return (
    <Card className="w-full rounded-2xl border-0 shadow-none max-lg:pb-8">
      <CardContent className="w-full p-0">
        {/* Header */}
        <div className="flex items-center gap-3">
          <img
            src="/assets/icons/summary.png"
            alt="Summary"
            className="h-7 w-7 object-contain sm:h-8 sm:w-8"
          />
          <h2 className="mb-5 text-[18px] font-semibold text-primary sm:text-[20px] md:text-[22px]">
            Summary
          </h2>
        </div>
        {/* Summary Box */}
        <div
          className={`w-full rounded-3xl bg-[#f2f3f7] p-4 ${
            showCheckoutButton ? "min-h-75 sm:min-h-85 md:min-h-90" : "min-h-0"
          }`}
        >
          <div className="flex w-full flex-col text-sm sm:text-base">
            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <span className="text-[15px] font-medium text-[#84899D] sm:text-[16px]">
                Subtotal
              </span>

              <span className="flex items-center gap-1 text-[15px] font-medium text-primary sm:text-[16px]">
                <img
                  src="/assets/icons/SAR.png"
                  alt="SAR"
                  className="h-4 w-4 object-contain"
                />
                1500
              </span>
            </div>

            {/* Delivery Fees */}
            <div className="mt-5 flex items-center justify-between">
              <span className="text-[15px] font-medium text-[#84899D] sm:text-[16px]">
                Delivery Fees (SAR 15.00)
              </span>

              <span className="flex items-center gap-1 text-[15px] font-medium text-primary sm:text-[16px]">
                <img
                  src="/assets/icons/SAR.png"
                  alt="SAR"
                  className="h-4 w-4 object-contain"
                />
                19.03
              </span>
            </div>

            {/* VAT */}
            <div className="mt-5 flex items-center justify-between">
              <span className="text-[15px] font-medium text-[#84899D] sm:text-[16px]">
                VAT (15%)
              </span>

              <span className="flex items-center gap-1 text-[15px] font-medium text-primary sm:text-[16px]">
                <img
                  src="/assets/icons/SAR.png"
                  alt="SAR"
                  className="h-4 w-4 object-contain"
                />
                19.03
              </span>
            </div>

            {/* Promotion */}
            <div className="mt-5 flex items-center justify-between">
              <span className="text-[15px] font-medium text-[#84899D] sm:text-[16px]">
                Promotion (SAR200)
              </span>

              <span className="flex items-center gap-1 text-[15px] font-medium text-primary sm:text-[16px]">
                <img
                  src="/assets/icons/SAR.png"
                  alt="SAR"
                  className="h-4 w-4 object-contain"
                />
                19.03
              </span>
            </div>

            {/* Points */}
            <div className="mt-5 flex items-center justify-between">
              <span className="text-[15px] font-medium text-[#84899D] sm:text-[16px]">
                Points Earned
              </span>

              <Badge className="flex h-9 w-20 items-center justify-center gap-1 rounded-[18px] bg-[#050505] text-[13px] font-semibold text-[#90e874] sm:text-sm">
                <img
                  src="/assets/icons/discount-shape-(3).png"
                  alt="sale"
                  className="h-4 w-4 object-contain sm:h-5 sm:w-5"
                />
                20pts
              </Badge>
            </div>

            {/* Total */}
            <div className="mt-4 flex items-center justify-between border-t-2 border-[#e5e5e5] pt-3">
              <span className="text-[18px] font-bold text-primary sm:text-[20px]">
                Total
              </span>

              <span className="flex items-center gap-1 text-[18px] font-bold text-primary sm:text-[20px]">
                <img
                  src="/assets/icons/SAR.png"
                  alt="SAR"
                  className="h-6 w-6 object-contain"
                />
                1,462.35
              </span>
            </div>

            {/* Checkout Button */}
            {showCheckoutButton && (
              <Button className="mt-5 h-13 w-full cursor-pointer rounded-[18px] bg-[#97E080] text-[16px] font-semibold text-primary shadow-none">
                Checkout
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
