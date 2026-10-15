/* eslint-disable @next/next/no-location-assign-relative-destination */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Container from "@/components/ui/container";

type NavigationItem = { label: string; prominent: boolean };
type ServiceOption = { label: string; icon: string; className: string; iconClassName: string };
type DepartmentItem = { label: string };

const navigationItems: NavigationItem[] = [
  { label: "Home", prominent: true },
  { label: "Featured Brands", prominent: false },
  { label: "Best Sellers", prominent: false },
  { label: "Deals & Discount", prominent: false },
  { label: "Loyalty Program", prominent: false },
  { label: "Weekly Flayer", prominent: false },
  { label: "Weekly Flayer", prominent: false },
  { label: "Weekly Flayer", prominent: false },
];

const departmentItems: DepartmentItem[] = [
  { label: "Fruits & Vegetables" },
  { label: "Dairy & Eggs" },
  { label: "Bakery" },
  { label: "Beverages" },
  { label: "Snacks" },
  { label: "Frozen Food" },
  { label: "Meat & Poultry" },
  { label: "Household" },
];

const serviceOptions: ServiceOption[] = [
  {
    label: "Express",
    icon: "/danube-website/assets/icons/express.png",
    className: "border border-primary bg-primary text-[#97e080]",
    iconClassName: "h-[32px] w-[32px]",
  },
  {
    label: "Schedule",
    icon: "/danube-website/assets/icons/schedule.png",
    className: "bg-[#f2f2f2] text-[#26a200]",
    iconClassName: "h-[30px] w-[30px]",
  },
  {
    label: "Store Pickup",
    icon: "/danube-website/assets/icons/store-pickup.png",
    className: "bg-[#f2f2f2] text-[#26a200]",
    iconClassName: "h-[28px] w-[28px]",
  },
];

const headerBackgrounds = {
  green: "bg-[linear-gradient(180deg,rgba(151,224,128,1)_0%,rgba(151,224,128,0)_100%)]",
  beige: "bg-[#fdf3d8]",
  white: "bg-white",
  bakery: "bg-[linear-gradient(180deg,#F2C86C_-55.67%,rgba(242,200,108,0)_94.68%)]",
} as const;

type HeaderBackground = keyof typeof headerBackgrounds;

const LOGGED_IN_PAGES = [
  "/dashboard-edit-profile",
  "/dashboard-my-orders",
  "/dashboard-my-wishlist",
  "/brochures-2",
  "/brochures-2-v2",
];

const Icon = ({ src, className, alt = "" }: { src: string; className: string; alt?: string }) => (
  <img src={src} alt={alt} className={`object-contain ${className}`} />
);

const CircleIcon = ({
  src,
  alt = "",
  className = "",
  children,
}: {
  src: string;
  alt?: string;
  className?: string;
  children?: React.ReactNode;
}) => (
  <div
    className={`relative flex h-12.5 w-12.5 shrink-0 items-center justify-center rounded-full ${className}`}
  >
    <Icon src={src} alt={alt} className="h-6.25 w-6.25" />
    {children}
  </div>
);

type HeaderProps = {
  showAllDepartments?: boolean;
  showNavigation?: boolean;
  background?: HeaderBackground;
};

