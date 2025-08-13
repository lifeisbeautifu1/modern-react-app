import { useEffect } from "react";
import { useLocation } from "react-router";
import ReactGA from "react-ga4";

export const usePageView = () => {
  const location = useLocation();

  useEffect(() => {
    if (import.meta.env.MODE === "production") {
      ReactGA.send({
        hitType: "pageview",
        page: location.pathname,
      });
    }
  }, [location.pathname]);
};
