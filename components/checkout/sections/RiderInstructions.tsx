/* eslint-disable @next/next/no-img-element */
"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export const RiderInstructions = () => {
  return (
    <Card className="rounded-2xl border-0 shadow-none w-full">
      <CardContent className="pb-20">
        
        {/* Header */}
        <div className="mb-5 flex items-center gap-3">
          <img
            src="/danube-website/assets/icons/rider.png"
            alt="Rider Instructions"
            className="object-contain w-8 h-8 sm:w-10 sm:h-10"
          />
          <h2 className="text-[18px] sm:text-[20px] font-semibold leading-6 text-primary">
            Rider Instructions
          </h2>
        </div>

        {/* Textarea */}
        <Textarea
          placeholder="Enter your Instructions"
          className="mt-5 min-h-30 sm:min-h-37.5 md:min-h-45 rounded-3xl border-0 bg-[#f2f3f7] px-4 pt-4 text-sm shadow-none placeholder:text-[#84899d]"
        />
      </CardContent>
    </Card>
  );
};
