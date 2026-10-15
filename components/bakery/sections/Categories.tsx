"use client";
/* eslint-disable @next/next/no-img-element */

type CategoryItem = {
  name: string;
  image: string;
  width?: string;
  height?: string;
  offset?: string;
};

const backgroundImage = "/danube-website/assets/images/background-(2).png";

const categoryItems: CategoryItem[] = [
  { name: "Croissant", image: "/danube-website/assets/images/croissant.png", width: "96px", height: "119px", offset: "mb-0" },
  { name: "Donuts", image: "/danube-website/assets/images/donuts.png", width: "84px", height: "104px", offset: "mb-1" },
  { name: "Brownies", image: "/danube-website/assets/images/brownies.png", width: "124px", height: "84px", offset: "mb-5" },
  { name: "Bread", image: "/danube-website/assets/images/bread-(2).png", width: "46x", height: "110px", offset: "mb-13" },
  { name: "Danube Cakes", image: "/danube-website/assets/images/cakes.png", width: "84px", height: "104px", offset: "-mb-3"},
  { name: "Cakes & Muffins", image: "/danube-website/assets/images/muffins.png", width: "124px", height: "76px" },
  { name: "Rusk", image: "/danube-website/assets/images/rusk.png", width: "104px", height: "69px", offset: "mb-2" },
  { name: "Sambosa Leaves & Dough", image: "/danube-website/assets/images/sambosa.png", width: "106px",height: "96px", offset: "mb-6" },
];

const categoryLabel = (name: string) => {
  if (name === "Danube Cakes") {
    return <span className="whitespace-nowrap">Danube Cakes</span>;
  }

  if (name === "Sambosa Leaves & Dough") {
    return (
      <span className="block w-45 whitespace-nowrap text-center">
        <span>Sambosa Leaves</span>
        <br />
        <span>&amp; Dough</span>
      </span>
    );
  }

  const words = name.split(" ");

  return words.length > 1 ? (
    <>
      {words.slice(0, -1).join(" ")}
      <br />
      {words[words.length - 1]}
    </>
  ) : (
    name
  );
};

export const Categories = () => {
  return (
    <>
      <div className="mb-5 flex items-center justify-between">
        <h2
          id="similar-Products-heading"
          className="text-[24px] font-semibold leading-[100%] text-[#A55B27] sm:text-[28px] md:text-[32px]"
        >
          Category
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-x-5 gap-y-10 min-[480px]:grid-cols-2 min-[640px]:grid-cols-3 min-[768px]:grid-cols-4 min-[900px]:grid-cols-5 min-[1100px]:grid-cols-6 min-[1250px]:grid-cols-7 min-[1420px]:grid-cols-8">
        {categoryItems.map((category, index) => (
          <article
            key={`${category.name}-${index}`}
            className="flex min-w-0 flex-col items-center"
          >
            <button
              type="button"
              className="relative h-45.5 w-45.75 max-w-full overflow-visible"
            >
              <div
                className="relative h-full w-full bg-size-[100%_100%] bg-center bg-no-repeat"
                style={{ backgroundImage: `url("${backgroundImage}")` }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={category.image}
                    alt={category.name}
                    style={{
                      width: category.width,
                      height: category.height,
                    }}
                    className={`mx-auto object-contain ${category.offset ?? ""}`}
                  />
                </div>
              </div>
            </button>

            <p
              className={`mt-4 min-h-12 text-center text-xl font-semibold leading-normal text-primary ${
                category.name === "Sambosa Leaves & Dough"
                  ? "w-45"
                  : ""
              }`}
            >
              {categoryLabel(category.name)}
            </p>
          </article>
        ))}
      </div>
    </>
  );
};