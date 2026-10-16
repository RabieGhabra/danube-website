/* eslint-disable @next/next/no-img-element */
"use client";
import { assetPath } from "@/lib/asset-path";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import Container from "../ui/container";
import Breadcrumb from "../ui/breadcrumb";
import { ProductCard } from "../products/ProductCard";
import { Button } from "@/components/ui/button";

const productsTop = [
  { title: "Apple iPhone 17 Pro Max Cosmic Orange 512GB", image: assetPath("/assets/images/image-(210).png"), oldPrice: "20.00" },
  { title: "Apple iPhone 17 Pro Max Silver 256GB", image: assetPath("/assets/images/image-(211).png"), oldPrice: "20.00" },
  { title: "Apple iPhone 17 Pro Max Deep Blue 256GB", image: assetPath("/assets/images/image-(212).png"), oldPrice: "20.00" },
];

const productsmiddle = [
  { title: `Rainbow High Fashion Doll Gabriella Icely "Ice"`, image: assetPath("/assets/images/image-(410).png"), oldPrice: "20.00" },
  { title: "B & D Baby Doll Playset", image: assetPath("/assets/images/image-(411).png"), oldPrice: "20.00" },
  { title: "B & D Baby Doll Playset", image: assetPath("/assets/images/image-(412).png"), oldPrice: "20.00" },
];

const productsBottom = [
  { title: "Samsung Crystal UHD QLED 8K TV", image: assetPath("/assets/images/pk-crystal-uhd-cu.png"), oldPrice: "20.00" },
  { title: "Samsung Neo QLED 8K TV", image: assetPath("/assets/images/2023_VD_TVs_All-TV-Categories.png"), oldPrice: "20.00" },
  { title: "Samsung OLED 4K TV 32 inch", image: assetPath("/assets/images/samsung.png"), oldPrice: "20.00" },
];

export const Brochures = () => {
  const changeSlide = (dir: number) => {
    console.log("Slide changed:", dir);
  };

  return (
    <>
      <Header />

      <Container>
        <div className="py-4">
          <Breadcrumb rootLabel="Brochures" rootLink={null} items={["2 Weeks Offer"]} />
        </div>

        {/* TOP PRODUCTS */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 pb-10 items-stretch">
          <div className="h-full">
            <img src={assetPath("/assets/images/brochures.png")} alt="Brochures" className="w-full h-full" />
          </div>

          <div className="w-full">
          <div className="bg-black rounded-[25px] overflow-hidden pt-6">
            <div className="h-50 sm:h-70 md:h-90.5 flex items-end justify-center">
              <img
                src={assetPath("/assets/images/iphone-(17).png")}
                alt=""
                className="max-h-full w-auto object-contain"
              />
            </div>
          </div>
            <h2 className="text-[24px] font-semibold text-primary sm:text-[28px] md:text-[32px] mt-6">Buy Now</h2>

            <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 [@media(min-width:1420px)]:grid-cols-3">
              {productsTop.map((p, i) => (
                <div className="relative" key={i}>
                  {i === 2 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      aria-label="Next"
                      onClick={() => changeSlide(1)}
                      className="absolute -right-3.75 top-1/2 z-50 -translate-y-1/2 cursor-pointer rounded-full p-0 hidden [@media(min-width:1420px)]:flex"
                    >
                      <img alt="" src={assetPath("/assets/icons/Group-78191.png")} />
                    </Button>
                  )}

                  <ProductCard title={p.title} image={p.image} oldPrice={p.oldPrice} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* MIDDLE PRODUCTS */}
      <div className="bg-[#FAFFCF] w-full">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 py-10 items-stretch">
            <div className="h-full">
              <img src={assetPath("/assets/images/brochures-(1).png")} alt="Brochures" className="w-full h-full" />
            </div>

            <div className="w-full">
              <img src={assetPath("/assets/images/Group-2147226548.png")} alt="" className="max-h-full w-auto object-contain" />

              <h2 className="text-[24px] font-semibold text-primary sm:text-[28px] md:text-[32px] mt-6">Buy Now</h2>

              <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 [@media(min-width:1420px)]:grid-cols-3">
                {productsmiddle.map((p, i) => (
                  <div className="relative" key={i}>
                    {i === 2 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        aria-label="Next"
                        onClick={() => changeSlide(1)}
                        className="absolute -right-3.75 top-1/2 z-50 -translate-y-1/2 cursor-pointer rounded-full p-0 hidden [@media(min-width:1420px)]:flex"
                      >
                        <img alt="" src={assetPath("/assets/icons/Group-78191.png")} />
                      </Button>
                    )}

                    <ProductCard title={p.title} image={p.image} oldPrice={p.oldPrice} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* BOTTOM PRODUCTS */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 py-10 items-stretch">
          <div className="h-full">
            <img src={assetPath("/assets/images/brochures.png")} alt="Brochures" className="w-full h-full" />
          </div>

          <div className="w-full">
            <img src={assetPath("/assets/images/image-(226).png")} alt="" className="max-h-full w-auto object-contain" />

            <h2 className="text-[24px] font-semibold text-primary sm:text-[28px] md:text-[32px] mt-6">Buy Now</h2>

            <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 [@media(min-width:1420px)]:grid-cols-3">
              {productsBottom.map((p, i) => (
                <div className="relative" key={i}>
                  {i === 2 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      aria-label="Next"
                      onClick={() => changeSlide(1)}
                      className="absolute -right-3.75 top-1/2 z-50 -translate-y-1/2 cursor-pointer rounded-full p-0 hidden [@media(min-width:1420px)]:flex"
                    >
                      <img alt="" src={assetPath("/assets/icons/Group-78191.png")} />
                    </Button>
                  )}

                  <ProductCard title={p.title} image={p.image} oldPrice={p.oldPrice} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
};
