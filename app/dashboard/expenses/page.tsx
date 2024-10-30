import PageHeading from "@/components/PageHeading";
import React from "react";
import ExpensesTable from "./ExpensesTable";
import TotalExpenses from "./TotalExpenses";
import prisma from "@/prisma/client";
import CategoriesTable from "./CategoriesTable";
const page = async () => {
  const expenses = await prisma.expense.findMany({
    include: {
      category: true,
    },
  });

  return (
    <div>
      <PageHeading title="Expenses" />
      <div className="grid grid-cols-8 w-full gap-4">
        <div className="col-span-2">
          <TotalExpenses expenses={expenses} />
          <CategoriesTable expenses={expenses} />
          {/* <SavingsTable /> */}
        </div>
        <div className="col-span-6">
          {/* <IncomeTable /> */}
          <ExpensesTable expenses={expenses} />
        </div>
      </div>
    </div>
  );
};

export default page;
