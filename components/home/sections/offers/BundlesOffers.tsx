/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Image from "next/image";

const bundleItems = [
  "/assets/images/grocery.png",
  "/assets/images/snacks-beverages.png",
  "/assets/images/dairy.png",
  "/assets/images/frozen-food.png",
  "/assets/images/pet-care.png",
];

const backgroundImage = "/assets/images/background-(2).png";

const sizes = [
  { w: "w-[185px]", h: "h-[196px]" },
  { w: "w-[190px]", h: "h-[201px]" },
  { w: "w-[199px]", h: "h-[192px]" },
  { w: "w-[152px]", h: "h-[175px]" },
  { w: "w-[264px]", h: "h-[123px]" },
];

const offsets = ["top-6", "top-5", "top-9", "top-12", "top-28"];

export const Bundles = () => {
  return (
    <Container className="mt-16" aria-labelledby="bundles-offer">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <h2
          id="bundles-offer"
          className="text-[32px] font-semibold text-primary"
        >
          Bundles Offer
        </h2>

        <Button
          type="button"
          variant="ghost"
          className="h-auto gap-3 p-0 font-semibold text-black"
        >
          See all
          <Image
            src="/assets/icons/see-all.png"
            alt=""
            width={42}
            height={42}
            className="cursor-pointer"
          />
        </Button>
      </div>

      {/* Bundles Grid */}
      <div className="grid place-items-center grid-cols-1 gap-7 min-[640px]:grid-cols-2 min-[900px]:grid-cols-3 min-[1200px]:grid-cols-4 min-[1480px]:grid-cols-5 min-[1600px]:gap-6">
        {bundleItems.map((image, i) => (
          <div
            key={i}
            className="relative h-81.75 w-78.25 max-w-full flex items-center justify-center overflow-hidden rounded-[20px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("${backgroundImage}")` }}
          >
            <img
              src={image}
              alt={`Bundle offer ${i + 1}`}
              className={`absolute ${sizes[i].w} ${sizes[i].h} ${offsets[i]} object-contain scale-90 min-[1200px]:scale-95 min-[1480px]:scale-100`}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};