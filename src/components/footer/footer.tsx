import type { ComponentProps } from "react";
import { Link, Logo } from "@/components";
import { cn } from "@/utils";

export const Footer = (props: ComponentProps<"footer">) => {
  return (
    <footer {...props} className={cn("bg-black text-white", props.className)}>
      <div className="container">
        <div className="px-8 py-12 text-center">
          <Logo />
          <ul className="flex justify-between gap-[10px] mt-6">
            <li>
              <h5 className="text-base font-bold">First column</h5>
              <ul className="flex flex-col gap-2 mt-4">
                <li>
                  <Link
                    to="/"
                    appearance="on-dark"
                    className="text-sm font-regular"
                  >
                    First page
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    appearance="on-dark"
                    className="text-sm font-regular"
                  >
                    Second page
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    appearance="on-dark"
                    className="text-sm font-regular"
                  >
                    Third
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    appearance="on-dark"
                    className="text-sm font-regular"
                  >
                    Fourth
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <h5 className="text-base font-bold">Second</h5>
              <ul className="flex flex-col gap-2 mt-4">
                <li>
                  <Link
                    to="/"
                    appearance="on-dark"
                    className="text-sm font-regular"
                  >
                    Fifth page
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    appearance="on-dark"
                    className="text-sm font-regular"
                  >
                    Sixth page
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    appearance="on-dark"
                    className="text-sm font-regular"
                  >
                    Eighth
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <h5 className="text-base font-bold">Third</h5>
              <ul className="flex flex-col gap-2 mt-4">
                <li>
                  <Link
                    to="/"
                    appearance="on-dark"
                    className="text-sm font-regular"
                  >
                    Ninth page
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    appearance="on-dark"
                    className="text-sm font-regular"
                  >
                    Tenth page
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    appearance="on-dark"
                    className="text-sm font-regular"
                  >
                    Eleventh
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className="mt-5">
            <h6 className="font-bold">Subscribe</h6>
            <input
              placeholder="Enter email"
              className="px-6 py-3 rounded-[40px] bg-white/15 placeholder:text-gray-300 mt-6 focus:outline-none focus:ring-4"
            />
            <p className="mt-5 text-sm text-gray-300">
              Join our newsletter to stay up to date on features and releases
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
