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
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from "react";

const CategoriesTable = async ({ expenses }: { expense: Expense[] }) => {
  const categories = await prisma.category.findMany({});

  // Logic
  // Create an empy array for the expense category objects
  const expenseCategories:
    | { id: any; category: any; price: any }[]
    | (
        | string
        | number
        | bigint
        | boolean
        | ReactElement<any, string | JSXElementConstructor<any>>
        | Iterable<ReactNode>
        | ReactPortal
        | Promise<AwaitedReactNode>
        | null
        | undefined
      )[] = [];
  // Run a loop through all expense arrays

  for (let i = 0; i < expenses.length; i++) {
    const category = {
      id: expenses[i].categoryId,
      category: expenses[i].category.title,
      price: expenses[i].price,
    };
    if (expenseCategories[category.id - 1]) {
      expenseCategories[category.id - 1].price += category.price;
      // expenseCategories[category.category].price = +category.price;
    } else {
      expenseCategories.push(category);
    }
  }

  console.log(expenseCategories);
  console.log(expenseCategories[1].category);

  // If the category has already been added to the expenseCaterogires array, add to the total.
  // Else, add the new object to the array.

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
          {categories.map(({ id, label }) => (
            <TableRow key={id}>
              <TableCell>{expenseCategories[0].category}</TableCell>
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
