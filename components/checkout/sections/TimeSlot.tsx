/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const timeSlotsData = [
  { id: 1, day: "Today", date: "5 Jun", time: "16:00 - 18:00", isActive: true },
  { id: 2, day: "Tomorrow", date: "6 Jun", time: "16:00 - 18:00", isActive: false,},
  { id: 3, day: "Sat", date: "7 Jun", time: "16:00 - 18:00", isActive: false },
  { id: 4, day: "Sun", date: "8 Jun", time: "16:00 - 18:00", isActive: false },
];

export const TimeSlot = () => {
  return (
    <Card className=" w-full max-w-5xl rounded-3xl border-0 shadow-none">
      <CardContent className="p-0">
        {/* Header Section */}
        <div className="mb-5 flex items-center gap-3">
          <img
            src="/assets/icons/time-slot.png"
            alt="Voucher"
            className="h-auto w-auto shrink-0 object-contain"
          />

          <h2 className="text-[20px] font-semibold leading-[100%] tracking-[0%] text-primary sm:text-[24px]">
            Time Slot
          </h2>
        </div>
        {/* Days */}
        <div
          className="
            grid w-full gap-3
            grid-cols-1
            min-[500px]:grid-cols-2
            min-[750px]:grid-cols-3
            min-[1000px]:grid-cols-4
          "
        >
          {timeSlotsData.map((slot) => (
            <Button
              key={slot.id}
              type="button"
              variant="ghost"
              className={`flex h-auto w-full flex-col items-center justify-center gap-0 rounded-[60px] py-3 ${
                slot.isActive
                  ? "bg-[#111111] text-white"
                  : "bg-[#f4f5f9] text-[#84899d]"
              }`}
            >
              <span
                className={`text-[11px] font-medium ${
                  slot.isActive ? "text-[#97E080]" : "text-[#84899d]"
                }`}
              >
                {slot.day}
              </span>

              <span
                className={`text-lg font-semibold ${
                  slot.isActive ? "text-[#97E080]" : "text-[#5e6278]"
                }`}
              >
                {slot.date}
              </span>
            </Button>
          ))}
        </div>

        {/* Times */}
        <div
          className="
            mt-3 grid w-full gap-3
            grid-cols-1
            min-[500px]:grid-cols-2
            min-[750px]:grid-cols-3
            min-[1000px]:grid-cols-4
          "
        >
          {timeSlotsData.map((slot) => (
            <Button
              key={slot.id}
              type="button"
              variant="ghost"
              className={`h-auto w-full rounded-[18px] py-3 text-sm font-semibold ${
                slot.isActive
                  ? "bg-[#111111] text-[#97E080]"
                  : "bg-[#f4f5f9] text-[#84899d]"
              }`}
            >
              {slot.time}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
