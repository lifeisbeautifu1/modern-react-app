import type { ComponentProps } from "react";
import { Link as RouterLink } from "react-router";
import { cn } from "@/utils";

interface LinkProps {
  /** Link appearance. @default "on-light" */
  appearance?: "on-light" | "on-dark";
}

export const Link = ({
  appearance = "on-light",
  className,
  ...restProps
}: ComponentProps<typeof RouterLink> & LinkProps) => {
  return (
    <RouterLink
      {...restProps}
      className={cn(
        "font-medium transition focus-visible:outline-hidden focus-visible:ring-2 tracking-[0.1px]",
        {
          "text-black hover:text-black/80 active:text-black/60":
            appearance === "on-light",
          "text-white hover:text-white/80 active:text-white/60":
            appearance === "on-dark",
        },
        className,
      )}
    />
  );
};
