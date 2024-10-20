import prisma from "@/prisma/client";
import { Table } from "@radix-ui/themes";

const ExpensesTable = async () => {
  const expenses = await prisma.expense.findMany();
  return (
    <div className="mt-8">
      <h1 className="text-2xl font-semibold">Expenses</h1>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Merchant</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Price</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {expenses.map((expense) => (
            <Table.Row key={expense.id}>
              <Table.RowHeaderCell>{expense.merchant}</Table.RowHeaderCell>
              <Table.Cell>{expense.description}</Table.Cell>
              <Table.Cell>{expense.price} $</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default ExpensesTable;
