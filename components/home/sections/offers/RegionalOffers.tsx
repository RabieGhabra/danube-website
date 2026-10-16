"use client";
import { assetPath } from "@/lib/asset-path";
import { OfferImage, OffersGrid } from "@/components/common/OffersGrid";

const homeOffer: OfferImage[] = [
  {
    alt: "Offer 1",
    content: assetPath("/assets/images/Group-2147226157.png"),
    floatingImages: [
      { alt: "Offer 1 item 1", src: assetPath("/assets/images/floating-1-1.png") },
      { alt: "Offer 1 item 2", src: assetPath("/assets/images/floating-1-2.png") },
      { alt: "Offer 1 item 3", src: assetPath("/assets/images/floating-1-3.png") },
    ],
  },
  {
    alt: "Offer 2",
    content: assetPath("/assets/images/Group-2147226159.png"),
    floatingImages: [
      { alt: "Offer 2 item 1", src: assetPath("/assets/images/floating-1-1.png") },
      { alt: "Offer 2 item 2", src: assetPath("/assets/images/floating-2-2.png") },
      { alt: "Offer 2 item 3", src: assetPath("/assets/images/floating-2-3.png") },
    ],
  },
  {
    alt: "Offer 3",
    content: assetPath("/assets/images/Group-2147226160.png"),
    floatingImages: [
      { alt: "Offer 3 item 1", src: assetPath("/assets/images/floating-3-1.png") },
      { alt: "Offer 3 item 2", src: assetPath("/assets/images/floating-3-2.png") },
      { alt: "Offer 3 item 3", src: assetPath("/assets/images/floating-3-3.png") },
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
];

export const RegionalOffers = () => {
  return <OffersGrid offers={homeOffer} showNavigation={true}  />;
};
