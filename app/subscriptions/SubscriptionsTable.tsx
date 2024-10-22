import prisma from "@/prisma/client";
import { Table } from "@radix-ui/themes";
import React from "react";

const SubscriptionsTable = async () => {
  const subscriptions = await prisma.subscription.findMany();
  return (
    <div>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Merchant</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Price</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {subscriptions.map((subscription) => (
            <Table.Row key={subscription.id}>
              <Table.Cell>{subscription.merchant}</Table.Cell>
              <Table.Cell>{subscription.price}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default SubscriptionsTable;
