"use client";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import SidebarMenu from "../dashboard/SidebarMenu";
import { EditProfileForm } from "../dashboard/EditProfileForm";
import Container from "../ui/container";

export const DashboardEditProfile = () => {
  return (
    <>
      <Header />
      <Container className="flex flex-col lg:flex-row gap-3 sm:gap-4 lg:gap-6 mt-4 sm:mt-5 mb-10 sm:mb-15 items-start">
        <SidebarMenu />
        <EditProfileForm />
      </Container>
      <Footer />
    </>
  );
};
