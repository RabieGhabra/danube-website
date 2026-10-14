"use client";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import { ProductCard } from "@/components/products/ProductCard";
import Container from "../ui/container";
import { Categories } from "./sections/Categories";
import BakeryCarousel from "./sections/BakeryCarousel";

const PRODUCT_IMAGE = "/assets/images/image-142.png";

const products = [
  { title: "Mekhbaz Artisan\n Sourdough (Classic)", image: PRODUCT_IMAGE, price: "15.00", oldPrice: "20.00" },
  { title: "Mekhbaz Artisan Sourdough (Halloumi & Sundried Tomato)", image: PRODUCT_IMAGE, price: "16.00", oldPrice: "20.00" },
  { title: "Mekhbaz Artisan Sourdough (Olive & Zattar)", image: PRODUCT_IMAGE, price: "13.00", oldPrice: "20.00" },
  { title: "Mekhbaz Artisan\n Sourdough (Sesame", image: PRODUCT_IMAGE, price: "15.00", oldPrice: "20.00" },
  { title: "Mekhbaz Artisan Sourdough (Olive & Zattar)", image: PRODUCT_IMAGE, price: "13.00", oldPrice: "20.00" },
];

const ProductGrid = () => (
  <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 [&_h3]:text-[15px] [&_h3]:font-semibold">
    {products.map((product, index) => (
      <ProductCard
        key={index}
        title={product.title}
        image={product.image}
        price={product.price}
        oldPrice={product.oldPrice}
      />
    ))}
  </div>
);

export const Bakery = () => {
  return (
    <>
      <Header
        showNavigation={false}
        showAllDepartments={false}
        background="bakery"
      />
              <BakeryCarousel />
      <Container aria-label="Most Popular Products" productSpacing>

        <Categories />
        <h2
          id="similar-Products-heading"
          className="text-[24px] font-semibold leading-[100%] text-[#A55B27] sm:text-[28px] md:text-[32px]"
        >
          Bread
        </h2>
        <ProductGrid />
        <ProductGrid />
      </Container>

      <Footer />
    </>
  );
};
