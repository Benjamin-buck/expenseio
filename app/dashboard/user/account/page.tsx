import PageHeading from "@/components/PageHeading";
import Link from "next/link";
import React from "react";
import { FaRegUser } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";

const page = () => {
  return (
    <div>
      <PageHeading title="Account Settings" />
      <div className="grid grid-cols-8 card">
        <div className="col-span-2 ">
          <h3 className="font-bold text-gray-500 mb-2">General</h3>
          <ul>
            <li>
              <Link
                href="/"
                className="flex gap-3 items-center py-2 bg-gray-100 rounded-md shadow px-6"
              >
                <FaRegUser />
                <span className="text-lg">Account</span>
              </Link>
            </li>
            <li>
              <Link href="/" className="flex gap-3 items-center py-2 px-6">
                <VscSettings />
                <span className="text-lg">Preferences</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-6 mx-6">
          <h1 className="text-3xl font-bold">Account</h1>
          <p>Edit your personal account settings.</p>
          <div className="border-b my-4" />
          <form action="">
            <h2 className="text-xl font-semibold">Full Name</h2>
            <div className="my-2 flex gap-2">
              <div className="flex flex-col w-[50%]">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  className="border rounded-md py-1 px-3 mt-1"
                  placeholder="John"
                  name=""
                  id=""
                />
              </div>
              <div className="flex flex-col flex-1">
                <label htmlFor="">Last name</label>
                <input
                  type="text"
                  className="border rounded-md py-1 px-3 mt-1"
                  placeholder="Smith"
                  name=""
                  id=""
                />
              </div>
            </div>
            <div className="border-b my-8" />
            <h2 className="text-xl font-semibold">Contact Email</h2>
            <div className="flex flex-col flex-1">
              <label htmlFor="">Last name</label>
              <input
                type="email"
                className="border rounded-md py-1 px-3 mt-1 w-[50%]"
                placeholder="john.smith@gmail.com"
                name=""
                id=""
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
