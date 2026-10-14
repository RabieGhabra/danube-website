/* eslint-disable @next/next/no-img-element */
"use client";
import { Card, CardContent } from "@/components/ui/card";

type PaymentMethodProps = {
  showChange?: boolean;
};

export const PaymentMethod = ({ showChange = true }: PaymentMethodProps) => {
  return (
    <Card className="w-full rounded-2xl border-0 shadow-none">
      <CardContent className="w-full p-0">
        {/* Header */}
        <div className="mb-3 flex items-center justify-between gap-3 max-[340px]:flex-col max-[340px]:items-start">
          {/* Title */}
          <div className="flex items-center gap-3">
            <img
              src="/assets/icons/payment.png"
              alt="Payment"
              className="h-7 w-7 object-contain sm:h-8 sm:w-8"
            />
            <h2 className=" text-[18px] font-semibold text-primary sm:text-[20px] md:text-[22px]">
              Payment Method
            </h2>
          </div>
          {/* Change Button */}
          {showChange && (
            <div className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-primary sm:text-base">
              <img
                src="/assets/icons/edit.png"
                alt="Edit"
                className="object-contain"
              />
              Change
            </div>
          )}
        </div>

        {/* Payment Box */}
        <div className="flex min-h-17.5 w-full items-center gap-4 rounded-3xl bg-[#f2f3f7] p-3 sm:min-h-20">
          {/* Card Icon */}
          <div
            className="flex h-8 w-12 items-center justify-center rounded"
            style={{
              background:
                "linear-gradient(to bottom, #97E080 50%, #121212 50%)",
            }}
          >
            <img
              src="/assets/icons/Group-76848.png"
              alt="Card"
              className="h-5 w-auto object-contain"
            />
          </div>

          {/* Card Number */}
          <div className="flex flex-col">
            <p className="text-sm font-medium sm:text-base">XXXX XXXX 2685</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
