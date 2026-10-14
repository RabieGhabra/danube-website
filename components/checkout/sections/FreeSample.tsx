/* eslint-disable @next/next/no-img-element */
"use client";

export const FreeSample = () => {
  return (
    <div className="flex min-h-23.5 w-full items-center justify-between gap-3 rounded-[19px] bg-[#FAFFCF] px-3 py-4 sm:px-4 md:px-5">
      <div className="flex min-w-0 items-center gap-2 sm:gap-3">
        <img
          src="/assets/icons/gift.png"
          alt="Free Sample"
          className="h-auto w-auto shrink-0 object-contain"
        />

        <div className="flex min-w-0 flex-col gap-1">
          <span className="text-sm font-semibold leading-5.5 tracking-[-0.41px] text-primary sm:text-[16px]">
            Free Sample
          </span>

          <span className="text-xs font-medium leading-4 sm:text-[16px] sm:leading-[100%]">
            Discover your favourites for free!
          </span>
        </div>
      </div>

      <img
        src="/assets/icons/arrow-right.png"
        alt="Arrow right"
        className="h-auto w-auto shrink-0 object-contain"
      />
    </div>
  );
};