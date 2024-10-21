import { Button, Tooltip } from "@radix-ui/themes";
import ExpensesTable from "./ExpensesTable";

const ExpensesPage = () => {
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Expenses</h1>
        <Tooltip content="Add a new expense">
          <Button color="pink" variant="soft">
            Add Expense
          </Button>
        </Tooltip>
      </div>
      <ExpensesTable />
    </div>
  );
};

export default ExpensesPage;
