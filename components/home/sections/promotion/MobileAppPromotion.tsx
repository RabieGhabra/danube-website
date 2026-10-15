"use client";
import { assetPath } from "@/lib/asset-path";
/* eslint-disable @next/next/no-img-element */
import { Card, CardContent } from "@/components/ui/card";
import Container from "@/components/ui/container";

const appStoreBadges = [
  { alt: "Google Play", src: assetPath("/assets/images/toppng-2.png") },
  { alt: "App Store", src: assetPath("/assets/images/pngitem-1144050-3.png") },
];

export const MobileAppPromotion = () => {
  return (
    <section
      aria-labelledby="mobile-app-promotion-title"
      className="relative mt-10 w-full overflow-hidden sm:mt-12 min-[1498px]:mt-16 min-[1498px]:h-120"
    >
      {/* Background */}
      <div
        className="absolute left-0 h-full w-full min-[1498px]:top-31.5 min-[1498px]:h-88.5"
        style={{
          background:
            "linear-gradient(136deg, rgba(255,251,145,1) 0%, rgba(151,224,128,1) 54%, rgba(255,231,178,1) 100%)",
        }}
      />

      <Container className="relative h-full py-8 sm:py-10 min-[1498px]:py-0">
        <div className="relative flex h-full w-full flex-col items-center gap-8 min-[1498px]:block min-[1498px]:gap-0">
          {/* MOBILE */}
          <div className="relative flex w-full flex-col items-center gap-6 min-[1498px]:hidden">
            {/* QR */}
            <Card className="relative h-36 w-36 rounded-2xl border-0 bg-white p-0 shadow-none sm:h-44 sm:w-44">
              <CardContent className="relative h-full p-0">
                <img
                  src={assetPath("/assets/images/qr-code.png")}
                  alt="QR code"
                  className="absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(100%-16px)] rounded-[10px] object-cover"
                />
                <img
                  src={assetPath("/assets/images/danube-logo.png")}
                  alt="Danube logo"
                  className="absolute left-1/2 top-1/2 z-10 h-10 w-10 -translate-x-1/2 -translate-y-1/2 sm:h-12 sm:w-12"
                />
              </CardContent>
            </Card>

            {/* TEXT */}
            <div className="relative z-10 w-full max-w-2xl px-4 text-center">
              <h2
                id="mobile-app-promotion-title"
                className="font-semibold text-black"
                style={{ fontSize: "clamp(24px, 6vw, 40px)", lineHeight: "110%" }}
              >
                Unlock Exclusive Deals And
                <span className="block font-bold">More In Our Mobile App</span>
              </h2>

              <p
                className="mx-auto mt-3 max-w-md text-black"
                style={{ fontWeight: 600, fontSize: "clamp(14px, 3.5vw, 18px)" }}
              >
                fast checkout & grocery deals: get it all on Danube
              </p>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
                {appStoreBadges.map((badge) => (
                  <img
                    key={badge.src}
                    src={badge.src}
                    alt={badge.alt}
                    className="h-12 w-auto object-contain sm:h-14"
                  />
                ))}
              </div>
            </div>

            {/* FLOATING IMAGES */}
            <div className="relative mt-10 flex flex-col items-center justify-center">
              <img
                src={assetPath("/assets/images/mask-group-11.png")}
                alt=""
                className="relative right-16 z-10 -mb-21 w-60 object-contain max-[580px]:-mb-15 max-[580px]:w-40"
              />
              <img
                src={assetPath("/assets/images/1--home-android-mockup.png")}
                alt="Android mobile app"
                className="relative z-0 -mt-45 w-52 translate-x-20 object-contain max-[580px]:-mt-31 max-[580px]:w-36 max-[580px]:translate-x-10"
              />
            </div>
          </div>

          {/* DESKTOP */}
          <div className="relative hidden h-full w-full min-[1498px]:block">
            {/* QR */}
            <Card className="absolute left-0 top-34 h-62.5 w-62.5 rounded-[20px] border-0 bg-white p-0 shadow-none">
              <CardContent className="relative h-full p-0">
                <img
                  src={assetPath("/assets/images/qr-code.png")}
                  alt="QR code"
                  className="absolute left-3 top-3 h-56.5 w-56.5 rounded-[10px] object-cover"
                />
                <img
                  src={assetPath("/assets/images/danube-logo.png")}
                  alt="Danube logo"
                  className="absolute left-1/2 top-1/2 z-10 h-17 w-17 -translate-x-1/2 -translate-y-1/2"
                />
              </CardContent>
            </Card>

            {/* TEXT */}
            <div className="absolute left-72 top-38 w-186">
              <h2
                id="mobile-app-promotion-title-desktop"
                className="font-semibold text-black"
                style={{ fontSize: "49px", lineHeight: "100%" }}
              >
                Unlock Exclusive Deals And
                <span className="block font-bold">More In Our Mobile App</span>
              </h2>

              <p
                className="mt-5 w-136 text-black"
                style={{ fontWeight: 600, fontSize: "21px" }}
              >
                fast checkout & grocery deals: get it all on Danube
              </p>

              <div className="mt-5 flex h-30 w-100 gap-5">
                {appStoreBadges.map((badge) => (
                  <img
                    key={badge.src}
                    src={badge.src}
                    alt={badge.alt}
                    className="h-15 w-45 object-contain"
                  />
                ))}
              </div>
            </div>

            {/* DECORATIVE */}
            <img
              src={assetPath("/assets/images/mask-group-11.png")}
              alt=""
              className="absolute right-42 top-0 z-10 h-120 w-73.75 object-contain"
            />
            <img
              src={assetPath("/assets/images/1--home-android-mockup.png")}
              alt="Android mobile app"
              className="absolute right-0 top-35.5 z-0 h-84.5 w-66.75"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};