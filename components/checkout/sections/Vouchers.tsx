/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

type Voucher = {
  id: number;
  title: string;
  expiry: string;
  isSelected?: boolean;
};

const vouchers: Voucher[] = [
  { id: 1, title: "15% off", expiry: "24-07-2025", isSelected: true },
  { id: 2, title: "Enjoy 100 discount", expiry: "24-07-2025", isSelected: false },
  { id: 3, title: "Enjoy 100 discount", expiry: "24-07-2025", isSelected: false },
];

export const Vouchers = () => {
  return (
    <div className="mx-auto w-full max-w-6xl bg-white">
      {/* Header Section */}
      <div className="mb-5 flex w-full flex-col min-[280px]:flex-row min-[280px]:items-center min-[280px]:justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/danube-website/assets/icons/voucher.png"
            alt="Voucher"
            className="h-auto w-auto shrink-0 object-contain"
          />

          <h2 className="text-[20px] font-semibold leading-[100%] tracking-[0%] text-primary sm:text-[24px]">
            Vouchers
          </h2>
        </div>

        <div className="cursor-pointer flex shrink-0 items-center gap-2 text-sm font-semibold text-primary sm:gap-4 sm:text-base">
          <img
            src="/danube-website/assets/icons/edit.png"
            alt="Edit"
            className="object-contain"
          />
          Add New
        </div>
      </div>

      {/* Vouchers Grid */}
      <div
        className="
          grid w-full items-stretch gap-4
          grid-cols-1
          min-[700px]:grid-cols-2
          min-[1050px]:grid-cols-3
        "
      >
        {vouchers.map((voucher) => (
          <div
            key={voucher.id}
            className="relative flex h-full min-w-0 flex-col pt-7"
          >
            {/* Voucher Selected Label */}
            {voucher.isSelected && (
              <div className="absolute left-0 right-0 top-0 z-0 flex h-11 items-start justify-center rounded-t-[20px] bg-black pt-2 text-center text-[10px] font-medium text-[#97E080]">
                Voucher Selected
              </div>
            )}

            {/* Ticket Card */}
            <div
              className="relative flex h-full min-h-37.5 w-full flex-col justify-between overflow-hidden rounded-[20px] p-4 shadow-sm sm:p-5"
              style={{
                background:
                  "linear-gradient(98.48deg, #FFFB91 -1.16%, #97E080 50%, #FFE7B2 93.01%)",
                maskImage:
                  "radial-gradient(circle at 0 50%, transparent 12px, black 13px), radial-gradient(circle at 100% 50%, transparent 12px, black 13px)",
                maskComposite: "intersect",
                WebkitMaskImage:
                  "radial-gradient(circle at 0 50%, transparent 12px, black 13px), radial-gradient(circle at 100% 50%, transparent 12px, black 13px)",
                WebkitMaskComposite: "source-in",
              }}
            >
              {/* Top Section */}
              <div className="flex items-center gap-2 pb-4 sm:gap-3">
                <img
                  src="/danube-website/assets/icons/gift-(1).png"
                  alt="Gift"
                  className="h-auto w-auto shrink-0 object-contain"
                />

                <span className="text-base font-semibold text-primary sm:text-lg">
                  {voucher.id === 2 || voucher.id === 3 ? (
                    <>
                      Enjoy{" "}
                      <span className="inline-flex items-center gap-1">
                        <img
                          src="/danube-website/assets/icons/SAR.png"
                          alt="SAR"
                          className="h-4 w-4 object-contain"
                        />
                        100
                      </span>{" "}
                      discount
                    </>
                  ) : (
                    voucher.title
                  )}
                </span>
              </div>

              {/* Divider Image */}
              <div className="relative mb-4">
                <img
                  src="/danube-website/assets/icons/divider.png"
                  alt="Divider"
                  className="h-auto w-full object-contain"
                />
              </div>

              {/* Bottom Section */}
              <div className="flex flex-col gap-2 text-xs font-medium text-primary min-[500px]:flex-row min-[500px]:items-center min-[500px]:justify-between">
                <span>This code is valid till {voucher.expiry}</span>

                <span>T&Cs applied</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
