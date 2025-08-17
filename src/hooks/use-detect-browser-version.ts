import { useEffect } from "react";
import { detect } from "detect-browser";
import ReactGA from "react-ga4";

export const useDetectBrowserVersion = () => {
  useEffect(() => {
    const browser = detect();

    if (browser) {
      ReactGA.set({
        user_properties: {
          browser_name: browser.name,
          browser_version: browser.version,
          os: browser.os,
        },
      });
    }
  }, []);
};
