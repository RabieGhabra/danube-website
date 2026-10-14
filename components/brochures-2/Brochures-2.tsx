/* eslint-disable @next/next/no-img-element */
"use client";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import Container from "../ui/container";
import Breadcrumb from "../ui/breadcrumb";
import { ProductCard } from "../products/ProductCard";

const productsTop = [
  { title: "Apple iPhone 17 Pro Max Cosmic Orange 512GB", image: "/assets/images/image-(210).png", oldPrice: "20.00" },
  {title: "Apple iPhone 17 Pro Max\n Silver 256GB", image: "/assets/images/image-(211).png", oldPrice: "20.00" },
  { title: "Apple iPhone 17 Pro Max\n Deep Blue 256GB", image: "/assets/images/image-(212).png", oldPrice: "20.00" },
  { title: "Impex 50 Inch QLED Smart LED TV", image: "/assets/images/image-(213).png", oldPrice: "20.00" },
  { title: "Impex 43 Inch QLED Smart LED TV evoQ", image: "/assets/images/image-(214).png", oldPrice: "20.00"},

  
  { title: "Hip Shot Toys Lock & Load\n 2.0 Blaster", image: "/assets/images/image-(310).png", oldPrice: "20.00" },
  {title: "Hip Shot Toys Falcon Clip Blaster", image: "/assets/images/image-(311).png", oldPrice: "20.00" },
  { title: "Hip Shot Toys Bullet Crusher Blaster", image: "/assets/images/image-(312).png", oldPrice: "20.00" },
  { title: "Hasbro Connect 4 Shots Space Jam A New", image: "/assets/images/image-(313).png", oldPrice: "20.00" },
  {title: "Marvel Spider Man Swift Web Shot", image: "/assets/images/image-(314).png", oldPrice: "20.00" },
];

const productsBottom = [
  { title: `Rainbow High Fashion Doll Gabriella Icely "Ice"`, image: "/assets/images/image-(410).png", oldPrice: "20.00" },
  {title: "B & D Baby Doll Playset", image: "/assets/images/image-(411).png", oldPrice: "20.00" },
  { title: "B & D Baby Doll Playset", image: "/assets/images/image-(412).png", oldPrice: "20.00" },
  { title: "B & D Baby Doll Playset", image: "/assets/images/image-(413).png", oldPrice: "20.00" },
  { title: "B & D My Sweet Doll Playset 12 inch", image: "/assets/images/image-(414).png", oldPrice: "20.00"},

  
  { title: "Science4You Space Space Exploration Adventure Kit", image: "/assets/images/image-(300).png", oldPrice: "20.00" },
  {title: "Hip Shot Toys Falcon Clip Blaster", image: "/assets/images/image-(311).png", oldPrice: "20.00" },
  { title: "Hip Shot Toys Bullet Crusher Blaster", image: "/assets/images/image-(312).png", oldPrice: "20.00" },
  { title: "Hasbro Connect 4 Shots Space Jam A New", image: "/assets/images/image-(313).png", oldPrice: "20.00" },
  {title: "Marvel Spider Man Swift Web Shot", image: "/assets/images/image-(314).png", oldPrice: "20.00" },
];

export const Brochures = () => {
  return (
    <>
      <Header />

      <Container>
        <div className="py-4">
          <Breadcrumb rootLabel="Brochures" rootLink={null} items={["2 Weeks Offer"]} />
        </div>

        {/* First Brochure */}
        <img
          src="/assets/images/brochures.png"
          alt="Brochures"
          className="pb-4 sm:pb-6 md:pb-8 lg:pb-10 w-full h-auto object-cover"
        />

        <h2
          id="products-for-you-heading"
          className="text-[24px] font-semibold leading-[100%] text-primary sm:text-[28px] md:text-[32px]"
        >
          Buy Now
        </h2>

        <div className="mt-5 pb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 [&_h3]:text-[16px] [&_img]:max-w-50 [&_img]:mx-auto">
          {productsTop.map((p, i) => (
            <ProductCard key={i} title={p.title} image={p.image} oldPrice={p.oldPrice} />
          ))}
        </div>

        {/* Second Brochure */}
        <img
          src="/assets/images/brochures-(1).png"
          alt="Brochures"
          className="pb-4 sm:pb-6 md:pb-8 lg:pb-10 w-full h-auto object-cover"
        />

        <h2
          id="products-for-you-heading"
          className="text-[24px] font-semibold leading-[100%] text-primary sm:text-[28px] md:text-[32px]"
        >
          Buy Now
        </h2>

        <div className="mt-5 pb-4 sm:pb-6 md:pb-10 lg:pb-18 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 [&_h3]:text-[16px] [&_img]:max-w-50 [&_img]:mx-auto">
          {productsBottom.map((p, i) => (
            <ProductCard key={i} title={p.title} image={p.image} oldPrice={p.oldPrice} />
          ))}
        </div>
      </Container>

      <Footer />
    </>
  );
};
