/* eslint-disable @next/next/no-img-element */
"use client";
import Container from "../../ui/container";
import { Button } from "@/components/ui/button";

const images = {
  delivery: "/danube-website/assets/icons/delivery.png",
  minOrder: "/danube-website/assets/icons/min-order.png",
  charity: "/danube-website/assets/icons/charity.png",
  customer: "/danube-website/assets/icons/customer.png",
  promotions: "/danube-website/assets/icons/promotions.png",
  prices: "/danube-website/assets/icons/prices.png",
  num1: "/danube-website/assets/images/1.png",
  num2: "/danube-website/assets/images/2.png",
  num3: "/danube-website/assets/images/3.png",
  num4: "/danube-website/assets/images/4.png",
  num5: "/danube-website/assets/images/5.png",
};

const benefits = [
  {
    num: "1",
    icon: images.minOrder,
    title: "No minimum\norder value",
    numImg: images.num1,
    numClass: "h-20 sm:h-28",
  },
  {
    num: "2",
    icon: images.charity,
    title: "Donation to charity",
    numImg: images.num2,
    numClass: "h-14 sm:h-20",
  },
  {
    num: "3",
    icon: images.customer,
    title: "Dedicated customer service",
    numImg: images.num3,
    numClass: "h-14 sm:h-20",
  },
  {
    num: "4",
    icon: images.promotions,
    title:
      "Exclusive promotions with the lowest prices only available for subscribers.",
    numImg: images.num4,
    numClass: "h-14 sm:h-20",
  },
  {
    num: "5",
    icon: images.prices,
    title:
      "Exclusive promotions with the\nlowest prices only\navailable for subscribers.",
    numImg: images.num5,
    numClass: "h-20 sm:h-28",
  },
];

export const BenefitsSubscribe = () => {
  return (
    <Container>
      <div className="my-4 w-full sm:my-8">
        <h2 className="mb-4 text-xl font-bold text-primary sm:text-3xl">
          Benefits
        </h2>

        <div className="grid grid-cols-1 gap-x-10 gap-y-8 pl-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-x-10 xl:pl-0">
          {/* Enjoy Free Delivery */}
          <div
            className="flex min-h-31 w-full items-center gap-4 rounded-xl px-4 py-4 pl-8 sm:pl-12"
            style={{
              background:
                "linear-gradient(102.46deg, #FFFB91 -1.62%, #97E080 69.72%, #FFE7B2 129.7%)",
            }}
          >
            <img
              src={images.delivery}
              alt="Delivery"
              className="h-10 w-10 shrink-0 object-contain"
            />
            <span className="text-[18px] font-medium leading-[1.2] tracking-[-0.41px] text-primary">
              Enjoy Free Delivery
            </span>
          </div>

          {/* Benefits 1 - 5 */}
          {benefits.map((b) => (
            <div
              key={b.num}
              className={`
                relative flex min-h-31 items-center overflow-visible rounded-xl px-4 py-4 pl-14 sm:pl-20
                ${b.num === "4" ? "xl:ml-8 xl:w-95" : ""}
                ${b.num === "5" ? "xl:ml-32.5 xl:w-123.75 xl:min-w-123.75" : ""}
                ${b.num === "4" || b.num === "5" ? "xl:items-start xl:pt-6" : ""}
              `}
              style={{ background: "#F2F3F7" }}
            >
              <img
                src={b.numImg}
                alt={b.num}
                className={`absolute -left-5.5 top-1/2 w-auto -translate-y-1/2 object-contain sm:-left-7 ${b.numClass}`}
              />

              <img
                src={b.icon}
                alt=""
                className="mr-3 h-8 w-8 shrink-0 object-contain sm:h-10 sm:w-10"
              />

              <span
                className={`
                  text-[16px] font-medium leading-[1.2] tracking-[-0.41px] text-primary sm:text-[18px]
                  wrap-break-word
                  ${b.num === "1" || b.num === "5" ? "xl:whitespace-pre-line" : ""}
                `}
              >
                {b.num === "2" ? (
                  <>
                    <span className="xl:block xl:mb-1">Donation to</span>
                    <span className="xl:block">charity</span>
                  </>
                ) : (
                  b.title
                )}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Subscribe Now */}
      <div className="mt-8 pb-8 sm:mt-10 sm:pb-12 md:mt-12 md:pb-16">
        <Button
          className="h-16 w-full rounded-3xl sm:h-19 md:h-21 lg:h-23.5"
          style={{ background: "#97E080" }}
        >
          <span className="cursor-pointer text-[18px] font-semibold leading-5.5 tracking-[-0.41px] text-primary sm:text-[20px] md:text-[22px] lg:text-[24px]">
            Subscribe Now
          </span>
        </Button>
      </div>
    </Container>
  );
};
