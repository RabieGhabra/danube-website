"use client";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import SidebarMenu from "../dashboard/SidebarMenu";
import Container from "../ui/container";
import { ProductCard } from "../products/ProductCard";

const wishlistItems = [
  {
    title: "Dream Whip Whipped Topping...",
    image: "/danube-website/assets/images/dream-whip.png",
    price: "50.00",
    rating: "4.5",
    reviews: "(5K)",
    icon: "bell" as const,
  },
  {
    title: "Danube Rocket Leaves 1pc",
    image: "/danube-website/assets/images/mint.png",
    price: "50.00",
    rating: "4.5",
    reviews: "(5K)",
    icon: "cart" as const,
  },
  {
    title: "Al-Watania Poultry Medium-Large...",
    image: "/danube-website/assets/images/eggs.png",
    price: "50.00",
    rating: "4.5",
    reviews: "(5K)",
    icon: "cart" as const,
  },
  {
    title: "Lays Chips\n Ketchup Flavour",
    image: "/danube-website/assets/images/chips.png",
    price: "50.00",
    rating: "4.5",
    reviews: "(5K)",
    icon: "cart" as const,
  },
  {
    title: "Danube Bakery White Bread Mini",
    image: "/danube-website/assets/images/bread-(4).png",
    price: "50.00",
    rating: "4.8",
    reviews: "(5K)",
    icon: "cart" as const,
  },
  {
    title: "Kinza Cola Carbonated Drink",
    image: "/danube-website/assets/images/kinza.png",
    price: "50.00",
    rating: "4.8",
    reviews: "(5K)",
    icon: "cart" as const,
  },
];

export const DashboardMyWishlist = () => {
  return (
    <>
      <Header />

      <Container className="mt-4 mb-10 flex flex-col items-start gap-3 sm:mt-5 sm:mb-15 sm:gap-4 lg:flex-row lg:gap-6">
        <SidebarMenu />

        <div className="w-full flex-1">
          <div className="rounded-3xl bg-[#F2F3F7] p-4 sm:p-5">
            <div
              className="
                grid max-w-145 grid-cols-1 gap-3 place-items-center
                min-[420px]:grid-cols-2
                min-[620px]:grid-cols-3
                min-[1024px]:max-[1070px]:grid-cols-2
                min-[1070px]:grid-cols-3
              "
            >
              {wishlistItems.map((item, index) => (
                <ProductCard
                  key={index}
                  variant="wishlist"
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  reviews={item.reviews}
                  icon={item.icon}
                  imageIndex={index}
                  onRemove={() => console.log("Remove", item.title)}
                  onAction={() => console.log("Action", item.title)}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
};
