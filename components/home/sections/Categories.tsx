/* eslint-disable @next/next/no-img-element */
"use client";
import { assetPath } from "@/lib/asset-path";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Image from "next/image";

type CategoryItem = {
  name: string;
  image: string;
  sale?: boolean;
  width?: string;
  height?: string;
  offset?: string;
};

const backgroundImage = assetPath("/assets/images/background-(2).png");

const categoryItems: CategoryItem[] = [
  { name: "Groceries", image: assetPath("/assets/images/grocery.png"), sale: true, width: "84px", height: "104px", offset: "mb-12" },
  { name: "Snacks & Beverages", image: assetPath("/assets/images/snacks-beverages.png"), width: "84px", height: "104px", offset: "mb-10" },
  { name: "Dairy Eggs", image: assetPath("/assets/images/dairy.png"), width: "92px", height: "104px", offset: "mb-10" },
  { name: "Frozen Food", image: assetPath("/assets/images/frozen-food.png"), width: "78px", height: "104px", offset: "mb-10" },
  { name: "Plant Based Products", image: assetPath("/assets/images/plant-products.png"), width: "84px", height: "104px", offset: "mb-12" },
  { name: "Bundle Deals", image: assetPath("/assets/images/deals.png"), width: "144px", height: "110px" },
  { name: "Fresh Chicken", image: assetPath("/assets/images/chicken-(2).png"), width: "84px", height: "104px", offset: "mb-12" },
  { name: "Home Care", image: assetPath("/assets/images/home-care.png"), width: "140px", height: "111px", offset: "mb-8" },
  { name: "Salads & Appetizers", image: assetPath("/assets/images/appetizers.png"), width: "88px", height: "102px", offset: "mb-12" },
  { name: "Fresh Chicken", image: assetPath("/assets/images/chicken-(2).png"), width: "84px", height: "104px", offset: "mb-12" },
  { name: "Bread", image: assetPath("/assets/images/bread-(2).png"), width: "46px", height: "111px", offset: "-mt-12" },
  { name: "Home Care", image: assetPath("/assets/images/home-care.png"), width: "140px", height: "111px", offset: "mb-8" },
  { name: "Cakes & Muffins", image: assetPath("/assets/images/muffins.png"), width: "118px", height: "72px", offset: "mt-4" },
  { name: "Rusk", image: assetPath("/assets/images/rusk.png"), width: "114px", height: "76px", offset: "mt-4" },
  { name: "Pastries", image: assetPath("/assets/images/pastries.png"), width: "106px", height: "84px", offset: "mt-4" },
  { name: "Danube Cakes", image: assetPath("/assets/images/cakes.png"), width: "108px", height: "94px", offset: "mt-1" },
];

const categoryLabel = (name: string) => {
  const words = name.split(" ");
  return words.length > 1 ? (
    <>
      {words.slice(0, -1).join(" ")}
      <br />
      {words[words.length - 1]}
    </>
  ) : name;
};

export const Categories = () => {
  return (
    <Container className="mt-16" aria-labelledby="categories">
      <div className="mb-5 flex items-center justify-between">
        <h2 id="categories" className="text-[32px] font-semibold leading-normal text-primary">Category</h2>
        <Button type="button" variant="ghost" className="h-auto gap-3 p-0 font-semibold text-black">
          See all
          <Image src={assetPath("/assets/icons/see-all.png")} alt="" width={42} height={42} className="cursor-pointer" />
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-x-5 gap-y-10 min-[480px]:grid-cols-2 min-[640px]:grid-cols-3 min-[768px]:grid-cols-4 min-[900px]:grid-cols-5 min-[1100px]:grid-cols-6 min-[1250px]:grid-cols-7 min-[1420px]:grid-cols-8">
        {categoryItems.map((category, index) => (
          <article key={`${category.name}-${index}`} className="flex min-w-0 flex-col items-center">
            <Button type="button" className="relative h-45.5 w-45.75 max-w-full overflow-visible bg-transparent p-0 hover:bg-transparent">
              <div className="relative h-full w-full bg-size-[100%_100%] bg-center bg-no-repeat" style={{ backgroundImage: `url("${backgroundImage}")` }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src={category.image} alt={category.name} style={{ width: category.width, height: category.height }} className={`mx-auto object-contain ${category.offset ?? ""}`} />
                </div>
              </div>

              {category.sale && (
                <Badge className="absolute -bottom-3.75 left-1/2 flex h-7.5 w-22.25 -translate-x-1/2 items-center justify-center gap-1 rounded-[22.5px] bg-[#050505] text-base font-semibold text-[#90e874]">
                  <img src={assetPath("/assets/icons/discount-shape-(2).png")} alt="sale" className="h-4 w-4 object-contain" />
                  SALE
                </Badge>
              )}
            </Button>

            <p className="mt-4 min-h-12 text-center text-xl font-semibold leading-normal text-primary">{categoryLabel(category.name)}</p>
          </article>
        ))}
      </div>
    </Container>
  );
};