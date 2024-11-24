import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h1 className="text-5xl text-center font-semibold mb-2">
        Take Control of Your Finances with Ease
      </h1>
      <p className="mb-5 text-center">
        Manage your money smarter, not harder. Our AI-powered budgeting app
        helps you track expenses, plan budgets, and achieve your financial goals
        effortlessly.
      </p>
      <Link href="/" className="">
        <button className="bg-black text-white px-6 py-2 rounded-md font-instrumentSans font-semibold">
          Sign Up Today
        </button>
      </Link>
    </div>
  );
};

export default Hero;
