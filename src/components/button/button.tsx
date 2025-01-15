import type { ComponentProps } from "react";
import { cn } from "@/utils";

interface ButtonProps {
  /** Button appearance. @default "on-light" */
  appearance?: "on-light" | "on-dark";
}

export const Button = ({
  appearance = "on-light",
  className,
  ...restProps
}: ComponentProps<"button"> & ButtonProps) => {
  return (
    <button
      {...restProps}
      className={cn(
        "rounded-[32px] py-3 px-6 font-bold transition focus-visible:ring-4 focus-visible:outline-none tracking-[0.1px]",
        {
          "bg-black text-white hover:bg-black/90 active:bg-black/80":
            appearance === "on-light",
          "bg-white text-black hover:bg-white/90 active:bg-white/80":
            appearance === "on-dark",
        },
        className,
      )}
    />
  );
};
