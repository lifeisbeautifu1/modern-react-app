import { expect, describe, test } from "vitest";

import { render } from "@/utils/test-utils";
import About from "@/pages/about";

describe("About component", () => {
  test("About component renders without errors", () => {
    expect(() => render(<About />)).not.toThrow();
  });
});
