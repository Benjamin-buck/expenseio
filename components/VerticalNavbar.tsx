import Image from "next/image";
import Link from "next/link";
import React from "react";

export const navLinks = [
  { label: "Home", whiteLogo: "/home-white.svg", grayLogo: "/home-gray.svg" },
  { label: "Home", whiteLogo: "/home-white.svg", grayLogo: "/home-gray.svg" },
];

const VerticalNavbar = () => {
  return (
    <div className="h-[100vh] w-[5rem] bg-black flex items-center flex-col fixed">
      <Image
        src="/logo.svg"
        width={42}
        height={42}
        alt="logo"
        className="pt-4"
      />
      <ul className="my-10 flex flex-col gap-4">
        {navLinks.map(({ label, grayLogo, whiteLogo }) => (
          <li className="bg-gray p-2 rounded-md" key={label}>
            <Link href="/">
              <Image src={whiteLogo} width={25} height={25} alt="home icon" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VerticalNavbar;
