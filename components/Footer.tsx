import { navLinks } from "@/app/Navbar";
import { Label } from "@radix-ui/react-select";
import Link from "next/link";
import React from "react";

export const supportLinks = [{ label: "FAQ", href: "/faq" }];
export const communityLinks = [{ label: "Forum", href: "/forum" }];

const Footer = () => {
  return (
    <footer className="mt-6 w-full bg-black text-white">
      <div className="mx-auto container">
        <div className="grid grid-cols-8 py-10">
          <div className="col-span-2 ">
            <h4 className="font-semibold text-lg">Navigation</h4>
            <ul className="space-y-2 mt-2">
              {navLinks.map((link) => (
                <li>
                  <Link href={link.href} className="text-gray-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 ">
            <h4 className="font-semibold text-lg">Community</h4>
            <ul className="space-y-2 mt-2">
              {communityLinks.map((link) => (
                <li>
                  <Link href={link.href} className="text-gray-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 ">
            <h4 className="font-semibold text-lg">Support</h4>
            <ul className="space-y-2 mt-2">
              {supportLinks.map((link) => (
                <li>
                  <Link href={link.href} className="text-gray-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 ">
            <h4 className="font-semibold text-lg">Newsletter</h4>
            <p className="text-gray-400">
              Stay up to date with all of our new features and releases.{" "}
            </p>
            <div className="flex flex-col my-4 gap-2">
              <input
                type="email"
                placeholder="john.smith@gmail.com"
                className="my-2 py-2 px-4 rounded-md"
              />
              <button className="bg-white text-black py-2 rounded-md font-bold">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
