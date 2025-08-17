import ReactGA from "react-ga4";

export const logErrorEvent = (error: Error) => {
  ReactGA.event({
    category: "Error",
    action: "React Error",
    label: `${error.message}${error.stack ? ` | ${error.stack}` : ""}`,
  });
};
