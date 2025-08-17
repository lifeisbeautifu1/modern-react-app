import { Outlet } from "react-router";
import { Navbar, Footer } from "@/components";
import { usePageView, useDetectBrowserVersion } from "@/hooks";

export const Layout = () => {
  usePageView();

  useDetectBrowserVersion();

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
