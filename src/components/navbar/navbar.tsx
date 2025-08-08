import type { ComponentProps } from "react";
import { Button, Link, Logo } from "@/components";
import { Bars3Icon } from "@heroicons/react/16/solid";
import { cn } from "@/utils";

export const Navbar = (props: ComponentProps<"nav">) => {
  return (
    <nav
      {...props}
      className={cn(
        "flex items-center justify-between gap-4 px-6 py-5 sm:px-8 sm:py-6",
        props.className,
      )}
    >
      <Logo className="text-lg leading-none sm:text-2xl" />
      <ul className="items-center hidden gap-6 sm:flex">
        <li>
          <Link to="/">Link 1</Link>
        </li>
        <li>
          <Link to="/">Link 2</Link>
        </li>
        <li>
          <Link to="/">Link 3</Link>
        </li>
        <li>
          <Link to="/">Link 4</Link>
        </li>
        <li>
          <Link to="/">Link 5</Link>
        </li>
      </ul>
      <button
        aria-label="Open navigation menu"
        className="p-1 text-white transition bg-black rounded-full sm:hidden focus-visible:outline-hidden focus-visible:ring-2 active:bg-black/80"
      >
        <Bars3Icon className="size-4" />
      </button>
      <Button className="hidden sm:inline-flex">Action</Button>
    </nav>
  );
};
