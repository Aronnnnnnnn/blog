"use client";

import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeButton from "./ThemeButton";
import Icon from "@/components/Icons";

const Navbar = () => {
  const pathName = usePathname() || "/";
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between h-16">
              <div className="flex justify-between w-full">
                <div className="flex items-center">
                  <Link href="/">
                    <h1 className="text-2xl font-medium flex gap-2 items-center">
                      <Icon.Logo />
                      <span>HBD</span>
                    </h1>
                  </Link>
                </div>

                <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
                  <Link
                    href="/main"
                    prefetch
                    className={`${
                      pathName === "/main"
                        ? "border-gray-500 dark:text-white inline-flex items-center border-b-2 text-md font-medium"
                        : ""
                    }`}
                  >
                    Main
                  </Link>
                  <Link
                    href="/gallery"
                    prefetch
                    className={`${
                      pathName === "/gallery"
                        ? "border-gray-500 dark:text-white inline-flex items-center border-b-2 text-md font-medium"
                        : ""
                    }`}
                  >
                    Gallery
                  </Link>
                  <ThemeButton />
                </div>
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                <ThemeButton />
                <Disclosure.Button
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none 
                               dark:hover:bg-gray-800"
                >
                  {open ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link
                href="/main"
                prefetch
                className={`${
                  pathName == "/"
                    ? "bg-teal-50 border-sky-500 text-sky-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-sky-500 block pl-3 pr-4 py-2 dark:hover:bg-gray-700 border-l-4 text-base font-medium dark:text-white"
                }`}
              >
                Main
              </Link>
              <Link
                href="/gallery"
                prefetch
                className={`${
                  pathName == "/gallery"
                    ? "bg-teal-50 border-sky-500 text-sky-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-sky-500 block pl-3 pr-4 py-2 dark:hover:bg-gray-700 border-l-4 text-base font-medium dark:text-white"
                }`}
              >
                Gallery
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
