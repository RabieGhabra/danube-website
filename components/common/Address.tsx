/* eslint-disable @next/next/no-img-element */
"use client";
import { Card, CardContent } from "@/components/ui/card";

type AddressProps = {
  showChange?: boolean;
};

export const Address = ({ showChange = true }: AddressProps) => {
  return (
    <Card className="w-full rounded-2xl border-0 shadow-none">
      <CardContent className="w-full p-0">
        {/* Header */}
        <div className="mb-5 flex w-full flex-col gap-3 min-[240px]:flex-row min-[240px]:items-center min-[240px]:justify-between">
          <div className="flex min-w-0 items-center gap-2 text-[18px] font-semibold leading-[100%] tracking-[0%] text-primary sm:gap-3 sm:text-[20px] md:gap-4 md:text-[24px]">
            <img
              src="/assets/icons/location-pin.png"
              alt="Address"
              className="h-auto w-auto shrink-0 object-contain"
            />
            <span>Address</span>
          </div>

          {showChange && (
            <div className="cursor-pointer flex shrink-0 items-center gap-3 text-sm font-semibold text-primary sm:text-base">
              <img
                src="/assets/icons/edit.png"
                alt="Edit"
                className="h-auto w-auto shrink-0 object-contain"
              />
              <span>Change</span>
            </div>
          )}
        </div>

        {/* Address */}
        <div className="flex min-h-27 w-full flex-col justify-center rounded-3xl bg-[#f2f3f7] px-3 py-4 sm:px-4">
          <p className="font-semibold text-primary">Riad Sea Mall</p>

          <p className="mt-1 wrap-break-word text-xs leading-5 text-[#84899d] sm:text-sm">
            Ulaya Dist., P.O.Box: 56844, Riyadh, Riyadh, Saudi Arabia
            <br />
            +966 01-2178261
          </p>
        </div>
      </CardContent>
    </Card>
  );
};