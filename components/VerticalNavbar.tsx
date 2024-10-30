"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const navLinks = [
  {
    label: "Home",
    href: "/dashboard/home",
    whiteLogo: "/home-white.svg",
    grayLogo: "/home-gray.svg",
  },
  {
    label: "Expenses",
    href: "/dashboard/expenses",
    whiteLogo: "/expenses-white.svg",
    grayLogo: "/expenses-gray.svg",
  },
  {
    label: "Cards",
    href: "/dashboard/cards",
    whiteLogo: "/cards-white.svg",
    grayLogo: "/cards-gray.svg",
  },
];

const VerticalNavbar = () => {
  const currentPath = usePathname();
  return (
    <div>
      <div className="h-[100vh] w-[5rem] bg-black flex items-center flex-col fixed">
        <Image
          src="/logo.svg"
          width={42}
          height={42}
          alt="logo"
          className="pt-4"
        />
        <div className="flex justify-between h-full items-center flex-col">
          <ul className="my-10 flex flex-col gap-4">
            {navLinks.map(({ label, whiteLogo, href }) => (
              <li
                className={`${
                  currentPath === href && "bg-[#2F2F2D] "
                } rounded-md p-2`}
                key={label}
              >
                <Link href={href!}>
                  <Image
                    src={whiteLogo}
                    width={25}
                    height={25}
                    alt="home icon"
                  />
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/">
            <Image
              src="/settings-gray.svg"
              width={25}
              height={25}
              alt="home icon"
              className="mb-5"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerticalNavbar;
