"use client";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import { SubscribeSave } from "./sections/SubscribeSave";
import { DidYouKnow } from "./sections/DidYouKnow";
import { BenefitsSubscribe } from "./sections/BenefitsSubscribe";

export const Subscription = () => {

  return (
    <>
      <Header />
      <SubscribeSave />
      <DidYouKnow/>
      <BenefitsSubscribe/>
      <Footer />
    </>
  );
};
