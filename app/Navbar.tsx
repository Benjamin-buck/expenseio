import Image from "next/image";
import Link from "next/link";
import React from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
];

const Navbar = () => {
  return (
    <nav className="w-full text-white bg-black">
      <div className="mx-auto container max-sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/Logo.svg" width={45} height={45} alt="logo" />
          <h1 className="text-2xl font-instrumentSans font-semibold">
            expense app
          </h1>
        </div>
        <ul className="flex font-semibold gap-8 max-md:hidden block">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <div>
          <button className="bg-white text-black px-3 py-2 font-semibold font-instrumentSans rounded-md">
            Log in / Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
