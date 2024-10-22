import PageTitle from "@/components/PageTitle";
import AddExpenseButton from "./AddExpenseButton";
import ExpensesTable from "./ExpensesTable";

const ExpensesPage = () => {
  return (
    <div>
      <PageTitle
        title="My Expenses"
        description="The best way to keep track of your finances."
      />
      <div className="flex justify-between items-center">
        <AddExpenseButton />
      </div>
      <ExpensesTable />
    </div>
  );
};

export default ExpensesPage;
