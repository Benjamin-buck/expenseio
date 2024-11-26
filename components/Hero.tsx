import Image from "next/image";
import Link from "next/link";
import React from "react";
import { navLinks } from "./VerticalNavbar";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h1 className="text-5xl text-center font-semibold mb-2">
        Get your money in check.
      </h1>
      <p className="mb-5 text-center max-w-[600px]">
        Manage your money smarter, not harder. Our AI-powered budgeting app
        helps you track expenses, plan budgets, and achieve your financial goals
        effortlessly.
      </p>
      <Link href="/" className="">
        <button className="bg-black text-white px-6 py-2 rounded-md font-instrumentSans font-semibold">
          Sign Up Today
        </button>
      </Link>
      {/* App Re-construction */}
      <div className="container mx-auto rounded-md my-10 border-4 border-gray-200">
        {/* Top Bar */}
        <div className="w-full bg-black py-2 rounded-t-md">
          <div className="px-2 flex gap-2">
            <div className="w-[12px] h-[12px] rounded-full bg-red-500" />
            <div className="w-[12px] h-[12px] rounded-full bg-yellow-500" />
            <div className="w-[12px] h-[12px] rounded-full bg-green-500" />
          </div>
        </div>
        {/* App Section */}
        <div className="w-full h-[600px]">
          <div className="h-full bg-black text-white w-fit px-4">
            {/* Top Half */}
            <div>
              <Image
                src="/logo.svg"
                width={42}
                height={42}
                alt="logo"
                className="pt-4"
              />
              <ul>
                {navLinks.map((link) => (
                  <p>Test</p>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
