/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import React from "react";

const SupportBanner = () => (
  <div
    className="relative h-auto min-h-31.5 w-full overflow-hidden rounded-2xl p-4 shadow-sm max-lg:mb-8 sm:rounded-3xl sm:p-5 md:p-6"
    style={{
      background:
        "linear-gradient(102.46deg,#FFFB91 -1.62%,#97E080 69.72%,#FFE7B2 129.7%)",
    }}
  >
    <div className="flex items-start gap-1">
      {/* Icon */}
      <div className="h-8 w-8 shrink-0 sm:h-10 sm:w-10">
        <img
          src="/assets/icons/operator-(1).png"
          alt="Support Agent"
          className="h-5 w-5 object-contain sm:h-6 sm:w-6"
        />
      </div>

      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col gap-3 sm:gap-4">
        <h2 className="text-[16px] font-semibold leading-5.5 tracking-[-0.41px] text-primary sm:text-[18px]">
          Need help with the order?
        </h2>

        <Button className="cursor-pointer h-11 w-full max-w-43.25 rounded-2xl bg-white px-4 text-[14px] font-semibold text-primary sm:h-13 sm:rounded-[18px] sm:text-[16px]">
          Contact Support
        </Button>
      </div>
    </div>
  </div>
);

export default SupportBanner;
