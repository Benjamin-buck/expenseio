import AddExpenseButton from "./AddExpenseButton";
import ExpensesTable from "./ExpensesTable";

const ExpensesPage = () => {
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Expenses</h1>
        <AddExpenseButton />
      </div>
      <ExpensesTable />
    </div>
  );
};

export default ExpensesPage;
