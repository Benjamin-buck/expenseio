import Link from "next/link";
import React from "react";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="grid grid-cols-2">
      {/* Left Side of the screen */}
      <div className="col-span-1 flex items-center justify-center">
        <div className="w-[400px]">
          <Link
            href="/"
            className="text-3xl font-instrumentSans font-semibold mb-6"
          >
            expense app
          </Link>

          <h2 className="text-2xl font-semibold font-instrumentSans">
            Log in to your account.
          </h2>
          <p className="text-gray-500">
            Enter your login credentials or create a new account.
          </p>
          <div className="border my-6" />
          <form action="">
            <input
              type="text"
              placeholder="Email Address"
              className="w-full py-2 border border-gray-200 rounded-md px-3 mb-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full py-2 border border-gray-200 rounded-md px-3"
            />
            <div className="mt-2 mb-8 flex justify-between">
              <div className="flex gap-2 items-center">
                <input type="checkbox" name="" id="" />
                <p className="text-gray-400 font-sm">Remember me</p>
              </div>
              <Link href="/" className="text-blue-500">
                Forgot my password
              </Link>
            </div>
            <button className="bg-black w-full text-white font-semibold font-instrumentSans py-2 rounded-md">
              Log in
            </button>

            <div className="flex gap-1 mt-2">
              <p>Dont have an account?</p>
              <Link className="text-blue-500" href="/register">
                Click here to register
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Right side of the screen */}
      <div className="col-span-1  h-[100vh] bg-black">test</div>
    </div>
  );
};

export default LoginPage;
