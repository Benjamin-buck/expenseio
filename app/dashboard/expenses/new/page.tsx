import PageHeading from "@/components/PageHeading";
import React from "react";
import NewExpenseForm from "./NewExpenseForm";
import prisma from "@/prisma/client";

const NewExpensePage = async () => {
  // Get the categories
  const categories = await prisma.category.findMany();
  return (
    <div>
      <PageHeading title="New Expense" />
      <div className="grid grid-cols-8 gap-4">
        <div className="col-span-2 "></div>
        <div className="col-span-6">
          <NewExpenseForm categories={categories} />
        </div>
      </div>
    </div>
  );
};

export default NewExpensePage;
