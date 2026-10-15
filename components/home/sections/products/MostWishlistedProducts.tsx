import Container from "@/components/ui/container";
import { ProductCard } from "@/components/products/ProductCard";

const products = [
  { title: "Al-Watania Poultry\nMedium-Large...", image: "/danube-website/assets/images/blueberry.png" },
  { title: "Kinza Cola\nCarbonated Drink", image: "/danube-website/assets/images/Chips.png" },
  { title: "Danube Tomato\n1kg", image: "/danube-website/assets/images/banana(2).png" },
  { title: "Danube Imported\nBanana 1 kg", image: "/danube-website/assets/images/fresh-cream.png" },
  { title: "Danube Imported\nBanana 1 kg", image: "/danube-website/assets/images/Kinza.png" },
];

export const MostWishlistedProducts = () => {
  return (
    <Container aria-label="Most Wishlisted" productSpacing>
      <h2
        id="most-wishlisted-heading"
        className="text-[24px] font-semibold leading-[100%] text-primary sm:text-[28px] md:text-[32px]"
      >
        Most Wishlisted
      </h2>

      <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((p, i) => (
          <ProductCard key={i} title={p.title} image={p.image} />
        ))}
      </div>
    </Container>
  );
};