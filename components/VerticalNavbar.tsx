import Image from "next/image";
import Link from "next/link";
import React from "react";

export const navLinks = [
  {
    label: "Home",
    href: "/dashboard",
    whiteLogo: "/home-white.svg",
    grayLogo: "/home-gray.svg",
  },
  {
    label: "Expenses",
    href: "/expenses",
    whiteLogo: "/expenses-white.svg",
    grayLogo: "/expenses-gray.svg",
  },
  {
    label: "Cards",
    href: "/cards",
    whiteLogo: "/cards-white.svg",
    grayLogo: "/cards-gray.svg",
  },
];

const VerticalNavbar = () => {
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
              <li className="bg-gray p-2 rounded-md" key={label}>
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
