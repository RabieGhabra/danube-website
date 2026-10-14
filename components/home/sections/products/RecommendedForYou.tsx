import Image from "next/image";
import Container from "@/components/ui/container";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";

const products = [
  { title: "Danube Imported\nBanana 1 kg", image: "/assets/images/banana.png" },
  { title: "Danube Cucumber\n(Tray) 900g", image: "/assets/images/cucumber.png" },
  { title: "Danube Tomato\n1kg", image: "/assets/images/tomato.png" },
  { title: "Danube Imported\nBanana 1 kg", image: "/assets/images/bread.png" },
  { title: "Danube Imported\nBanana 1 kg", image: "/assets/images/parsley.png" },
];

export const RecommendedForYou = () => {
  return (
    <Container aria-label="Recommended for you" productSpacing>
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <h2
          id="recommended-for-you-heading"
          className="text-[24px] font-semibold leading-[100%] text-primary sm:text-[28px] md:text-[32px]"
        >
          Recommended for you
        </h2>

        <Button
          type="button"
          variant="ghost"
          className="h-auto gap-3 p-0 font-semibold text-black"
        >
          See all
          <Image
            src="/assets/icons/see-all.png"
            alt=""
            width={42}
            height={42}
            className="cursor-pointer"
          />
        </Button>
      </div>

      {/* Products */}
      <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((p, i) => (
          <ProductCard key={i} title={p.title} image={p.image} />
        ))}
      </div>
    </Container>
  );
};