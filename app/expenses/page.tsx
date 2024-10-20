import { Button } from "@radix-ui/themes";
import ExpensesTable from "./ExpensesTable";

const ExpensesPage = () => {
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Expenses</h1>
        <Button color="pink" variant="soft">
          Add Expense
        </Button>
      </div>
      <ExpensesTable className="mt-3" />
    </div>
  );
};

export default ExpensesPage;
