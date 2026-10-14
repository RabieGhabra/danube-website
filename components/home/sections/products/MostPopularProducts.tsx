import Container from "@/components/ui/container";
import { ProductCard } from "@/components/products/ProductCard";

const products = [
  { title: "Al-Watania Poultry\nMedium-Large...", image: "/assets/images/eggs.png" },
  { title: "Kinza Cola\nCarbonated Drink", image: "/assets/images/Kinza.png" },
  { title: "Danube Tomato\n1kg", image: "/assets/images/tomato.png" },
  { title: "Danube Imported\nBanana 1 kg", image: "/assets/images/bread.png" },
  { title: "Danube Imported\nBanana 1 kg", image: "/assets/images/parsley.png" },
];

export const MostPopularProducts = () => {
  return (
    <Container aria-label="Most Popular Products" productSpacing>
      <h2
        id="most-Popular-Products-heading"
        className="text-[24px] font-semibold leading-[100%] text-primary sm:text-[28px] md:text-[32px]"
      >
        Most Popular Products
      </h2>

      <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((p, i) => (
          <ProductCard key={i} title={p.title} image={p.image} />
        ))}
      </div>
    </Container>
  );
};