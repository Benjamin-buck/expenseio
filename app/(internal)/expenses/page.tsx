import PageHeading from "@/components/PageHeading";
import React from "react";
import ExpensesTable from "./ExpensesTable";
import CategoriesTable from "./CategoriesTable";
import SavingsTable from "./SavingsTable";
import IncomeTable from "./IncomeTable";
import TotalExpenses from "./TotalExpenses";
import prisma from "@/prisma/client";
const page = async () => {
  // const expenses = await prisma.expense.findMany({
  //   relationLoadStrategy: "join",
  //   include: {
  //     category: true,
  //   },
  // });
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
          {/* <CategoriesTable /> */}
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
