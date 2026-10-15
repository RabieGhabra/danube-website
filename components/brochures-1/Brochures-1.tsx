/* eslint-disable @next/next/no-img-element */
"use client";
import { assetPath } from "@/lib/asset-path";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import { Badge } from "../ui/badge";
import Container from "../ui/container";
import { OfferImage, OffersGrid } from "../common/OffersGrid";

const brochuresOffers: OfferImage[] = [
  {
    alt: "Offer 1",
    content: assetPath("/assets/images/Group-2147226157.png"),
    floatingImages: [
      { alt: "Offer 1 Item 1", src: assetPath("/assets/images/floating-1-1.png") },
      { alt: "Offer 1 Item 2", src: assetPath("/assets/images/floating-1-2.png") },
      { alt: "Offer 1 Item 3", src: assetPath("/assets/images/floating-1-3.png") },
    ],
  },
  {
    alt: "Offer 2",
    content: assetPath("/assets/images/Group-2147226159.png"),
    floatingImages: [
      { alt: "Offer 2 Item 1", src: assetPath("/assets/images/floating-1-1.png") },
      { alt: "Offer 2 Item 2", src: assetPath("/assets/images/floating-2-2.png") },
      { alt: "Offer 2 Item 3", src: assetPath("/assets/images/floating-2-3.png") },
    ],
  },
  {
    alt: "Offer 3",
    content: assetPath("/assets/images/Group-2147226160.png"),
    floatingImages: [
      { alt: "Offer 3 Item 1", src: assetPath("/assets/images/floating-3-1.png") },
      { alt: "Offer 3 Item 2", src: assetPath("/assets/images/floating-3-2.png") },
      { alt: "Offer 3 Item 3", src: assetPath("/assets/images/floating-3-3.png") },
    ],
  },
  {
    alt: "Offer 4",
    content: assetPath("/assets/images/Group-2147226163.png"),
    floatingImages: [
      { alt: "Offer 4 item 1", src: assetPath("/assets/images/floating-4-1.png") },
      { alt: "Offer 4 item 2", src: assetPath("/assets/images/floating-4-2.png") },
      { alt: "Offer 4 item 3", src: assetPath("/assets/images/floating-4-3.png") },
    ],
  },
  {
    alt: "Offer 5",
    content: assetPath("/assets/images/Group-2147226164.png"),
    floatingImages: [
      { alt: "Offer 5 item 1", src: assetPath("/assets/images/floating-5-1.png") },
      { alt: "Offer 5 item 2", src: assetPath("/assets/images/floating-5-2.png") },
      { alt: "Offer 5 item 3", src: assetPath("/assets/images/floating-5-3.png") },
    ],
  },
  {
    alt: "Offer 6",
    content: assetPath("/assets/images/Group-2147226157.png"),
    floatingImages: [
      { alt: "Offer 6 item 1", src: assetPath("/assets/images/floating-1-1.png") },
      { alt: "Offer 6 item 2", src: assetPath("/assets/images/floating-1-2.png") },
      { alt: "Offer 6 item 3", src: assetPath("/assets/images/floating-1-3.png") },
    ],
  },
  {
    alt: "Offer 7",
    content: assetPath("/assets/images/Group-2147226159.png"),
    floatingImages: [
      { alt: "Offer 7 Item 1", src: assetPath("/assets/images/floating-1-1.png") },
      { alt: "Offer 7 Item 2", src: assetPath("/assets/images/floating-2-2.png") },
      { alt: "Offer 7 Item 3", src: assetPath("/assets/images/floating-2-3.png") },
    ],
  },
  {
    alt: "Offer 8",
    content: assetPath("/assets/images/Group-2147226160.png"),
    floatingImages: [
      { alt: "Offer 8 Item 1", src: assetPath("/assets/images/floating-3-1.png") },
      { alt: "Offer 8 Item 2", src: assetPath("/assets/images/floating-3-2.png") },
      { alt: "Offer 8 Item 3", src: assetPath("/assets/images/floating-3-3.png") },
    ],
  },
  {
    alt: "Offer 9",
    content: assetPath("/assets/images/Group-2147226163.png"),
    floatingImages: [
      { alt: "Offer 9 item 1", src: assetPath("/assets/images/floating-4-1.png") },
      { alt: "Offer 9 item 2", src: assetPath("/assets/images/floating-4-2.png") },
      { alt: "Offer 9 item 3", src: assetPath("/assets/images/floating-4-3.png") },
    ],
  },
  {
    alt: "Offer 10",
    content: assetPath("/assets/images/Group-2147226164.png"),
    floatingImages: [
      { alt: "Offer 10 item 1", src: assetPath("/assets/images/floating-5-1.png") },
      { alt: "Offer 10 item 2", src: assetPath("/assets/images/floating-5-2.png") },
      { alt: "Offer 10 item 3", src: assetPath("/assets/images/floating-5-3.png") },
    ],
  },
  {
    alt: "Offer 11",
    content: assetPath("/assets/images/Group-2147226165.png"),
    highlight: true,
    floatingSize: 1,
    floatingOffset: 20,
    floatingImages: [
      { alt: "Offer 11 item 1", src: assetPath("/assets/images/floating-6-1.png") },
      { alt: "Offer 11 item 2", src: assetPath("/assets/images/floating-6-2.png") },
      { alt: "Offer 11 item 3", src: assetPath("/assets/images/floating-6-3.png") },
    ],
  },
  {
    alt: "Offer 12",
    content: assetPath("/assets/images/Group-2147226166.png"),
    highlight: true,
    floatingSize: 1.2,
    floatingOffset: 8,
    floatingImages: [
      { alt: "Offer 12 item 1", src: assetPath("/assets/images/floating-7-1.png") },
      { alt: "Offer 12 item 2", src: assetPath("/assets/images/floating-7-2.png") },
      { alt: "Offer 12 item 3", src: assetPath("/assets/images/floating-7-3.png") },
    ],
  },
  {
    alt: "Offer 13",
    content: assetPath("/assets/images/Group-2147226158.png"),
    floatingSize: 1.1,
    floatingOffset: 18,
    floatingImages: [
      { alt: "Offer 13 Item 1", src: assetPath("/assets/images/floating-1-1.png") },
      { alt: "Offer 13 Item 2", src: assetPath("/assets/images/makkah-offers.png") },
      { alt: "Offer 13 Item 3", src: assetPath("/assets/images/floating-2-3.png") },
    ],
  },
  {
    alt: "Offer 14",
    content: assetPath("/assets/images/Group-2147226161.png"),
    floatingOffset: 14,
    floatingImages: [
      { alt: "Offer 14 Item 1", src: assetPath("/assets/images/floating-1-1.png") },
      { alt: "Offer 14 Item 2", src: assetPath("/assets/images/makkah-offers-(1).png") },
      { alt: "Offer 14 Item 3", src: assetPath("/assets/images/floating-2-3.png") },
    ],
  },
  {
    alt: "Offer 15",
    content: assetPath("/assets/images/Group-2147226162.png"),
    floatingOffset: 14,
    floatingImages: [
      { alt: "Offer 15 Item 1", src: assetPath("/assets/images/floating-1-1.png") },
      { alt: "Offer 15 Item 2", src: assetPath("/assets/images/makkah-offers-(2).png") },
      { alt: "Offer 15 Item 3", src: assetPath("/assets/images/floating-2-3.png") },
    ],
  },
    {
    alt: "Offer 16",
    content: assetPath("/assets/images/Group-2147226167.png"),
    highlight: true,
    floatingOffset: 10,
    floatingImages: [
      { alt: "Offer 16 Item 1", src: assetPath("/assets/images/floating-16-1.png") },
      { alt: "Offer 16 Item 2", src: assetPath("/assets/images/floating-16-2.png") },
      { alt: "Offer 16 Item 3", src: assetPath("/assets/images/floating-16-3.png") },
    ],
  },
];

export const Brochures = () => {
  return (
    <>
      <Header />

      <Container className="pt-4 pb-0 ">
        <Badge className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#FAFFCF] px-4 py-2.5 text-[15px] font-semibold text-primary">
          <img
            src={assetPath("/assets/icons/offer-icon.png")}
            alt="Offer"
            className="h-5 w-5 shrink-0"
          />
          Select your region and start browsing our weekly deals to shop from
          your nearest store.
        </Badge>
      </Container>

      <OffersGrid
        offers={brochuresOffers}
        className="mb-8 sm:mb-10 md:mb-12 lg:mb-18"
      />

      <Footer />
    </>
  );
};
