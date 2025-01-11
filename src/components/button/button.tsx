import type { ComponentProps } from "react";
import { cn } from "@/utils";

export const Button = (props: ComponentProps<"button">) => {
  return (
    <button
      {...props}
      className={cn(
        "rounded-[32px] py-3 px-6 font-bold bg-black text-white hover:bg-black/90 active:bg-black/80 transition focus-visible:ring-4 focus-visible:outline-none tracking-[0.1px]",
        props.className,
      )}
    />
  );
};
