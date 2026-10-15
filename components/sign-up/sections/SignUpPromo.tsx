import Image from "next/image";

const SignUpPromo = () => {
  return (
    <div
      className="relative flex min-h-screen w-full flex-col items-center justify-between overflow-hidden rounded-none md:rounded-l-[30px] md:w-1/2"
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, #C8FEB6 0%, #97E07F 100%)",
      }}
    >
      {/* Top Left Tomato */}
      <div className="absolute left-1 -top-6 z-10 h-24 w-24 sm:h-32 sm:w-32 md:-top-17 md:h-48 md:w-48 lg:h-60 lg:w-60 xl:h-72 xl:w-72">
        <Image
          src="/danube-website/assets/images/tomato-left.png"
          alt="Tomato top left"
          fill
          className="object-contain"
          sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, (max-width: 1024px) 192px, (max-width: 1280px) 240px, 288px"
        />
      </div>

      {/* Top Right Tomato */}
      <div className="absolute -right-6 top-8 z-10 h-24 w-24 sm:h-32 sm:w-32 md:-right-10 md:h-40 md:w-40 lg:h-52 lg:w-52 xl:h-60 xl:w-60">
        <Image
          src="/danube-website/assets/images/tomato-right.png"
          alt="Tomato top right"
          fill
          className="object-contain"
          sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, (max-width: 1024px) 160px, (max-width: 1280px) 208px, 240px"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex w-full flex-1 flex-col items-center pt-8 text-center gap-8 sm:pt-10 sm:gap-12 md:gap-14">
        {/* Danube Logo */}
        <div className="flex w-24 shrink-0 flex-col items-center sm:w-28 md:w-32">
          <Image
            src="/danube-website/assets/images/arabic-logo-(2).png"
            alt="Arabic Logo"
            width={110}
            height={42}
            className="h-8 w-20 object-contain sm:h-9 sm:w-24 md:h-11 md:w-28"
            sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
          />
          <Image
            src="/danube-website/assets/images/logo-(3).png"
            alt="Danube"
            width={166}
            height={48}
            className="h-9 w-32 scale-125 object-contain sm:h-10 sm:w-36 sm:scale-140 md:h-12 md:w-40 md:scale-150"
            sizes="(max-width: 640px) 128px, (max-width: 768px) 144px, 160px"
          />
        </div>

        {/* Products Count */}
        <div className="mb-4 text-center sm:mb-6">
          <h2 className="text-[clamp(2rem,6vw,60px)] font-extrabold leading-[102%] tracking-[0%] text-primary">
            20,000+
          </h2>
          <p className="text-[clamp(2.5rem,8vw,80px)] font-extrabold leading-[102%] tracking-[0%] text-primary">
            Products
          </p>
        </div>
      </div>

      {/* Products */}
      <div
        className="relative z-30 w-full"
        style={{ height: "clamp(180px, 35vw, 280px)" }}
      >
        {/* 1. Mixer (Sencor) - far left */}
        <div className="absolute bottom-[-36%] left-[11%] z-20 h-[85%] w-[23%] sm:h-[90%] sm:w-[21%] md:h-[98%] md:w-[19%]">
          <Image
            src="/danube-website/assets/images/mixer.png"
            alt="Sencor Mixer"
            fill
            className="object-contain object-bottom"
            sizes="(max-width: 640px) 23vw, (max-width: 768px) 21vw, 19vw"
          />
        </div>

        {/* 2. Kettle (Philips) - next to mixer */}
        <div className="absolute bottom-[-35%] left-[20%] z-20 h-[70%] w-[24%] sm:h-[75%] sm:w-[22%] md:h-[82%] md:w-[20%]">
          <Image
            src="/danube-website/assets/images/kettle.png"
            alt="Philips Kettle"
            fill
            className="object-contain object-bottom"
            sizes="(max-width: 640px) 24vw, (max-width: 768px) 22vw, 20vw"
          />
        </div>

        {/* 3. Iron (Kenwood) - in front of kettle */}
        <div className="absolute bottom-[-36%] left-[23%] z-30 h-[55%] w-[24%] sm:h-[60%] sm:w-[22%] md:h-[68%] md:w-[20%]">
          <Image
            src="/danube-website/assets/images/iron.png"
            alt="Kenwood Iron"
            fill
            className="object-contain object-bottom"
            sizes="(max-width: 640px) 24vw, (max-width: 768px) 22vw, 20vw"
          />
        </div>

        {/* 4. Bag (center, large) */}
        <div className="absolute bottom-[-28%] left-[36%] z-10 h-[115%] w-[38%] sm:h-[120%] sm:w-[36%] md:h-[130%] md:w-[33%]">
          <Image
            src="/danube-website/assets/images/bag.png"
            alt="Danube Bag"
            fill
            className="object-contain object-bottom"
            sizes="(max-width: 640px) 38vw, (max-width: 768px) 36vw, 33vw"
          />
        </div>

        {/* 5. Pringles / black pack (behind Tang) */}
        <div className="absolute bottom-[-37%] left-[64%] z-10 h-[62%] w-[10%] sm:h-[67%] sm:w-[9%] md:h-[74%] md:w-[8%]">
          <Image
            src="/danube-website/assets/images/pringles.png"
            alt="Pringles"
            fill
            className="object-contain object-bottom"
            sizes="(max-width: 640px) 10vw, (max-width: 768px) 9vw, 8vw"
          />
        </div>

        {/* 6. Tang (orange pouch) */}
        <div className="absolute bottom-[-40%] left-[62%] z-20 h-[78%] w-[17%] sm:h-[84%] sm:w-[16%] md:h-[94%] md:w-[14%]">
          <Image
            src="/danube-website/assets/images/tang.png"
            alt="Tang Orange"
            fill
            className="object-contain object-bottom"
            sizes="(max-width: 640px) 17vw, (max-width: 768px) 16vw, 14vw"
          />
        </div>

        {/* 7. Mars miniatures */}
        <div className="absolute bottom-[-46%] left-[68%] z-20 h-[92%] w-[23%] sm:h-[98%] sm:w-[22%] md:h-[106%] md:w-[20%]">
          <Image
            src="/danube-website/assets/images/mars.png"
            alt="Mars Miniatures"
            fill
            className="object-contain object-bottom"
            sizes="(max-width: 640px) 23vw, (max-width: 768px) 22vw, 20vw"
          />
        </div>

        {/* 8. Almarai can - far right */}
        <div className="absolute bottom-[-42%] left-[79%] z-20 h-[55%] w-[13%] sm:h-[60%] sm:w-[12%] md:h-[68%] md:w-[11%]">
          <Image
            src="/danube-website/assets/images/almarai.png"
            alt="Almarai"
            fill
            className="object-contain object-bottom"
            sizes="(max-width: 640px) 13vw, (max-width: 768px) 12vw, 11vw"
          />
        </div>
      </div>

      {/* Wooden Table */}
      <div className="relative h-40 w-full sm:h-48 md:h-56 lg:h-64">
        <Image
          src="/danube-website/assets/images/wood-texture.png"
          alt="Wood Texture Surface"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </div>
  );
};

export default SignUpPromo;
