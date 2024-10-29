import { Expense } from "@prisma/client";
import React from "react";

interface Props {
  expenses: Expense[];
}
const TotalExpenses = ({ expenses }: Props) => {
  const expenseArray: number[] = [];
  let sum = 0;
  expenses.map((expense) => {
    expenseArray.push(expense.price);
  });
  for (let i = 0; i < expenseArray.length; i++) {
    sum += expenseArray[i];
  }

  return (
    <div className="card mb-5">
      <div>
        <h2 className="card_heading">Total Expenses</h2>
        <p className="card_desc">Your total expenses this month.</p>
        {sum}
      </div>
    </div>
  );
};

export default TotalExpenses;
