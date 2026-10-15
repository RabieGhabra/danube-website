"use client";
import { assetPath } from "@/lib/asset-path";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import { ProductCard } from "@/components/products/ProductCard";
import Container from "@/components/ui/container";
import Breadcrumb from "@/components/ui/breadcrumb";
import ProductGallery from "../products/ProductGallery";
import ProductInfo from "../products/ProductInfo";
import ProductAccordion from "../products/ProductAccordion";

const products = [
  { title: "Danube Imported\nBanana 1 kg", image: assetPath("/assets/images/banana.png"), oldPrice: "20.00" },
  { title: "Danube Cucumber\n(Tray) 900g", image: assetPath("/assets/images/cucumber.png"), oldPrice: "20.00" },
  { title: "Danube Tomato\n1kg", image: assetPath("/assets/images/tomato.png"), oldPrice: "20.00" },
  { title: "Danube Imported\nBanana 1 kg", image: assetPath("/assets/images/bread.png"), oldPrice: "20.00" },
  { title: "Danube Imported\nBanana 1 kg", image: assetPath("/assets/images/parsley.png"), oldPrice: "20.00" },
];

export const ProductDetail = () => {
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
                assetPath("/assets/images/coffee-jar-small.png"),
                assetPath("/assets/images/coffee-jar-small.png"),
                assetPath("/assets/images/coffee-jar-small.png"),
                assetPath("/assets/images/coffee-jar-small.png"),
                assetPath("/assets/images/coffee-jar-small.png"),
              ]}
              mainImage={assetPath("/assets/images/coffee-jar-big.png")}
            />
          </div>

          <div className="w-full min-[1420px]:flex-1">
            <ProductInfo type="detail" />
          </div>
        </div>

        <ProductAccordion
          nutritionContent={
            <div className="flex w-full justify-center px-0 py-6 sm:px-2 sm:py-8 md:py-10 lg:py-12">
              <div className="w-full max-w-191.5 overflow-hidden rounded-lg border border-solid border-black bg-white">
                <div
                  className="flex flex-wrap items-baseline gap-x-2 gap-y-1 border-b border-solid border-black px-4 py-4 text-left sm:px-6"
                  style={{
                    background:
                      "linear-gradient(0deg, #121212, #121212), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
                  }}
                >
                  <span className="text-[20px] font-semibold leading-5.5 tracking-[-0.41px] text-[#97E080] sm:text-[24px]">
                    Nutritional Value
                  </span>

                  <span className="text-[16px] font-medium leading-5.5 tracking-[-0.41px] text-[#84899D] sm:text-[18px]">
                    (per 100g)
                  </span>
                </div>

                <table className="w-full border-collapse text-left">
                  <tbody>
                    <tr className="border-b border-solid border-black">
                      <td className="w-1/2 px-4 py-3 text-[14px] font-semibold leading-[100%] text-primary sm:px-6 sm:py-4 sm:text-[16px]">
                        Calories
                      </td>
                      <td className="w-1/2 px-4 py-3 text-right text-[14px] font-semibold leading-[100%] text-primary sm:px-6 sm:py-4 sm:text-[16px]">
                        114 kcal
                      </td>
                    </tr>

                    <tr className="border-b border-solid border-black">
                      <td className="px-4 py-3 text-[14px] font-semibold leading-[100%] text-primary sm:px-6 sm:py-4 sm:text-[16px]">
                        Carbohydrates
                      </td>
                      <td className="px-4 py-3 text-right text-[14px] font-semibold leading-[100%] text-primary sm:px-6 sm:py-4 sm:text-[16px]">
                        5.0 g
                      </td>
                    </tr>

                    <tr className="border-b border-solid border-black">
                      <td className="px-4 py-3 text-[14px] font-semibold leading-[100%] text-primary sm:px-6 sm:py-4 sm:text-[16px]">
                        Fat
                      </td>
                      <td className="px-4 py-3 text-right text-[14px] font-semibold leading-[100%] text-primary sm:px-6 sm:py-4 sm:text-[16px]">
                        8.0 g
                      </td>
                    </tr>

                    <tr className="border-b border-solid border-black">
                      <td className="px-4 py-3 text-[14px] font-semibold leading-[100%] text-primary sm:px-6 sm:py-4 sm:text-[16px]">
                        Protein
                      </td>
                      <td className="px-4 py-3 text-right text-[14px] font-semibold leading-[100%] text-primary sm:px-6 sm:py-4 sm:text-[16px]">
                        5.5 g
                      </td>
                    </tr>

                    <tr className="border-b border-solid border-black">
                      <td className="px-4 py-3 text-[14px] font-semibold leading-[100%] text-primary sm:px-6 sm:py-4 sm:text-[16px]">
                        Vitamin A
                      </td>
                      <td className="px-4 py-3 text-right text-[14px] font-semibold leading-[100%] text-primary sm:px-6 sm:py-4 sm:text-[16px]">
                        Max 2000 IU/L
                      </td>
                    </tr>

                    <tr className="border-b border-solid border-black">
                      <td className="px-4 py-3 text-[14px] font-semibold leading-[100%] text-primary sm:px-6 sm:py-4 sm:text-[16px]">
                        Vitamin D
                      </td>
                      <td className="px-4 py-3 text-right text-[14px] font-semibold leading-[100%] text-primary sm:px-6 sm:py-4 sm:text-[16px]">
                        Max 400 IU/L
                      </td>
                    </tr>

                    <tr className="border-b border-solid border-black">
                      <td className="px-4 py-3 text-[14px] font-semibold leading-[100%] text-primary sm:px-6 sm:py-4 sm:text-[16px]">
                        Calcium
                      </td>
                      <td className="px-4 py-3 text-right text-[14px] font-semibold leading-[100%] text-primary sm:px-6 sm:py-4 sm:text-[16px]">
                        115 mg
                      </td>
                    </tr>

                    <tr>
                      <td className="px-4 py-3 text-[14px] font-semibold leading-[100%] text-primary sm:px-6 sm:py-4 sm:text-[16px]">
                        Salt
                      </td>
                      <td className="px-4 py-3 text-right text-[14px] font-semibold leading-[100%] text-primary sm:px-6 sm:py-4 sm:text-[16px]">
                        0.10 g
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
