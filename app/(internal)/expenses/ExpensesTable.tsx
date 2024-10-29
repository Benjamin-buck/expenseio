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

interface Props {
  expenses: Expense[];
}

const ExpensesTable = async ({ expenses }: Props) => {
  return (
    <div className="card">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="card_heading">Expenses</h2>
          <p className="card_desc">
            A list of your expenses so far this month.
          </p>
        </div>
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
              <TableCell>Business</TableCell>
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
