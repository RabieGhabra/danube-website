import { assetPath } from "@/lib/asset-path";
/* eslint-disable @next/next/no-img-element */
import Container from "@/components/ui/container";

export const EidSale = () => {
  return (
    <Container className="pt-8 sm:pt-10 md:pt-12 lg:pt-16" aria-label="Eid sale">
      <div
        className="relative flex h-40 items-center justify-between overflow-visible bg-center bg-no-repeat bg-size-[100%_85%] px-2 sm:h-82 sm:px-5 md:pl-6 lg:pl-8 md:pr-8 lg:pr-54"
        style={{ backgroundImage: `url(${assetPath("/assets/images/Background.png")})`, }}
      >
        {/* LEFT */}
        <div className="flex h-full w-[55%] items-center justify-start sm:w-[58%] lg:w-[60%]">
          {/* Image 1 - Moon & Stars left */}
          <div className="flex h-full shrink-0 items-start">
            <img
              className="h-20 w-8 translate-y-12 object-contain sm:h-24 sm:w-10 sm:translate-y-14 md:h-32 md:w-13 md:translate-y-11 lg:h-36 lg:w-14.5 lg:translate-y-10"
              alt=""
              src={assetPath("/assets/images/monn-and-satrs-1.png")}
            />
          </div>

          {/* Images 2 + 3 */}
          <div className="flex min-w-0 flex-1 flex-row items-center gap-1.5 sm:gap-3 md:gap-4 lg:gap-5">
            {/* Image 2 */}
            <img
              className="min-w-0 w-[48%] max-w-35 object-contain sm:w-[42%] sm:max-w-none lg:w-auto"
              alt="Eid Sale"
              src={assetPath("/assets/images/Text-2.png")}
            />
            {/* Image 3 */}
            <img
              className="min-w-0 w-[52%] max-w-40 object-contain sm:w-[48%] sm:max-w-none lg:w-auto"
              alt="Eid Ul Azha Sale"
              src={assetPath("/assets/images/Eid-Ul-Azha-Sale.png")}
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex h-full w-[45%] items-center justify-end gap-1 sm:w-[42%] sm:gap-4 md:gap-6 lg:w-[40%] lg:gap-10">
          {/* Image 4 - Goat */}
          <img
            className="min-w-0 w-[85%] max-w-45 -translate-y-2 object-contain sm:w-[78%] sm:max-w-none sm:-translate-y-4 md:-translate-y-5 lg:h-81 lg:w-96.25 lg:-translate-y-6"
            alt="Goat"
            src={assetPath("/assets/images/goat-1.png")}
          />

          {/* Image 5 - Moon & Stars right */}
          <div className="flex h-full shrink-0 items-start">
            <img
              className="h-20 w-8 translate-y-12 object-contain sm:h-24 sm:w-10 sm:translate-y-14 md:h-32 md:w-13 md:translate-y-11 lg:h-36 lg:w-14.5 lg:translate-y-10"
              alt=""
              src={assetPath("/assets/images/monn-and-satrs-2.png")}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
