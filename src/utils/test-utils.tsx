import type { PropsWithChildren, ReactNode } from "react";
import { BrowserRouter as Router } from "react-router";
import { render } from "@testing-library/react";
import type { RenderOptions, RenderResult } from "@testing-library/react";

// eslint-disable-next-line
const AllTheProviders = ({ children }: PropsWithChildren) => {
  return <Router>{children}</Router>;
};

const customRender = (
  ui: ReactNode,
  options?: Omit<RenderOptions, "queries">,
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options });

export { customRender as render };
