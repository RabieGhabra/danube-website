"use client";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import { FeaturedOffers } from "./sections/offers/FeaturedOffers";
import { RegionalOffers } from "./sections/offers/RegionalOffers";
import { ProductsForYou } from "./sections/products/ProductsForYou";
import { Categories } from "./sections/Categories";
import { Bundles } from "./sections/offers/BundlesOffers";
import { RecommendedForYou } from "./sections/products/RecommendedForYou";
import { EidSale } from "./sections/offers/EidSale";
import { PickedForYou } from "./sections/products/PickedForYou";
import { MostPopularProducts } from "./sections/products/MostPopularProducts";
import { GiftCardPromotion } from "./sections/promotion/GiftCardPromotion";
import { ShopNow } from "./sections/ShopNow";
import { MostWishlistedProducts } from "./sections/products/MostWishlistedProducts";
import { ShopByBrands } from "./sections/ShopByBrands";
import { MobileAppPromotion } from "./sections/promotion/MobileAppPromotion";
import { MostWishlistedRecipes } from "./sections/MostWishlistedRecipes";

export const Home = () => {
  return (
    <>
      <Header />

      <FeaturedOffers />
      <RegionalOffers />
      <ProductsForYou />
      <Categories />
      <Bundles />
      <RecommendedForYou />
      <EidSale />
      <PickedForYou />
      <MostPopularProducts />
      <GiftCardPromotion />
      <ShopNow />
      <MostWishlistedProducts />
      <ShopByBrands />
      <MobileAppPromotion />
      <MostWishlistedRecipes />

      <Footer />
    </>
  );
};
