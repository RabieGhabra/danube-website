/* eslint-disable @next/next/no-img-element */
"use client";
import { assetPath } from "@/lib/asset-path";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarMenu = () => {
  const currentPath = usePathname();

  const menuItems = [
    { name: "Edit Profile", path: "/dashboard-edit-profile", icon: assetPath("/assets/icons/operator-(2).png"), active: true },
    { name: "My Orders", path: "/dashboard-my-orders", icon: assetPath("/assets/icons/my-orders.png"), active: true },
    { name: "My Wishlist", path: "/dashboard-my-wishlist", icon: assetPath("/assets/icons/love.png"), active: true },
    { name: "Loyalty Account", icon: assetPath("/assets/icons/gift-(2).png"), active: false },
    { name: "Loyalty Reward", icon: assetPath("/assets/icons/loyalty-reward.png"), active: false },
    { name: "Address Book", icon: assetPath("/assets/icons/location-pin.png"), active: false },
    { name: "Cards", icon: assetPath("/assets/icons/payment.png"), active: false },
    { name: "Contact Preferences", icon: assetPath("/assets/icons/operator-(2).png"), active: false },
    { name: "Logout", icon: assetPath("/assets/icons/logout.png"), active: false, isDanger: true },
  ];

  return (
    <div
      className="flex flex-col gap-1 lg:justify-between p-3 md:p-5 w-full lg:w-96.25 lg:min-w-96.25 h-fit lg:h-171 self-start"
      style={{
        background: "#F2F3F7",
        borderRadius: "37px",
      }}
    >
      {menuItems.map((item) => {
        const isActive = item.active && currentPath === item.path;

        const baseClasses = `
          flex items-center gap-3 lg:gap-4 transition-all duration-200 cursor-pointer
          rounded-[24px] font-semibold text-[16px] leading-none text-[#121212]
          py-2.5 px-3 lg:p-4
          ${isActive ? "bg-white shadow-md" : ""}
        `;

        const activeStyle: React.CSSProperties = isActive
          ? { width: "100%", minHeight: "50px" }
          : {};

        const content = (
          <>
            <img
              src={item.icon}
              alt={item.name}
              className="w-5 h-5 lg:w-6 lg:h-6 object-contain shrink-0"
            />
            <span className="text-primary">{item.name}</span>
          </>
        );

        if (item.active && item.path) {
          return (
            <Link
              key={item.name}
              href={item.path}
              className={baseClasses}
              style={activeStyle}
            >
              {content}
            </Link>
          );
        }

        return (
          <div key={item.name} className={baseClasses} style={activeStyle}>
            {content}
          </div>
        );
      })}
    </div>
  );
};

export default SidebarMenu;