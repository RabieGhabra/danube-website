/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import Breadcrumb from "../ui/breadcrumb";
import Container from "../ui/container";
import { CartItems } from "./sections/CartItems";
import { Address } from "../common/Address";
import { FreeSample } from "./sections/FreeSample";
import { Vouchers } from "./sections/Vouchers";
import { TimeSlot } from "./sections/TimeSlot";
import { LastMinuteBuy } from "./sections/LastMinuteBuy";
import { Discounts } from "./sections/Discounts";
import { RiderInstructions } from "./sections/RiderInstructions";
import { PaymentMethod } from "../common/PaymentMethod";
import { OrderSummary } from "../common/OrderSummary";

export type CartItem = {
  id: number;
  title: string;
  image: string;
  price: string;
  oldPrice: string;
  qty: number;
};

const cartItems: CartItem[] = [
  { id: 1, title: "Danube Imported Banana 1kg", image: "/assets/images/banana.png", price: "26.00", oldPrice: "30.00", qty: 1 },
  { id: 2, title: "Danube Beef\n Slice Thin Steak", image: "/assets/images/beef.png", price: "26.00", oldPrice: "30.00", qty: 1 },
  { id: 3, title: "Danube Cucumber (Tray) 900g", image: "/assets/images/cucumber.png", price: "26.00", oldPrice: "30.00", qty: 1 },
  { id: 4, title: "Danube Tomato\n 1kg", image: "/assets/images/tomato.png", price: "26.00", oldPrice: "30.00", qty: 1 },
  { id: 5, title: "Danube Potatoes Baladi (Bag) 1.8kg", image: "/assets/images/potatoes.png", price: "26.00", oldPrice: "30.00",qty: 1 },
];

const lastMinuteItems: CartItem[] = [
  { id: 6, title: "Afia Black Lemon\n Dried 200g", image: "/assets/images/lemon.png", price: "26.00", oldPrice: "30.00", qty: 1 },
  { id: 7, title: "Alyoum Cooky\n Chicken Flatt with...", image: "/assets/images/chicken.png", price: "26.00", oldPrice: "30.00", qty: 1},
  { id: 8, title: "Alpro Barista Coconut\n Milk 1L", image: "/assets/images/milk.png", price: "26.00", oldPrice: "30.00", qty: 1 },
  { id: 9, title: "Chocolate Swiss\n Roll Cake", image: "/assets/images/cake.png", price: "26.00", oldPrice: "30.00", qty: 1,},
  { id: 10, title: "Danube Bakery Popcorn Dukka Sour & Sweet 260g", image: "/assets/images/popcorn.png", price: "26.00", oldPrice: "30.00", qty: 1 },
];

export const Checkout = () => {
  const [items, setItems] = useState<CartItem[]>(cartItems);
  const [lastItems, setLastItems] = useState<CartItem[]>(lastMinuteItems);

  const updateQty = (
    setList: React.Dispatch<React.SetStateAction<CartItem[]>>,
    id: number,
    delta: number,
  ) => {
    setList((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: Math.max(1, item.qty + delta),
            }
          : item,
      ),
    );
  };

  return (
    <>
      <Header />

      <Container>
        {/* Breadcrumb */}
        <div className="mt-8">
          <Breadcrumb items={["Checkout"]} />
        </div>

        {/* Main */}
        <div className="mt-6 grid min-w-0 grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_400px]">
          {/* LEFT COLUMN */}
          <div className="min-w-0 space-y-6">
            {/* Free Shipping */}
            <div className="h-23.5 max-w-full rounded-2xl bg-black p-4 font-sans shadow-md">
              <div className="mb-3 text-left text-sm font-semibold text-[#97E080]">
                You’ve unlocked free shipping
              </div>

              <div className="relative h-2 w-full rounded-full bg-[#97E080]">
                <div className="absolute -right-1 -top-1.75 flex h-7 w-7 items-center justify-center rounded-full bg-[#97E080] p-[1.5px]">
                  <div className="flex h-full w-full items-center justify-center rounded-full border-2 border-black">
                    <img
                      src="/assets/icons/Group-76926.png"
                      alt="Free shipping"
                      className="h-[10.46px] w-[10.55px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <Address />
            <CartItems
              items={items}
              updateQty={(id, delta) => updateQty(setItems, id, delta)}
            />
            <FreeSample />
            <Vouchers />
            <TimeSlot />
            <LastMinuteBuy
              items={lastItems}
              updateQty={(id, delta) => updateQty(setLastItems, id, delta)}
            />
            <Discounts />
            <RiderInstructions />
          </div>

          {/* RIGHT COLUMN */}
          <div className="min-w-0 flex flex-col gap-4">
            <PaymentMethod />
            <OrderSummary />
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
};
