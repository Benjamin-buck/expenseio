"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { PiPiggyBankBold } from "react-icons/pi";

const links = [
  { id: 1, label: "Overview", href: "/overview" },
  { id: 1, label: "Expenses", href: "/expenses" },
];

const NavBar = () => {
  const pathname = usePathname();
  return (
    <div className="border py-2 px-8">
      <div className="flex items-center gap-3 mx-auto container">
        <div className="items-center flex gap-3">
          <PiPiggyBankBold className="text-5xl text-pink-400" />
          <h1 className="text-pink-400 text-2xl font-semibold">Piggy Bank</h1>
        </div>
        <ul className="flex gap-3">
          {links.map(({ id, label, href }) => (
            <li key={id}>
              <Link
                href={href}
                className={`font-semibold ${
                  pathname === href ? "text-pink-400" : "body-text"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
