"use client"; /* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const brands = [
  { name: "Lay's", count: 26 },
  { name: "Pringles", count: 26 },
  { name: "Kernelpop", count: 31 },
  { name: "Americana", count: 25 },
  { name: "Al batal", count: 25 },
  { name: "Doritos", count: 18 },
  { name: "Chipsey", count: 22 },
];
const originCountries = [
  { name: "Saudi Arabia", count: 26 },
  { name: "United Arab Emirates", count: 26 },
  { name: "United States", count: 31 },
  { name: "Belgium", count: 25 },
  { name: "Egypt", count: 14 },
  { name: "Turkey", count: 19 },
];
const sizes = [
  { name: "155g", count: 26 },
  { name: "165g", count: 26 },
  { name: "45g", count: 31 },
  { name: "170g", count: 25 },
  { name: "200g", count: 17 },
];

const checkClass =
  "h-6 w-6 cursor-pointer appearance-none rounded-md border-0 bg-[#F2F3F7] checked:bg-green-500 checked:after:flex checked:after:h-full checked:after:w-full checked:after:items-center checked:after:justify-center checked:after:text-[16px] checked:after:font-bold checked:after:text-white checked:after:content-['✓']";

const List = ({ items }: { items: { name: string; count: number }[] }) => (
  <ul className="space-y-3">
    {items.map((i) => (
      <li
        key={i.name}
        className="flex w-full items-center justify-between text-sm text-gray-700"
      >
        <span className="flex-1">
          {i.name} <span className="text-gray-400">({i.count})</span>
        </span>
        <input type="checkbox" className={checkClass} />
      </li>
    ))}
  </ul>
);

const Section = ({
  title,
  items,
}: {
  title: string;
  items: { name: string; count: number }[];
}) => (
  <div>
    <hr className="mb-5 border-gray-200" />
    <h3 className="mb-3 text-[15px] font-bold text-gray-900">{title}</h3>
    <List items={items.slice(0, 4)} />
  </div>
);

const sliderClass =
  "pointer-events-none absolute top-1/2 h-2 w-full -translate-y-1/2 appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-[#78D64B] [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-md";

export const FilterSidebar = () => {
  const [brandSearch, setBrandSearch] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);

  return (
    <aside className="w-full shrink-0 self-start rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:sticky lg:top-4 lg:col-span-1 lg:h-247.5">
      <div className="flex h-full flex-col justify-between">
        <div>
          <h3 className="mb-3 text-[15px] font-bold text-gray-900">Brand</h3>
          <div className="relative mb-4">
            <img
              src="/assets/icons/search.png"
              alt="Search"
              className="absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 object-contain"
            />
            <Input
              type="text"
              placeholder="Search a brand"
              value={brandSearch}
              onChange={(e) => setBrandSearch(e.target.value)}
              className="w-full rounded-lg border-0 bg-gray-100 py-2 pl-9 pr-3 text-sm text-gray-700 placeholder:text-gray-400 outline-none focus-visible:ring-1 focus-visible:ring-green-400"
            />
          </div>
          <List items={brands.slice(0, 5)} />
          {brands.length > 5 && (
            <Button
              type="button"
              variant="ghost"
              className="mt-3 h-auto gap-1 p-0 text-sm font-medium text-green-500"
            >
              Show more
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </Button>
          )}
        </div>

        <Section title="Origin Country" items={originCountries} />
        <Section title="Size" items={sizes} />

        <div>
          <hr className="mb-5 border-gray-200" />
          <h3 className="mb-3 text-[15px] font-bold text-gray-900">Filters</h3>

          <div className="mb-1 flex items-center justify-between text-xs font-bold text-black-500">
            <span>Min Price (per item)</span>
            <span>Max Price (per item)</span>
          </div>

          <div className="mb-3 flex items-center justify-between text-sm font-medium text-gray-900">
            <span className="flex items-center gap-1">
              <img
                src="/assets/icons/SAR.png"
                alt="SAR"
                className="h-4 w-4 object-contain"
              />
              {minPrice}
            </span>
            <span className="flex items-center gap-1">
              <img
                src="/assets/icons/SAR.png"
                alt="SAR"
                className="h-4 w-4 object-contain"
              />
              {maxPrice}+
            </span>
          </div>

          <div className="relative mt-4 h-8 w-full">
            <div className="absolute top-1/2 h-2 w-full -translate-y-1/2 rounded-full bg-gray-200" />
            <div
              className="absolute top-1/2 h-2 -translate-y-1/2 rounded-full bg-linear-to-r from-[#C6E85C] to-[#78D64B]"
              style={{ left: `${minPrice}%`, right: `${100 - maxPrice}%` }}
            />
            <input
              type="range"
              min="0"
              max="100"
              value={minPrice}
              onChange={(e) =>
                setMinPrice(Math.min(+e.target.value, maxPrice - 5))
              }
              className={sliderClass}
            />
            <input
              type="range"
              min="0"
              max="100"
              value={maxPrice}
              onChange={(e) =>
                setMaxPrice(Math.max(+e.target.value, minPrice + 5))
              }
              className={sliderClass}
            />
          </div>
        </div>
      </div>
    </aside>
  );
};
