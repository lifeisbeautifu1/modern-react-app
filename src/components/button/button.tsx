import { forwardRef } from "react";
import type { ComponentProps } from "react";

export const Button = forwardRef<HTMLButtonElement, ComponentProps<"button">>(
  (props, ref) => {
    return <button ref={ref} {...props} />;
  },
);

Button.displayName = "Button";
