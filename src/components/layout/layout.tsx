import { Outlet } from "react-router";
import { Navbar, Footer } from "@/components";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
