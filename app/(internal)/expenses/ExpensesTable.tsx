import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Button from "@/components/Button";
import Link from "next/link";
import { Expense } from "@prisma/client";
import prisma from "@/prisma/client";
import CardTitle from "@/components/CardTitle";
interface Props {
  expenses: Expense[];
}

const ExpensesTable = async ({ expenses }: Props) => {
  const categories = await prisma.category.findMany();

  return (
    <div className="card">
      <div className="flex justify-between items-center">
        <CardTitle
          title="Expenses"
          description="A list of your expenses so far this month."
        />
        <Link href="/expenses/new">
          <Button label="Add Expense" />
        </Link>
      </div>

      <Table className="mt-5 text-md">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px] font-bold text-black">
              Purchase Date
            </TableHead>
            <TableHead className="w-[400px] font-bold text-black">
              Merchant
            </TableHead>
            <TableHead className="font-bold text-black">Category</TableHead>
            <TableHead className="text-right font-bold text-black">
              Price
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {expenses.map((expense) => (
            <TableRow key={expense.id}>
              <TableCell className="font-medium">
                {expense.dateOfPurchase}
              </TableCell>
              <TableCell>{expense.merchant}</TableCell>
              <TableCell>{categories[expense.categoryId - 1].title}</TableCell>
              <TableCell className="text-right font-bold text-red-500">
                ${expense.price}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ExpensesTable;
