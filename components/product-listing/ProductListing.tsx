/* eslint-disable @next/next/no-img-element */
"use client";
import { assetPath } from "@/lib/asset-path";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import Breadcrumb from "../ui/breadcrumb";
import Container from "../ui/container";
import { ProductCard } from "../products/ProductCard";
import { FilterSidebar } from "../products/FilterSidebar";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

/* ================= DATA ================= */

const products = [
  { title: "Lâ€™usine White Sliced Bread 600g", image: assetPath("/assets/images/bread.png"), oldPrice: "20.00"},
  { title: "Danube Cucumber\n (Tray) 900g", image: assetPath("/assets/images/cucumber.png"), oldPrice: "20.00"},
  { title: "Danube Parsley\n Leaves", image: assetPath("/assets/images/parsley.png"), oldPrice: "20.00"},
  { title: "Danube Tomato 1kg", image: assetPath("/assets/images/tomato.png"), oldPrice: "20.00" },
  { title: "Arfa Black Lemon\n Dried 200g", image: assetPath("/assets/images/lemon.png"), oldPrice: "20.00" },
  { title: "Danube Bakery Popcorn Dukka Sour & Sweet 260g", image: assetPath("/assets/images/popcorn.png"), oldPrice: "20.00" },
  { title: "Mahou 0.0% Tostada\n Non-Alcoholic Malt ...", image: assetPath("/assets/images/mahou.png"), oldPrice: "20.00" },
  { title: "Alpro Barista Coconut Milk 1L", image: assetPath("/assets/images/milk.png"), oldPrice: "20.00" },
  { title: "Chocolate Swiss Roll\n Cake", image: assetPath("/assets/images/cake.png"), oldPrice: "20.00" },
  { title: "Alyoum Cookly Chicken Fillet with Teriyaki Sauce..", image: assetPath("/assets/images/chicken.png"), oldPrice: "20.00" },
  { title: "Cocomax 100%\n Coconut Water 350ml", image: assetPath("/assets/images/coconut-water.png"), oldPrice: "20.00" },
  { title: "Bundaberg Ginger Beverage 375ml", image: assetPath("/assets/images/ginger.png"), oldPrice: "20.00" },
  { title: "Danube Imported Banana 1kg", image: assetPath("/assets/images/banana.png"), oldPrice: "20.00" },
  { title: "Danube Bakery\n Bread with Herbs", image: assetPath("/assets/images/bread-herbs.png"), oldPrice: "20.00" },
  { title: "Banbo Sockers Action Figure Lionel Messi Argentina", image: assetPath("/assets/images/messi.png"), oldPrice: "20.00" },
  { title: "Danube Potatoes\n Baladi (Bag) 1.8kg", image: assetPath("/assets/images/potatoes.png"), oldPrice: "20.00" },
];

/* ================= PRODUCT LISTING ================= */

export const ProductListing = () => {
  return (
    <>
      <Header />

      <Container>
        <div className="mt-8">
          <Breadcrumb items={["Chips"]} />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* LEFT FILTERS */}
          <FilterSidebar />

          {/* RIGHT PRODUCT GRID */}
          <div className="lg:col-span-3">
            {/* SORT & RESULTS BAR */}
            <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <p className="text-sm font-medium text-gray-700">
                1,600 Results for{" "}
                <span className="font-bold text-black">â€œChipsâ€</span>
              </p>

              <Button
                type="button"
                variant="ghost"
                className="h-auto gap-2 rounded-2xl bg-gray-100 px-5 py-2.5 text-sm font-bold text-primary"
              >
                <img
                  src={assetPath("/assets/icons/sort-icon.png")}
                  alt="Sort"
                  className="h-5 w-5 object-contain"
                />
                Sort By : Recommended
                <img
                  src={assetPath("/assets/icons/arrow-down.png")}
                  alt="Arrow Down"
                  className="h-4 w-4 object-contain"
                />
              </Button>
            </div>

            {/* OFFER */}
            <Badge className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#FAFFCF] px-4 py-2.5 text-[15px] font-semibold text-primary">
              <img
                src={assetPath("/assets/icons/offer-icon.png")}
                alt="Offer"
                className="h-5 w-5 shrink-0"
              />
              This product has a 40% discount
            </Badge>

            {/* PRODUCTS */}
            <div className="mt-4 grid grid-cols-1 gap-6 pb-32 sm:grid-cols-2 sm:pb-40 md:grid-cols-3 md:pb-48 lg:pb-56 xl:grid-cols-4 xl:pb-64">
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  title={product.title}
                  image={product.image}
                  oldPrice={product.oldPrice}
                  compactPrice
                  cartSpacing
                />
              ))}
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
};
