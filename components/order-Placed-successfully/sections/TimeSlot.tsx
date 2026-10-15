/* eslint-disable @next/next/no-img-element */
import React from "react";

const TimeSlot = () => {
  return (
    <div className="mb-10 sm:mb-14 md:mb-16 lg:mb-20">
      {/* Header */}
      <div className="mb-4 flex items-center gap-2 sm:mb-5">
        <img
          src="/danube-website/assets/icons/time-slot.png"
          alt="Info"
          className="h-5 w-5 object-contain sm:h-6 sm:w-6"
        />

        <h2 className="text-[20px] font-semibold leading-[100%] tracking-[0%] text-primary sm:text-[22px] md:text-[24px]">
          Time Slot
        </h2>
      </div>

      {/* Time Box */}
      <div className="flex items-center rounded-2xl bg-[#f3f4f6] px-4 py-3 sm:rounded-3xl sm:px-6 sm:py-4 md:px-8">
        {/* Left Section */}
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <span className="text-[11px] font-semibold leading-5 tracking-[-0.41px] text-primary sm:text-[12px]">
            Today
          </span>

          <span className="text-[16px] font-semibold leading-5.5 tracking-[-0.41px] text-primary sm:text-[18px]">
            5 Jun
          </span>
        </div>

        {/* Vertical Divider */}
        <div
          style={{
            width: "1.6px",
            height: "39px",
            backgroundColor: "#84899D",
          }}
        />

        {/* Right Section */}
        <div className="flex flex-1 items-center justify-center text-center">
          <span className="text-[16px] font-semibold leading-5.5 tracking-[-0.41px] text-primary sm:text-[18px]">
            16:00 - 18:00
          </span>
        </div>
      </div>
    </div>
  );
};

export default TimeSlot;