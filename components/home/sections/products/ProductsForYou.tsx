import { assetPath } from "@/lib/asset-path";
import Container from "@/components/ui/container";
import { ProductCard } from "@/components/products/ProductCard";

const products = [
  { title: "Chocolate Swiss Roll Cake", image: assetPath("/assets/images/cake.png") },
  { title: "Alyoum Cookly Chicken\nFillet with Teriyaki Sauce..", image: assetPath("/assets/images/chicken.png") },
  { title: "Danube Tomato\n1kg", image: assetPath("/assets/images/tomato.png") },
  { title: "Danube Imported\nBanana 1 kg", image: assetPath("/assets/images/bread.png") },
  { title: "Danube Imported\nBanana 1 kg", image: assetPath("/assets/images/parsley.png") },
];

export const ProductsForYou = () => {
  return (
    <Container aria-label="Products for you" productSpacing>
      <h2
        id="products-for-you-heading"
        className="text-[24px] font-semibold leading-[100%] text-primary sm:text-[28px] md:text-[32px]"
      >
        Products for You
      </h2>

      <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((p, i) => (
          <ProductCard key={i} title={p.title} image={p.image} />
        ))}
      </div>
    </Container>
  );
};