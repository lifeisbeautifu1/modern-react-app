import { Outlet } from "react-router";
import { Navbar, Footer } from "@/components";
import { usePageView } from "@/hooks";

export const Layout = () => {
  usePageView();

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
