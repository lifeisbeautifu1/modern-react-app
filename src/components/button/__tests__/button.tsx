import { describe, expect, test, vi } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { render } from "@/utils/test-utils";
import { Button } from "@/components";

describe("Button component", () => {
  const user = userEvent.setup();

  test("Button component renders without errors", () => {
    expect(() => render(<Button>Button</Button>)).not.toThrow();
  });

  test("Button onClick callback gets called", async () => {
    const handleClick = vi.fn();

    render(<Button onClick={handleClick}>Button</Button>);

    const button = screen.getByRole("button");

    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("Button onClick callback doesn't get called with disabled prop", async () => {
    const handleClick = vi.fn();

    render(
      <Button onClick={handleClick} disabled>
        Button
      </Button>,
    );

    const button = screen.getByRole("button");

    await user.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });

  test("Button forwards ref", () => {
    const refCallback = vi.fn();

    render(<Button ref={refCallback}>Button</Button>);

    expect(refCallback).toHaveBeenCalledTimes(1);
  });
});
