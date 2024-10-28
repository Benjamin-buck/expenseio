import PageHeading from "@/components/PageHeading";
import React from "react";
import ExpensesTable from "./ExpensesTable";
import CategoriesTable from "./CategoriesTable";
import SavingsTable from "./SavingsTable";

const page = () => {
  return (
    <div>
      <PageHeading title="Expenses" />
      <div className="grid grid-cols-8 w-full gap-4">
        <div className="col-span-2">
          <CategoriesTable />
          <SavingsTable />
        </div>
        <div className="col-span-6">
          <ExpensesTable />
        </div>
      </div>
    </div>
  );
};

export default page;
