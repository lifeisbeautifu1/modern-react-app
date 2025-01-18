import { expect, describe, test } from "vitest";
import { screen } from "@testing-library/react";

import { render } from "@/utils/test-utils";
import Home, { Testimonial, CustomDot, testimonials } from "@/pages/home";

describe("Home component", () => {
  test("Home component renders without errors", () => {
    expect(() => render(<Home />)).not.toThrow();
  });
});

describe("Testimonial component", () => {
  test("Testimonial component renders without errors", () => {
    expect(() =>
      render(
        <Testimonial
          fullName="Name Surname"
          description="Description"
          avatarUrl="https://avatar.iran.liara.run/public/1"
          testimonial="“A testimonial describing what the person thinks about this service, product or startup in general.”"
        />,
      ),
    ).not.toThrow();
  });
});

describe("CustomDot component", () => {
  test("CustomDot component renders without errors", () => {
    expect(() => render(<CustomDot />)).not.toThrow();
  });

  test("CustomDot if slidesToShow != testimonials.length then we render dot", () => {
    render(<CustomDot carouselState={{ slidesToShow: 1 }} />);

    const dot = screen.queryByRole("button");

    expect(dot).not.toBeNull();
  });

  test("CustomDot if slidesToShow === testimonials.length then we don't render dot", () => {
    render(<CustomDot carouselState={{ slidesToShow: testimonials.length }} />);

    const dot = screen.queryByRole("button");

    expect(dot).toBeNull();
  });

  test("CustomDot non active dot renders with gray color", () => {
    render(<CustomDot active={false} />);

    const dot = screen.getByRole("button");

    expect(dot.classList).toContain("bg-gray-200");
  });

  test("CustomDot active dot renders with black color", () => {
    render(<CustomDot active />);

    const dot = screen.getByRole("button");

    expect(dot.classList).toContain("bg-black");
  });
});
