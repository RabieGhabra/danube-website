import { assetPath } from "@/lib/asset-path";
/* eslint-disable @next/next/no-img-element */
import React from "react";

const OrderStatus = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={assetPath("/assets/icons/order-status.png")} alt="Order Status" className="h-6 w-6 object-contain sm:h-7 sm:w-7 md:h-8 md:w-8" />
          <h2 className="text-base font-semibold text-primary sm:text-lg md:text-xl">Order Status</h2>
        </div>
        <div className="cursor-pointer flex items-center gap-2 font-medium transition-colors" style={{ fontWeight: 600, fontStyle: "normal", fontSize: "18px", lineHeight: "100%", letterSpacing: "0", color: "#FF3F3F" }}>
          <img src={assetPath("/assets/icons/cancel.png")} alt="Cancel" className="h-4 w-4 object-contain sm:h-5 sm:w-5" />
          <span className="text-sm sm:text-base md:text-lg">Cancel</span>
        </div>
      </div>

      {/* Card */}
      <div className="bg-gray-50 px-3 sm:px-4 md:px-6" style={{ borderRadius: "30px", minHeight: "206px" }}>
        {/* Badge */}
        <div className="flex justify-start pt-4">
          <div className="flex items-center justify-center" style={{ minWidth: "114px", height: "32px", borderRadius: "11px", background: "#DDF3D7", color: "#6AC34E", fontWeight: 600, fontSize: "16px", lineHeight: "100%", letterSpacing: "0%", textAlign: "center", padding: "0 12px" }}>
            ORD-123321
          </div>
        </div>

        {/* Vertical <480px */}
        <div className="flex flex-col items-center gap-2 py-6 min-[480px]:hidden">
          {/* Ordered */}
          <div className="flex flex-col items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full text-white shadow-sm" style={{ background: "linear-gradient(102.46deg, #FFFB91 -1.62%, #97E080 69.72%, #FFE7B2 129.7%)" }}>
              <img src={assetPath("/assets/icons/ordered.png")} alt="Ordered" className="h-10 w-10 object-contain" />
            </div>
            <span className="mt-2 text-center" style={{ fontWeight: 500, fontSize: "14px", lineHeight: "100%", color: "#000000" }}>Ordered</span>
          </div>
          {/* Line */}
          <div style={{ width: "2px", height: "28px", backgroundImage: `url(${assetPath("/assets/icons/line-green.png")})`, backgroundRepeat: "repeat-y", backgroundPosition: "center" }} />
          {/* Packed */}
          <div className="flex flex-col items-center">
            <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white">
              <div className="pointer-events-none absolute inset-0 rounded-full" style={{ padding: "1.5px", borderRadius: "50%", background: "repeating-conic-gradient(from 0deg, #D4F0A0 0deg 15deg, transparent 15deg 30deg, #E6F5A0 30deg 45deg, transparent 45deg 60deg)", WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude" }} />
              <img src={assetPath("/assets/icons/packed.png")} alt="Packed" className="relative h-6 w-6 object-contain" />
            </div>
            <span className="mt-2 text-center" style={{ fontWeight: 600, fontSize: "14px", lineHeight: "100%", color: "#97E080" }}>Packed</span>
          </div>
          {/* Line */}
          <div style={{ width: "2px", height: "28px", backgroundImage: `url(${assetPath("/assets/icons/line-green.png")})`, backgroundRepeat: "repeat-y", backgroundPosition: "center" }} />
          {/* Out for Delivery */}
          <div className="flex flex-col items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
              <img src={assetPath("/assets/icons/out-for-delivery.png")} alt="Out for Delivery" className="h-6 w-6 object-contain" />
            </div>
            <span className="mt-2 text-center" style={{ fontWeight: 500, fontSize: "14px", lineHeight: "100%", color: "#84899D" }}>Out for Delivery</span>
          </div>
          {/* Line */}
          <div style={{ width: "2px", height: "28px", backgroundImage: `url(${assetPath("/assets/icons/line-green.png")})`, backgroundRepeat: "repeat-y", backgroundPosition: "center" }} />
          {/* Delivered */}
          <div className="flex flex-col items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
              <img src={assetPath("/assets/icons/delivered.png")} alt="Delivered" className="h-6 w-6 object-contain" />
            </div>
            <span className="mt-2 text-center" style={{ fontWeight: 500, fontSize: "14px", lineHeight: "100%", color: "#84899D" }}>Delivered</span>
          </div>
        </div>

        {/* Horizontal >=480px */}
        <div className="mt-4 hidden w-full items-start min-[480px]:flex">
          {/* Ordered */}
          <div className="flex flex-1 flex-col items-center min-w-17.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full text-white shadow-sm sm:h-12 sm:w-12 md:h-14 md:w-14" style={{ background: "linear-gradient(102.46deg, #FFFB91 -1.62%, #97E080 69.72%, #FFE7B2 129.7%)" }}>
              <img src={assetPath("/assets/icons/ordered.png")} alt="Ordered" className="h-6 w-6 object-contain sm:h-8 sm:w-8 md:h-10 md:w-10" />
            </div>
            <span className="mt-2 text-center sm:mt-3" style={{ fontWeight: 500, fontSize: "12px", lineHeight: "100%", color: "#000000" }}>Ordered</span>
          </div>
          {/* Line */}
          <div className="mt-5 sm:mt-6 md:mt-7" style={{ flex: "3 1 0%", height: "2px", minWidth: "20px", backgroundImage: `url(${assetPath("/assets/icons/line-green.png")})`, backgroundRepeat: "repeat-x", backgroundPosition: "center" }} />
          {/* Packed */}
          <div className="flex flex-1 flex-col items-center min-w-17.5">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white sm:h-12 sm:w-12 md:h-14 md:w-14">
              <div className="pointer-events-none absolute inset-0 rounded-full" style={{ padding: "1.5px", borderRadius: "50%", background: "repeating-conic-gradient(from 0deg, #D4F0A0 0deg 15deg, transparent 15deg 30deg, #E6F5A0 30deg 45deg, transparent 45deg 60deg)", WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude" }} />
              <img src={assetPath("/assets/icons/packed.png")} alt="Packed" className="relative h-5 w-5 object-contain sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </div>
            <span className="mt-2 text-center sm:mt-3" style={{ fontWeight: 600, fontSize: "12px", lineHeight: "100%", color: "#97E080" }}>Packed</span>
          </div>
          {/* Line */}
          <div className="mt-5 sm:mt-6 md:mt-7" style={{ flex: "3 1 0%", height: "2px", minWidth: "20px", backgroundImage: `url(${assetPath("/assets/icons/line-green.png")})`, backgroundRepeat: "repeat-x", backgroundPosition: "center" }} />
          {/* Out for Delivery */}
          <div className="flex flex-1 flex-col items-center min-w-17.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white sm:h-12 sm:w-12 md:h-14 md:w-14">
              <img src={assetPath("/assets/icons/out-for-delivery.png")} alt="Out for Delivery" className="h-5 w-5 object-contain sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </div>
            <span className="mt-2 text-center whitespace-nowrap sm:mt-3" style={{ fontWeight: 500, fontSize: "10px", lineHeight: "100%", color: "#84899D" }}>Out for Delivery</span>
          </div>
          {/* Line */}
          <div className="mt-5 sm:mt-6 md:mt-7" style={{ flex: "3 1 0%", height: "2px", minWidth: "20px", backgroundImage: `url(${assetPath("/assets/icons/line-green.png")})`, backgroundRepeat: "repeat-x", backgroundPosition: "center" }} />
          {/* Delivered */}
          <div className="flex flex-1 flex-col items-center min-w-17.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white sm:h-12 sm:w-12 md:h-14 md:w-14">
              <img src={assetPath("/assets/icons/delivered.png")} alt="Delivered" className="h-5 w-5 object-contain sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </div>
            <span className="mt-2 text-center sm:mt-3" style={{ fontWeight: 500, fontSize: "12px", lineHeight: "100%", color: "#84899D" }}>Delivered</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;