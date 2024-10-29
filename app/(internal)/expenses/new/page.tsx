import PageHeading from "@/components/PageHeading";
import React from "react";
import NewExpenseForm from "./NewExpenseForm";

const NewExpensePage = () => {
  return (
    <div>
      <PageHeading title="New Expense" />
      <div className="grid grid-cols-8 gap-4">
        <div className="col-span-2 "></div>
        <div className="col-span-6">
          <NewExpenseForm />
        </div>
      </div>
    </div>
  );
};

export default NewExpensePage;
