"use client";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import SidebarMenu from "../dashboard/SidebarMenu";
import Container from "../ui/container";
import { OrderCard } from "../dashboard/OrderCard";
import { Button } from "../ui/button";

const ordersData = [
  { id: 1, time: "15 mins", orderId: "#ays9-ek4h", totalAmount: "750.00", orderDate: "10 Jan 2026" },
  { id: 2, time: "15 mins", orderId: "#ays9-ek4h", totalAmount: "750.00", orderDate: "10 Jan 2026" },
  { id: 3, time: "15 mins", orderId: "#ays9-ek4h", totalAmount: "750.00", orderDate: "10 Jan 2026" },
];

export const DashboardMyOrders = () => {
  return (
    <>
      <Header />

      <Container className="flex flex-col lg:flex-row gap-3 sm:gap-4 lg:gap-6 mt-4 sm:mt-5 mb-10 sm:mb-15 items-start">
        <SidebarMenu />

        <div className="w-full flex-1 bg-[#F2F3F7] p-4 rounded-3xl">
          <div className="bg-[#FFFFFF] rounded-2xl p-1.5 flex mb-6 shadow-sm">
            <Button className="flex-1 py-3 rounded-xl text-[16px] font-semibold bg-[#1a1a1a] text-[#8cdc7c] border-0 shadow-none">
              Upcoming
            </Button>

            <Button className="flex-1 py-3 rounded-xl text-[16px] font-semibold bg-transparent text-gray-500 border-0 shadow-none">
              Past
            </Button>
          </div>

          <div className="flex flex-col gap-7">
            {ordersData.map((order) => (
              <OrderCard
                key={order.id}
                time={order.time}
                orderId={order.orderId}
                totalAmount={order.totalAmount}
                orderDate={order.orderDate}
              />
            ))}
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
};
