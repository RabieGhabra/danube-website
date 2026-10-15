"use client";
import { assetPath } from "@/lib/asset-path";
/* eslint-disable @next/next/no-img-element */
import { Card, CardContent } from "@/components/ui/card";
import Container from "@/components/ui/container";

const recipeItems = [
  { image: assetPath("/assets/images/Rectangle-139401.png"), title: "BlackBean & Sweet Potato Patties with shredded Broccoli" },
  { image: assetPath("/assets/images/Rectangle-139408.png"), title: "Italian Stuffed Peppers with Toasted Za'atar Chickpeas and" },
  { image: assetPath("/assets/images/Rectangle-139408-(1).png"), title: "BlackBean & Sweet Potato Patties with shredded Broccoli" },
  { image: assetPath("/assets/images/Rectangle-139408-(2).png"), title: "BlackBean & Sweet Potato Patties with shredded Broccoli" }
];

export const MostWishlistedRecipes = () => {
  return (
    <Container
      className="mt-16 mb-10 sm:mb-14 md:mb-16 lg:mb-20"
      aria-labelledby="most-wishlisted"
    >
      <h2
        id="most-wishlisted"
        className="mb-5 text-[32px] font-semibold leading-normal text-primary"
      >
        Most Wishlisted
      </h2>

      <div className="grid grid-cols-1 gap-6 min-[580px]:grid-cols-2 min-[920px]:grid-cols-3 min-[1420px]:grid-cols-4">
        {recipeItems.map((recipe, index) => (
          <Card
            key={index}
            className="relative h-92.5 overflow-hidden rounded-3xl border-0 bg-transparent shadow-none"
          >
            <CardContent className="relative h-full p-0">
              <img
                className="h-full w-full rounded-3xl object-cover"
                alt={recipe.title}
                src={recipe.image}
              />

              <div className="absolute inset-0 rounded-3xl bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_15%,rgba(0,0,0,0.85)_100%)]" />

              <img
                className="absolute right-4 top-4 h-10 w-10 cursor-pointer"
                alt="favorite"
                src={assetPath("/assets/icons/Group-1171275531.png")}
              />

              <h3 className="absolute bottom-5 left-5 w-[69.32%] text-base font-medium leading-6 text-white">
                {recipe.title}
              </h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
};