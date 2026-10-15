/* eslint-disable @next/next/no-img-element */
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

interface OrderCardProps {
  time: string;
  orderId: string;
  totalAmount: string;
  orderDate: string;
}

export const OrderCard = ({
  time,
  orderId,
  totalAmount,
  orderDate,
}: OrderCardProps) => {
  const details = [
    { icon: "/danube-website/assets/icons/order-cart.png", label: "Order ID", value: orderId },
    { icon: "/danube-website/assets/icons/payment.png", label: "Total Amount", value: totalAmount, sar: true },
    { icon: "/danube-website/assets/icons/order-date.png", label: "Order Date", value: orderDate },
  ];

  return (
    <div className="relative mt-4 flex flex-col items-center gap-4 rounded-4xl border border-gray-100 bg-white px-2 py-10 shadow-sm sm:px-6 sm:py-12 xl:flex-row xl:gap-5">
      <Badge className="absolute -top-3 left-8 flex h-9 w-[106.99px] items-center justify-center gap-1.5 rounded-[22.5px] bg-[#1a1a1a] px-0 py-0 text-[16px] font-semibold text-[#8cdc7c] shadow-md">
        <img
          src="/danube-website/assets/icons/time-slot.png"
          alt=""
          className="h-6 w-5 object-contain"
        />
        {time}
      </Badge>

      <div className="mt-2 flex shrink-0 items-center xl:mt-0">
        <div className="relative z-30 flex h-24 w-24 items-center justify-center rounded-full border border-gray-100 bg-white shadow-sm md:h-28 md:w-28">
          <img
            src="/danube-website/assets/images/bread-(2).png"
            alt="Bread"
            className="h-16 w-12 object-contain md:h-20 md:w-16"
          />
        </div>

        <div className="relative z-20 -ml-12 flex h-24 w-24 items-center justify-center rounded-full border border-gray-100 bg-white shadow-sm md:-ml-14 md:h-28 md:w-28">
          <img
            src="/danube-website/assets/images/mint.png"
            alt="mint"
            className="h-24 w-24 rotate-60 object-contain md:h-28 md:w-28"
          />
        </div>

        <div className="relative z-10 -ml-12 flex h-24 w-24 items-center justify-center rounded-full bg-[#8CD685] shadow-sm md:-ml-14 md:h-28 md:w-28">
          <span className="ml-10 text-[16px] font-semibold text-black">
            +20
          </span>
        </div>
      </div>

      <div className="mt-3 grid w-full flex-1 grid-cols-1 gap-6 text-center min-[480px]:grid-cols-3 xl:mt-0">
        {details.map(({ icon, label, value, sar }) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center gap-2 min-[1360px]:flex-row min-[1360px]:justify-start"
          >
            <img src={icon} alt={label} className="h-7 w-7 object-contain" />
            <div className="flex flex-col items-center gap-0 min-[1360px]:items-start">
              <span className="mb-0.5 text-[16px] font-medium text-gray-400">
                {label}
              </span>
              <span className="flex items-center gap-1 text-[18px] font-semibold text-gray-800">
                {sar && (
                  <img
                    src="/danube-website/assets/icons/sar.png"
                    alt="SAR"
                    className="h-6 w-5 object-contain"
                  />
                )}
                {value}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex w-full justify-center xl:mt-0 xl:w-auto">
        <Button className="h-12 w-full max-w-[167.69px] cursor-pointer rounded-[19px] bg-[#8cdc7c] px-0 py-0 text-[14px] font-semibold text-primary transition-colors sm:h-13 sm:text-[15px] xl:h-13.5 xl:w-[167.69px] xl:text-[16px]">
          Track
        </Button>
      </div>
    </div>
  );
};