export const Header = ({
  showAllDepartments = true,
  showNavigation = true,
  background = "green",
}: HeaderProps) => {
  const [isDepartmentsOpen, setIsDepartmentsOpen] = useState(false);
  const router = useRouter();
  const path = usePathname();

  const isLoggedIn = LOGGED_IN_PAGES.includes(path);

  return (
    <header id="home" className={`w-full overflow-hidden ${headerBackgrounds[background]}`}>
      <Container>
        <div className="flex w-full flex-col pt-8">
          <div className="flex items-start justify-between gap-4 max-[1498px]:flex-col">
            <div className="flex w-29 shrink-0 flex-col items-center">
              <Icon src="/danube-website/assets/images/arabic-logo.png" className="h-8.75 w-29" />
              <Icon src="/danube-website/assets/images/logo.png" alt="Danube" className="h-8.75 w-29" />
            </div>

            <div className="mt-4 hidden items-start gap-6 md:flex max-[1498px]:flex max-[1498px]:flex-wrap">
              {serviceOptions.map((option) => (
                <Button
                  key={option.label}
                  type="button"
                  variant="ghost"
                  className={`relative h-13 w-30 shrink-0 rounded-[15px] p-0 text-center text-[14px] font-semibold leading-5.5 tracking-[-0.41px] ${option.className}`}
                >
                  <img
                    src={option.icon}
                    alt=""
                    className={`absolute bottom-9.5 left-1/2 -translate-x-1/2 object-contain ${option.iconClassName}`}
                  />
                  <span>{option.label}</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3 max-[1498px]:flex-wrap">
            <Button
              type="button"
              variant="outline"
              className="hidden h-11 min-w-57.5 justify-between rounded-2xl border-[0.4px] border-black bg-primary px-3 text-[14px] font-medium leading-5.5 tracking-[-0.41px] text-[#97e080] lg:flex max-[1495px]:flex"
            >
              <Icon src="/danube-website/assets/icons/location.png" className="h-5 w-5" />
              <span className="truncate">Flat No. 101, Building 12, Al</span>
              <Icon src="/danube-website/assets/icons/arrow.png" className="h-4 w-4" />
            </Button>

            <form
              role="search"
              className="relative min-w-0 flex-1 max-[1498px]:order-2 max-[1498px]:w-full max-[1498px]:basis-full"
            >
              <Icon
                src="/danube-website/assets/icons/search.png"
                className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2"
              />
              <Input
                type="search"
                aria-label="Search products"
                placeholder="Search for 40,000+ Products"
                className="h-11 w-full rounded-lg border-0 bg-white py-2 pl-11 pr-10 text-[14px] font-normal leading-5.5 tracking-[-0.41px] text-dark-gray placeholder:text-dark-gray focus-visible:ring-1 focus-visible:ring-[#97e080]"
              />
              <Icon
                src="/danube-website/assets/icons/qr-scan.png"
                className="pointer-events-none absolute right-4 top-1/2 h-4.75 w-auto -translate-y-1/2"
              />
            </form>

            <div className="flex items-center gap-3 max-[1498px]:order-3 max-[768px]:flex-col max-[768px]:items-start">

              {isLoggedIn ? (
                <Button
                  type="button"
                  variant="ghost"
                  aria-label="Abdullah Ahmed"
                  className="flex h-12.5 shrink-0 items-center gap-2 p-0 text-sm font-medium tracking-[-0.41px]"
                >
                  <CircleIcon src="/danube-website/assets/icons/bot.png" alt="User assistant" className="bg-primary" />
                  <CircleIcon src="/danube-website/assets/icons/user.png" className="bg-primary" />
                  <span className="text-center text-[14px] font-medium leading-5.5 tracking-[-0.41px]">
                    Abdullah Ahmed
                  </span>
                </Button>
              ) : (
                <Button
                  type="button"
                  variant="ghost"
                  aria-label="Sign up or Log in"
                  onClick={() => router.push("/sign-up")}
                  className="flex h-12.5 shrink-0 items-center gap-2 p-0 text-sm font-medium tracking-[-0.41px]"
                >
                  <CircleIcon src="/danube-website/assets/icons/bot.png" alt="User assistant" className="bg-primary" />
                  <CircleIcon src="/danube-website/assets/icons/user.png" className="bg-primary" />
                  <span className="cursor-pointer text-center text-[14px] font-medium leading-5.5 tracking-[-0.41px]">
                    Sign up or Log in
                  </span>
                </Button>
              )}

              <CircleIcon
                src={
                  path === "/brochures-1"
                    ? "/danube-website/assets/icons/shopping-cart-(1).png"
                    : "/danube-website/assets/icons/cart.png"
                }
                alt="Shopping cart"
                className={path === "/brochures-1" ? "bg-white" : "bg-primary"}
              >
                {path === "/brochures-1" && (
                  <div className="absolute top-2 right-1 flex items-center justify-center w-4 h-3 rounded-md bg-[#FF3F3F] border border-white text-white text-[8px] font-medium leading-[100%]">
                    10
                  </div>
                )}
              </CircleIcon>
            </div>
          </div>

          {(showAllDepartments || showNavigation) && (
            <div className="relative mt-4 flex items-stretch max-[1495px]:flex-col">
              {showAllDepartments && (
                <>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setIsDepartmentsOpen((prev) => !prev)}
                    aria-expanded={isDepartmentsOpen}
                    aria-controls="all-departments-menu"
                    className="h-11.25 shrink-0 gap-4 rounded-t-lg rounded-b-none bg-[#97e080] px-6 text-[16px] font-semibold leading-6 tracking-normal"
                  >
                    <Icon src="/danube-website/assets/icons/list.png" className="h-3.5 w-3.5" />
                    <span>All Departments</span>
                    <ChevronDownIcon
                      className={`h-4 w-4 transition-transform duration-200`}
                    />
                  </Button>

                  {isDepartmentsOpen && (
                    <ul
                      id="all-departments-menu"
                      className="absolute left-0 top-full z-50 w-57.5 rounded-b-lg border border-[#97e080] bg-white py-2 shadow-lg"
                    >
                      {departmentItems.map((dept) => (
                        <li key={dept.label}>
                          <a
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            className="block px-6 py-2 text-[14px] font-medium leading-5.5 tracking-[-0.41px] transition-colors"
                          >
                            {dept.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}

              {showNavigation && (
                <nav
                  aria-label="Main navigation"
                  className="min-w-0 flex-1 overflow-hidden max-[1498px]:w-full"
                >
                  <ul className="flex h-11.25 min-w-max items-center gap-4 px-6 max-[1498px]:h-auto max-[1498px]:min-w-0 max-[1498px]:flex-wrap max-[1498px]:gap-x-4 max-[1495px]:gap-y-4 max-[1498px]:py-4 lg:gap-6">
                    {navigationItems.map((item, index) => (
                      <li key={`${item.label}-${index}`}>
                        {index === 0 ? (
                          <button
                            type="button"
                            onClick={() =>
                            window.location.pathname === "/danube-website/"
                              ? window.location.reload()
                              : (window.location.href = "/danube-website/")
                            }
                            className="cursor-pointer whitespace-nowrap text-[16px] font-semibold leading-6 tracking-normal transition-opacity"
                          >
                            {item.label}
                          </button>
                        ) : (
                          <span className="cursor-pointer whitespace-nowrap text-[16px] font-semibold leading-6 tracking-normal">
                            {item.label}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};