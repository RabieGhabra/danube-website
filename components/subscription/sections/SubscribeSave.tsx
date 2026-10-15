/* eslint-disable @next/next/no-img-element */
"use client";
import Container from "../../ui/container";

export const SubscribeSave = () => {
  const images = {
    subscribeSave: "/danube-website/assets/images/subscribe-save.png",
    colgate: "/danube-website/assets/images/colgate.png",
    mint: "/danube-website/assets/images/mint.png",
    bread: "/danube-website/assets/images/bread-(3).png",
    kinza: "/danube-website/assets/images/kinza-(2).png",
    someByMi: "/danube-website/assets/images/somebymi.png",
    dreamWhip: "/danube-website/assets/images/dreamwhip.png",
    popcorn: "/danube-website/assets/images/popcorn-(2).png",
    chipsy: "/danube-website/assets/images/chipsy.png",
    chupaChups: "/danube-website/assets/images/chupachups.png",
    lollipop: "/danube-website/assets/images/lollipop.png",
    coin1: "/danube-website/assets/images/coin-(1).png",
    coin2: "/danube-website/assets/images/coin-(2).png",
    coin3: "/danube-website/assets/images/coin-(3).png",
    coin4: "/danube-website/assets/images/coin-(4).png",
    coin5: "/danube-website/assets/images/coin-(5).png",
    coin6: "/danube-website/assets/images/coin-(6).png",
    coin7: "/danube-website/assets/images/coin-(7).png",
    coin8: "/danube-website/assets/images/coin-(8).png",
    coin9: "/danube-website/assets/images/coin-(9).png",
  };

  const products = [
    { src: images.bread, alt: "Bread", cls: "z-20 max-w-[30%] sm:max-w-[25%]", style: { top: "15%", left: "3%" } },
    { src: images.colgate, alt: "Colgate", cls: "z-20 max-w-[13%] sm:max-w-[11%]", style: { top: "28%", left: "1%" } },
    { src: images.mint, alt: "Mint", cls: "z-20 max-w-[12%] sm:max-w-[10%]", style: { bottom: "8%", left: "3%" } },
    { src: images.kinza, alt: "Kinza", cls: "z-20 max-w-[13%] sm:max-w-[11%]", style: { top: "8%", left: "18%" } },
    { src: images.someByMi, alt: "Some By Mi", cls: "z-20 max-w-[9%] sm:max-w-[7%]", style: { bottom: "10%", left: "20%" } },
    { src: images.chupaChups, alt: "Chupa Chups", cls: "z-20 max-w-[12%] sm:max-w-[10%]", style: { top: "10%", right: "20%" } },
    { src: images.chipsy, alt: "Chipsy", cls: "z-20 max-w-[22%] sm:max-w-[20%]", style: { top: "22%", right: "8%" } },
    { src: images.dreamWhip, alt: "Dream Whip", cls: "z-20 max-w-[12%] sm:max-w-[10%]", style: { top: "38%", right: "3%" } },
    { src: images.popcorn, alt: "Popcorn", cls: "z-20 max-w-[13%] sm:max-w-[11%]", style: { bottom: "5%", right: "6%" } },
    { src: images.lollipop, alt: "Lollipop", cls: "z-20 max-w-[14%] sm:max-w-[12%]", style: { bottom: "-8%", right: "18%" } },
  ];

  const coins = [
    { src: images.coin1, style: { top: "18%", left: "1%" } },
    { src: images.coin2, style: { top: "10%", left: "26%" } },
    { src: images.coin3, style: { bottom: "15%", left: "0%" } },
    { src: images.coin4, style: { bottom: "3%", left: "15%" } },
    { src: images.coin5, style: { top: "0%", right: "26%" } },
    { src: images.coin6, style: { top: "2%", right: "8%" } },
    { src: images.coin7, style: { bottom: "18%", right: "28%" } },
    { src: images.coin8, style: { bottom: "28%", right: "25%" } },
    { src: images.coin9, style: { bottom: "18%", right: "1%" } },
  ];

  return (
    <Container>
      <div
        className="
          relative w-full aspect-4/3 sm:aspect-16/8 md:aspect-16/6 
          overflow-hidden shadow-lg
          mt-10 sm:mt-20 md:mt-28 lg:mt-36 xl:mt-28
          mb-10 sm:mb-16 md:mb-20 lg:mb-20
        "
        style={{
          background: "linear-gradient(102.46deg, #FFFDB4 -1.62%, #CBFFBA 69.72%, #FFE9B8 129.7%)",
          borderRadius: "70px",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
          <img
            src={images.subscribeSave}
            alt="Subscribe & Save"
            className="object-contain drop-shadow-2xl max-w-[65%] sm:max-w-[55%] md:max-w-[50%]"
          />
        </div>

        {products.map((p) => (
          <img key={p.alt} src={p.src} alt={p.alt} className={`absolute object-contain ${p.cls}`} style={p.style} />
        ))}

        {coins.map((c, i) => (
          <img key={i} src={c.src} alt="Coin" className="absolute object-contain z-10 max-w-[7%] sm:max-w-[5.5%]" style={c.style} />
        ))}
      </div>
    </Container>
  );
};
