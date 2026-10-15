"use client";
import { assetPath } from "@/lib/asset-path";
import Image from "next/image";

const BakeryComponent = () => {
  const pastryImages = [
    assetPath("/assets/images/pastry-(1).png"),
    assetPath("/assets/images/pastry-(2).png"),
    assetPath("/assets/images/pastry-(3).png"),
  ];

  return (
    <section className="w-full overflow-hidden pt-20">
      {/* Logo */}
      <div className="mb-6 flex justify-center">
        <div className="flex items-center gap-3">
          <Image
            src={assetPath("/assets/images/bakery-logo.png")}
            alt="Bakery Logo"
            width={331}
            height={165}
            className="h-auto w-45 sm:w-55 md:w-67.5 lg:w-82.75 object-contain"
          />
        </div>
      </div>

      {/* 3 Pastry Images */}
      <div className="flex w-full overflow-hidden items-center">
        {pastryImages.slice(0, 3).map((src, i) => (
          <div key={i} className="relative w-1/3 aspect-2/1 overflow-hidden">
            <Image
              src={src}
              alt={`Pastry ${i + 1}`}
              fill
              className="object-fill"
            />
          </div>
        ))}
      </div>

      <div className="relative mt-10 px-4 md:px-0 w-full">
        <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
          <div className="relative w-full md:w-1/4 aspect-829/500">
            <Image
              src={assetPath("/assets/images/pastry-(4).png")}
              alt="Croissants"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="rounded-[20px] object-[unset] max-[768px]:object-cover"
            />
          </div>

          <div className="relative w-full md:w-2/4 aspect-1081/700">
            <Image
              src={assetPath("/assets/images/pastry-(5).png")}
              alt="Fresh bakery"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
            />
          </div>

          <div className="relative w-full md:w-1/4 aspect-829/500">
            <Image
              src={assetPath("/assets/images/pastry-(6).png")}
              alt="Fresh bread"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="rounded-[20px] object-[unset] max-[768px]:object-cover"
            />
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="mt-8 hidden items-center justify-center gap-2 md:flex lg:gap-3">
          <div className="h-4 w-4 shrink-0 rounded-full bg-[#F8E0AD] lg:h-6 lg:w-6" />

          <div className="relative h-13.75 w-14.25 shrink-0 lg:h-20.75 lg:w-21.5">
            <Image
              src={assetPath("/assets/images/donut.png")}
              alt="Donut Icon"
              fill
              className="object-contain"
            />
          </div>

          <div className="h-4 w-4 shrink-0 rounded-full bg-[#F8E0AD] lg:h-6 lg:w-6" />
        </div>
      </div>
    </section>
  );
};

export default BakeryComponent;
