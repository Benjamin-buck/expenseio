"use client";
import NavUserProfile from "@/components/NavUserProfile";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { PiPiggyBankBold } from "react-icons/pi";

const links = [
  { id: 1, label: "Dashboard", href: "/overview" },
  { id: 2, label: "Expenses", href: "/expenses" },
  { id: 3, label: "Subscriptions", href: "/subscriptions" },
];

const NavBar = () => {
  const pathname = usePathname();
  return (
    <div className="border py-2 px-8 ">
      <div className="flex items-center gap-3 mx-auto justify-between container">
        <div className="items-center flex gap-3">
          <PiPiggyBankBold className="text-5xl text-pink-400" />
          <h1 className="text-pink-400 text-2xl font-semibold">Piggy Bank</h1>
          <ul className="flex gap-3">
            {links.map(({ id, label, href }) => (
              <li key={id}>
                <Link
                  href={href}
                  className={`font-semibold hover:text-pink-600 ${
                    pathname === href ? "text-pink-400" : "body-text"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <NavUserProfile />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
