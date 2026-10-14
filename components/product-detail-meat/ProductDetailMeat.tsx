/* eslint-disable @next/next/no-img-element */
"use client";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import { ProductCard } from "@/components/products/ProductCard";
import Container from "@/components/ui/container";
import Breadcrumb from "@/components/ui/breadcrumb";
import ProductInfo from "../products/ProductInfo";
import ProductGallery from "../products/ProductGallery";
import ProductAccordion from "../products/ProductAccordion";

const products = [
  { title: "Danube Imported\nBanana 1 kg", image: "/assets/images/banana.png", oldPrice: "20.00" },
  { title: "Danube Cucumber\n(Tray) 900g", image: "/assets/images/cucumber.png", oldPrice: "20.00" },
  { title: "Danube Tomato\n1kg", image: "/assets/images/tomato.png", oldPrice: "20.00" },
  { title: "Danube Imported\nBanana 1 kg", image: "/assets/images/bread.png", oldPrice: "20.00" },
  { title: "Danube Imported\nBanana 1 kg", image: "/assets/images/parsley.png", oldPrice: "20.00" },
];

export const ProductDetailMeat = () => {
  return (
    <>
      <Header />

      <Container>
        <div className="mt-8">
          <Breadcrumb items={["Beverages", "Coffee"]} />
        </div>

        <div className="mx-auto mt-6 flex w-full flex-col gap-6 xl:flex-row xl:items-start xl:gap-4 min-[780px]:max-w-fit min-[1280px]:max-w-none">
          <div className="w-full min-[1420px]:w-auto min-[1420px]:shrink-0">
            <ProductGallery
              thumbnails={[
                "/assets/images/meat-small.png",
                "/assets/images/meat-small.png",
                "/assets/images/meat-small.png",
                "/assets/images/meat-small.png",
                "/assets/images/coffee-jar-small.png",
              ]}
              mainImage="/assets/images/meat-big.png"
            />
          </div>

          <div className="w-full min-[1420px]:flex-1">
            <ProductInfo type="detail-meat" />
          </div>
        </div>

        <ProductAccordion
          nutritionContent={
            <div className="flex justify-center py-6 sm:py-8 md:py-10 lg:py-12">
              <img
                src="/assets/images/nutrition-facts.png"
                alt="Nutrition Facts"
              />
            </div>
          }
        />
      </Container>

      <Container aria-label="Most Popular Products" productSpacing>
        <h2
          id="similar-Products-heading"
          className="text-[24px] font-semibold leading-[100%] text-primary sm:text-[28px] md:text-[32px]"
        >
          Similar Products
        </h2>

        <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              image={product.image}
              oldPrice={product.oldPrice}
            />
          ))}
        </div>
      </Container>

      <Footer />
    </>
  );
};