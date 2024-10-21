import prisma from "@/prisma/client";
import { Button, Table } from "@radix-ui/themes";
import axios from "axios";
import DeleteExpenseButton from "./DeleteExpenseButton";

const ExpensesTable = async () => {
  const expenses = await prisma.expense.findMany();
  return (
    <div>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Merchant</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Price</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {expenses.map((expense) => (
            <Table.Row key={expense.id}>
              <Table.RowHeaderCell>{expense.merchant}</Table.RowHeaderCell>
              <Table.Cell>{expense.description}</Table.Cell>
              <Table.Cell>{expense.price} $</Table.Cell>
              <Table.Cell className="flex justify-end items-center">
                <DeleteExpenseButton id={expense.id} />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default ExpensesTable;
