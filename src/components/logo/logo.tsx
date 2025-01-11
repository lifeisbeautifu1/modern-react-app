import type { ComponentProps } from "react";
import { Link } from "react-router";
import { cn } from "@/utils";

export const Logo = (props: Partial<ComponentProps<typeof Link>>) => {
  return (
    <Link
      {...props}
      to="/"
      className={cn(
        "text-2xl font-black uppercase focus-visible:outline-none focus-visible:ring-2",
        props.className,
      )}
    >
      Brand™
    </Link>
  );
};
