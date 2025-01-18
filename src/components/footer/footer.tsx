import type { ComponentProps, FormEventHandler } from "react";
import { Link, Logo } from "@/components";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { cn } from "@/utils";

export const Footer = (props: ComponentProps<"footer">) => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };

  return (
    <footer {...props} className={cn("bg-black text-white", props.className)}>
      <div className="container">
        <div className="px-8 py-12 text-center md:text-left md:py-6 md:px-5 lg:px-8 lg:py-12 xl:py-24 xl:px-0 xl:flex xl:justify-between xl:items-start">
          <Logo />
          <div className="md:flex md:justify-between xl:contents">
            <ul className="flex text-left justify-between md:grow gap-[10px] mt-6 xl:mt-0 xl:contents">
              <li className="grow xl:grow-0">
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
              <li className="grow xl:grow-0">
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
              <li className="grow xl:grow-0">
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
            <div className="mt-5 md:max-w-60 xl:mt-0">
              <h6 className="font-bold">Subscribe</h6>
              <form onSubmit={handleSubmit} className="relative mt-6">
                <input
                  name="email"
                  placeholder="Enter email"
                  className="px-6 py-3 rounded-[40px] w-full bg-white/15 placeholder:text-gray-300 focus:outline-none focus:ring-4"
                />
                <button
                  type="submit"
                  aria-label="Submit form"
                  className="absolute text-white transition right-6 top-[50%] translate-y-[-50%] hover:text-white/80 active:text-white/60 focus-visible:outline-none focus-visible:ring-2"
                >
                  <PaperAirplaneIcon className="size-5" />
                </button>
              </form>
              <p className="mt-5 text-sm text-gray-300">
                Join our newsletter to stay up to date on features and releases
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
