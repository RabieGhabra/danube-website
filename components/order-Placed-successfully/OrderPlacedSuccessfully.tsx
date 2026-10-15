/* eslint-disable @next/next/no-img-element */
"use client";
import { Address } from "../common/Address";
import { OrderSummary } from "../common/OrderSummary";
import { PaymentMethod } from "../common/PaymentMethod";
import { Footer } from "../layout/Footer";
import Container from "../ui/container";
import { CartItems } from "./sections/CartItems";
import SupportBanner from "./sections/SupportBanner";
import TimeSlot from "./sections/TimeSlot";
import OrderStatus from "./sections/OrderStatus";
import { Copy } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export type CartItem = {
  id: number;
  title: string;
  image: string;
  price: string;
  oldPrice: string;
  qty: number;
};

const cartItems: CartItem[] = [
  { id: 1, title: "Danube Imported\n Banana 1kg", image: "/danube-website/assets/images/banana.png", price: "26.00", oldPrice: "30.00", qty: 1 },
  { id: 2, title: "Danube Beef\n Slice Thin Steak", image: "/danube-website/assets/images/beef.png", price: "26.00", oldPrice: "30.00", qty: 1 },
  { id: 3, title: "Danube Cucumber\n (Tray) 900g", image: "/danube-website/assets/images/cucumber.png", price: "26.00", oldPrice: "30.00",qty: 1 },
  { id: 4, title: "Danube Tomato\n 1kg", image: "/danube-website/assets/images/tomato.png", price: "26.00", oldPrice: "30.00", qty: 1 },
  { id: 5, title: "Danube Potatoes\n Baladi (Bag) 1.8kg", image: "/danube-website/assets/images/potatoes.png", price: "26.00", oldPrice: "30.00", qty: 1 },
];

export const OrderPlacedSuccessfully = () => {
  return (
    <>
      <div className="mb-20 w-full">
        {/* Main Header */}
        <div className="relative z-10 flex min-h-55 items-center justify-between overflow-visible rounded-b-[2.5rem] bg-linear-to-r from-[#eefd7d] via-[#bdf08d] to-[#8ce99a] px-5 py-8 shadow-sm max-[280px]:flex-col max-[280px]:items-start max-[280px]:gap-0 sm:px-7 sm:py-10 md:p-12">
          {/* Left Section */}
          <div className="z-10 flex min-w-0 flex-1 flex-col">
            <h2 className="text-[clamp(22px,6vw,44px)] font-medium leading-tight text-gray-900">
              Order Placed
            </h2>

            <span className="text-[clamp(26px,7vw,52px)] font-bold leading-tight text-gray-900">
              Successfully
            </span>
          </div>

          <div className="z-10 ml-3 flex shrink-0 min-[340px]:ml-4 max-[280px]:-mt-2 max-[280px]:ml-0 max-[280px]:w-full max-[280px]:justify-start">
            <img
              src="/danube-website/assets/images/order-success.png"
              alt="Order Success"
              className="h-auto w-14 object-contain sm:w-16 md:w-20 lg:w-28 xl:w-32"
            />
          </div>

          {/* Order ID */}
          <div className="absolute bottom-0 left-5 z-20 translate-y-1/2 sm:left-7 md:left-12">
            <Badge className="flex items-center gap-1.5 rounded-xl border border-gray-200 bg-gray-100 px-2.5 py-1.5 shadow-sm sm:gap-2 sm:px-4 sm:py-2">
              <span className="whitespace-nowrap text-[clamp(11px,2.5vw,20px)] font-semibold leading-5.5 tracking-[-0.41px] text-gray-500">
                Order-ID:
              </span>

              <span className="whitespace-nowrap text-[clamp(12px,2.8vw,24px)] font-semibold leading-5.5 tracking-[-0.41px] text-primary">
                #uyu-209
              </span>

              <Button
                type="button"
                onClick={() => navigator.clipboard.writeText("#uyu-209")}
                className="cursor-pointer h-auto w-auto shrink-0 bg-transparent p-0 text-gray-500 shadow-none"
              >
                <Copy className="h-3.5 w-3.5 sm:h-4.5 sm:w-4.5" />
              </Button>
            </Badge>
          </div>
        </div>
      </div>
      <Container>
        <div className="mt-6 grid min-w-0 grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_400px]">
          {/* LEFT COLUMN */}
          <div className="min-w-0 space-y-6">
            <OrderStatus />
            <CartItems items={cartItems} updateQty={() => {}} />
            <Address showChange={false} />
            <TimeSlot />
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex min-w-0 flex-col gap-4">
            <PaymentMethod showChange={false} />
            <OrderSummary showCheckoutButton={false} />
            <SupportBanner />
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
};
