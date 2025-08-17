import { expect, describe, test } from "vitest";

import { render } from "@/utils/test-utils";
import ErrorPage from "@/pages/error";

describe("ErrorPage component", () => {
  test("ErrorPage component throws an error", () => {
    expect(() => render(<ErrorPage />)).toThrow();
  });
});
