import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Button from "@/components/Button";

const ExpensesTable = () => {
  return (
    <div className="card">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="card_heading">Expenses</h2>
          <p className="card_desc">
            A list of your expenses so far this month.
          </p>
        </div>
        <Button label="Add Expense" />
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
          <TableRow>
            <TableCell className="font-medium">08/11/2024</TableCell>
            <TableCell>Shopify</TableCell>
            <TableCell>Business</TableCell>
            <TableCell className="text-right font-bold text-red-500">
              -$250.00
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">08/11/2024</TableCell>
            <TableCell>Shopify</TableCell>
            <TableCell>Business</TableCell>
            <TableCell className="text-right font-bold text-red-500">
              -$250.00
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default ExpensesTable;
