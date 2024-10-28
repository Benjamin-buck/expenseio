import React from "react";
import Overview from "./Overview";
import CategorieChart from "./CategorieChart";

const page = () => {
  return (
    <>
      <h1 className="page_title">Home</h1>
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
