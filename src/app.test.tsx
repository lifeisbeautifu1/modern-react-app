import { expect, describe, test } from "vitest";

import { render } from "@/utils/test-utils";
import { App } from "@/app";

describe("App component", () => {
  test("App component renders without errors", () => {
    expect(() => render(<App />)).not.toThrow();
  });
});
