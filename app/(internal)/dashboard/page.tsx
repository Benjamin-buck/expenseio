import React from "react";
import Overview from "./Overview";
import CategorieChart from "./CategorieChart";
import PageHeading from "@/components/PageHeading";

const page = () => {
  return (
    <>
      <PageHeading title="Dashboard" />
      <div className="grid grid-cols-8 w-full gap-6 max-lg:gap-4 max-lg:mr-10">
        <div className="col-span-4 w-full max-lg:col-span-8">
          <Overview />
        </div>
        <div className="col-span-4 max-lg:col-span-8  w-full">
          <CategorieChart />
        </div>
      </div>
    </>
  );
};

export default page;
