import { expect, describe, test } from "vitest";

import { render } from "@test-utils";
import NotFound from "@/pages/404";

describe("NotFound component", () => {
  test("NotFound component renders without errors", () => {
    expect(() => render(<NotFound />)).not.toThrow();
  });
});
