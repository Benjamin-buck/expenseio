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
        <div className="col-span-6 mx-6"></div>
      </div>
    </div>
  );
};

export default page;
