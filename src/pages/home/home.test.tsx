import { expect, describe, test } from "vitest";

import { render } from "@/utils/test-utils";
import Home from "@/pages/home";

describe("Home component", () => {
  test("Home component renders without errors", () => {
    expect(() => render(<Home />)).not.toThrow();
  });
});
