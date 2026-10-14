/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "@/components/ui/card";

type ProductCardProps = {
  title: string;
  image: string;
  imageIndex?: number;
  price?: string;
  oldPrice?: string;
  compactPrice?: boolean;
  cartSpacing?: boolean;
  qty?: number;
  discount?: string;
  onIncrease?: () => void;
  onDecrease?: () => void;
  compact?: boolean;
  showQuantity?: boolean;
  showDelete?: boolean;
  showOldPrice?: boolean;
  showQty?: boolean;
  variant?: "default" | "wishlist";
  rating?: string;
  reviews?: string;
  icon?: "cart" | "bell";
  onRemove?: () => void;
  onAction?: () => void;
};

export const ProductCard = ({
  title,
  image,
  imageIndex,
  price = "1500.00",
  oldPrice = "2000.00",
  cartSpacing = false,
  qty,
  onIncrease,
  onDecrease,
  compact = false,
  showQuantity = true,
  showDelete = true,
  showOldPrice = true,
  showQty = false,
  variant = "default",
  rating = "4.5",
  reviews = "(5K)",
  icon = "cart",
  onRemove,
  onAction,
}: ProductCardProps) => {
  // ========== Wishlist Variant ==========
  if (variant === "wishlist") {
    return (
      <div className="relative flex flex-col overflow-hidden" style={{ width: "177px", height: "240px", borderRadius: "24px", border: "1px solid #EEEEEE" }}>
        <div className="relative mx-auto mt-1 flex items-center justify-center bg-white" style={{ width: "169px", height: "122px", borderRadius: "22px" }}>
          <Button
            type="button"
            onClick={onRemove}
            className="absolute right-1 top-2.5 z-10 cursor-pointer border-0 bg-transparent p-0 shadow-none hover:bg-transparent"
            aria-label="Remove from wishlist"
          >
            <img src="/assets/icons/heart-circle-(2).png" alt="Remove" className="h-10 w-10 object-contain" />
          </Button>

          <img
            src={image}
            alt={title}
            className={
              imageIndex === 0
                ? "h-27.25 w-29 grayscale"
                : imageIndex === 1
                  ? "rotate-45"
                  : "max-h-23.75 max-w-27 object-contain"
            }
          />
        </div>

        <h3 className="mx-2 mt-2 min-h-8 line-clamp-2 whitespace-pre-line text-[12px] font-medium leading-[1.3] text-primary">
          {title}
        </h3>

        <div className="mx-2 flex items-center gap-0.5 px-1">
          <img src="/assets/icons/Group-76720.png" alt="" className="h-2.75 w-2.75 object-contain" />
          <span className="text-[11px] font-medium text-primary">{rating}</span>
          <span className="text-[11px] text-[#84899D]">{reviews}</span>
        </div>

        <div className="mx-auto mb-1.5 mt-auto flex items-center justify-between bg-white pl-4 pr-1" style={{ width: "165px", height: "44px", borderRadius: "68px" }}>
          <div className="flex items-center gap-1">
            <img src="/assets/icons/SAR.png" alt="SAR" className="h-3.5 w-3.5 object-contain" />
            <span className="text-[13px] font-bold text-primary">{price}</span>
          </div>

          <Button
            type="button"
            onClick={onAction}
            className="flex h-10 w-10 items-center justify-center rounded-full p-0 shadow-none hover:opacity-100"
            style={{
              border: "0.4px solid #000000",
              background: icon === "bell"
                ? "linear-gradient(202.05deg, #F8E64B -1.71%, #FFF6A7 89.19%)"
                : "#8EF86C",
            }}
            aria-label={icon === "bell" ? "Notify me" : "Add to cart"}
          >
            {icon === "bell" ? (
              <img src="/assets/icons/notification.png" alt="Notify me" className="h-5 w-5 object-contain" />
            ) : (
              <img src="/assets/icons/shopping-cart.png" alt="Add to cart" className="h-5 w-5 object-contain" />
            )}
          </Button>
        </div>
      </div>
    );
  }

  // ========== Compact ==========
  if (compact) {
    return (
      <div className="flex h-full min-w-0 flex-col rounded-4xl bg-transparent">
        <div className="relative mx-auto flex h-52.5 w-52.5 max-w-full shrink-0 items-center justify-center rounded-[27px] bg-white">
          <img src={image} alt={title} className="h-41.25 w-41.25 object-contain" />

          {showDelete && (
            <Button
              type="button"
              variant="ghost"
              aria-label={`Remove ${title}`}
              className="absolute right-2 top-2 flex h-10.5 w-10.5 cursor-pointer items-center justify-center rounded-[68px] bg-[#F2F3F7] p-0"
            >
              <img src="/assets/icons/delete.png" alt="Delete" className="object-contain" />
            </Button>
          )}
        </div>

        <p className="mt-4 line-clamp-2 min-h-10 whitespace-pre-line text-sm font-medium text-primary">{title}</p>

        <div className="mt-3 flex flex-col items-start">
          <div className="flex items-center gap-2">
            <img src="/assets/icons/SAR.png" alt="SAR" className="h-5 w-5 object-contain" />
            <span className="text-xl font-bold leading-none text-primary">{price}</span>
          </div>

          {showOldPrice && (
            <span className="mt-1 text-sm font-semibold leading-none text-[#ff3e3e] line-through">{oldPrice}</span>
          )}
        </div>

        {showQty && (
          <div className="mt-4 text-[20px] font-medium leading-[100%] tracking-[0%] text-[#84899D]">Qty: 1</div>
        )}

        {showQuantity && typeof qty === "number" && (
          <div className="mt-4 flex h-12 items-center justify-between rounded-full bg-white px-1">
            <Button
              type="button"
              variant="ghost"
              aria-label="Decrease quantity"
              onClick={onDecrease}
              className="flex h-10.5 w-10.5 shrink-0 cursor-pointer items-center justify-center rounded-[48px] bg-[#F2F3F7] p-0"
            >
              <img src="/assets/icons/minus.png" alt="Decrease" className="h-4 w-4 object-contain" />
            </Button>

            <span className="text-base font-semibold text-primary">{qty}</span>

            <Button
              type="button"
              variant="ghost"
              aria-label="Increase quantity"
              onClick={onIncrease}
              className="flex h-10.5 w-10.5 shrink-0 cursor-pointer items-center justify-center rounded-[48px] bg-[#121212] p-0"
            >
              <img src="/assets/icons/plus.png" alt="Increase" className="h-4 w-4 object-contain" />
            </Button>
          </div>
        )}
      </div>
    );
  }

  // ========== Default ==========
  return (
    <article className="pt-4.25">
      <Card className="relative h-120 overflow-visible rounded-[40px] border-0 bg-[#f2f3f7] shadow-none">
        <CardContent className="flex h-full flex-col p-0">
          <Badge className="absolute left-1/2 -top-4.25 z-20 flex h-11.25 w-31.75 -translate-x-1/2 items-center justify-center rounded-[48px] border border-black bg-[radial-gradient(45.83%_45.83%_at_50%_50%,#BAFFA4_0%,#8EF86C_100%)]">
            <img src="/assets/icons/discount-shape.png" alt="" className="mr-2 h-6 w-6" />
            <span className="mr-3 text-[22px] font-semibold">SALE</span>
          </Badge>

          <div className="mx-auto mt-4 flex h-61.75 w-[88.89%] items-center justify-center overflow-hidden rounded-[40px] bg-white">
            <img src={image} alt={title} className="h-51.5 w-64.5 object-contain" />
          </div>

          <h3 className="mx-auto mt-3.75 w-[89%] whitespace-pre-line text-[18px] font-medium text-primary">{title}</h3>

          <div className="mx-auto mt-5 flex w-[89%] items-center justify-between">
            <div className="flex items-center">
              <img src="/assets/icons/SAR.png" alt="SAR" className="h-6.25 w-6.25 object-contain" />

              <div className="ml-3.25 flex flex-col">
                <span className="text-base font-bold text-primary">{price}</span>
                <span className="text-[14px] font-medium text-[#ff3e3e] line-through">{oldPrice}</span>
              </div>
            </div>

            <div className="flex items-center">
              <img src="/assets/icons/Group-76720.png" alt="Rating" className="mr-2 h-4 w-4.25 object-contain" />

              <p className="text-lg font-medium">
                <span className="text-primary">4.5</span>
                <span className="text-[#84899d]">(5K)</span>
              </p>
            </div>
          </div>

          <div className={`mx-auto mb-3.75 flex h-13.25 w-[89%] items-center rounded-[68px] bg-white ${cartSpacing ? "mt-8" : "mt-auto"}`}>
            <Button type="button" variant="ghost" className="ml-5 h-auto bg-transparent px-0 text-[16px] font-semibold text-primary shadow-none">
              Add to Cart
            </Button>

            <div
              className="ml-auto mr-2 flex h-12 w-12 items-center justify-center rounded-full border border-black"
              style={{ background: "radial-gradient(63.89% 63.89% at 50% 50%, #BAFFA4 0%, #8EF86C 100%)" }}
            >
              <Button type="button" variant="ghost" aria-label={`Add ${title} to cart`} className="h-auto bg-transparent p-0 shadow-none">
                <img src="/assets/icons/shopping-cart.png" alt="" aria-hidden="true" className="h-7 w-7 object-contain" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </article>
  );
};