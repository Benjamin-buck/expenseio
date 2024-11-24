import CardTitle from "@/components/CardTitle";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import prisma from "@/prisma/client";
import { Expense } from "@prisma/client";
import { useState } from "react";

function sumCategories(categoryArray, expenseArray) {
  //
}

const CategoriesTable = async ({ expenses }: { expenses: Expense[] }) => {
  const categories = await prisma.category.findMany({});
  console.log(expenses);

  const categoryArray = [];

  for (let i = 0; i < expenses.length; i++) {
    categoryArray.push(expenses[i].category);
  }

  console.log(categoryArray);
  console.log(categoryArray);
  return (
    <div className="card">
      <CardTitle
        title="Categories"
        description="Your categories in comparison to your amount spent."
      />
      <Table className="text-md mt-5">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold text-black">Category</TableHead>
            <TableHead className="text-right font-bold text-black">
              Amount Spent
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map(({ id, title }) => (
            <TableRow key={id}>
              <TableCell>{title}</TableCell>
              <TableCell className="text-right">
                <span className="font-bold text-green-500"></span> of{" "}
                <span className="font-bold text-green-500">200$</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CategoriesTable;
