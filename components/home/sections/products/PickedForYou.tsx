import { assetPath } from "@/lib/asset-path";
import Container from "@/components/ui/container";
import { ProductCard } from "@/components/products/ProductCard";

const products = [
  { title: "Al-Watania Poultry\nMedium-Large...", image: assetPath("/assets/images/eggs.png") },
  { title: "Kinza Cola\nCarbonated Drink", image: assetPath("/assets/images/Kinza.png") },
  { title: "Danube Tomato\n1kg", image: assetPath("/assets/images/tomato.png") },
  { title: "Danube Imported\nBanana 1 kg", image: assetPath("/assets/images/bread.png") },
  { title: "Danube Imported\nBanana 1 kg", image: assetPath("/assets/images/parsley.png") },
];

export const PickedForYou = () => {
  return (
    <Container aria-label="Picked For You" productSpacing>
      <h2
        id="picked-for-you-heading"
        className="text-[24px] font-semibold leading-[100%] text-primary sm:text-[28px] md:text-[32px]"
      >
        Picked For You
      </h2>

      <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((p, i) => (
          <ProductCard key={i} title={p.title} image={p.image} />
        ))}
      </div>
    </Container>
  );
};