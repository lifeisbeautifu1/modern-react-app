import { Outlet } from "react-router";
import { Navbar, Footer, ErrorBoundary } from "@/components";
import { usePageView, useDetectBrowserVersion } from "@/hooks";

export const Layout = () => {
  usePageView();

  useDetectBrowserVersion();

  return (
    <>
      <Navbar />
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
      <Footer />
    </>
  );
};
