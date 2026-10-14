/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import Container from "../../ui/container";

export const DidYouKnow = () => {
  return (
    <Container>
      <div
        className="relative my-8 overflow-visible px-4 pb-6 pt-10 text-center sm:my-12 sm:pb-8 sm:pt-12"
        style={{
          background: "linear-gradient(102.46deg, #FFFB91 -1.62%, #97E080 69.72%, #FFE7B2 129.7%)",
          borderRadius: "24px",
        }}
      >
        <img
          src="/assets/images/discount-badge-(1).png"
          alt="Badge"
          className="absolute left-1/2 top-0 z-20 w-[clamp(40px,5vw,80px)] -translate-x-1/2 -translate-y-1/2 object-contain"
        />
        <div className="mt-2 flex flex-col gap-4 sm:mt-3">
          <h3
            className="text-primary"
            style={{ fontWeight: 600, fontSize: "24px", lineHeight: "22px", letterSpacing: "-0.41px" }}
          >
            Did you Know?
          </h3>
          <p
            className="text-primary"
            style={{ fontWeight: 500, fontSize: "18px", lineHeight: "16px", letterSpacing: "-0.41px" }}
          >
            Subscribers save{" "}
            <span style={{ fontWeight: 700, fontSize: "18px", lineHeight: "16px", letterSpacing: "-0.41px" }}>
              5%
            </span>{" "}
            on every order!"
          </p>
        </div>
      </div>
    </Container>
  );
};