"use client";
import { useForm } from "react-hook-form";
import {
  Tooltip,
  Dialog,
  Button,
  Flex,
  TextField,
  TextArea,
  Text,
} from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useRef } from "react";

interface ExpenseForm {
  merchant: string;
  description: string;
  price: string;
}

const AddExpenseButton = () => {
  const router = useRouter();
  const { register, handleSubmit, resetField } = useForm<ExpenseForm>();
  const ref = useRef<HTMLFormElement>(null);

  return (
    <Tooltip content="Add a new expense">
      <Dialog.Root>
        <Dialog.Trigger>
          <Button color="pink" variant="soft">
            Add Expense
          </Button>
        </Dialog.Trigger>
        <Dialog.Content maxWidth="500px">
          <Dialog.Title>Add expense</Dialog.Title>
          <Dialog.Description size="2" mb="4">
            Enter the details of the transaction.
          </Dialog.Description>

          <Flex direction="column" gap="3">
            <form
              name="expense-form"
              ref={ref}
              onSubmit={handleSubmit(async (data) => {
                await axios.post("/api/expenses", data);
                resetField("merchant");
                resetField("description");
                resetField("price");
                router.push("/expenses");
                router.refresh();
              })}
            >
              <label>
                <Text as="div" size="2" mb="1" weight="bold" mt="3">
                  Merchant
                </Text>
                <TextField.Root
                  placeholder="Enter the merchant name"
                  {...register("merchant")}
                />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold" mt="3">
                  Description
                </Text>
                <TextArea
                  placeholder="Enter details about the transaction"
                  {...register("description")}
                />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold" mt="3">
                  Price
                </Text>
                <TextField.Root
                  placeholder="Enter the price"
                  type="number"
                  {...register("price")}
                />
              </label>
              <Flex mt="3" gap="3" justify="end">
                <Dialog.Close>
                  <Button variant="soft" color="gray">
                    Cancel
                  </Button>
                </Dialog.Close>
                <Dialog.Close>
                  <Button
                    type="submit"
                    value="Submit"
                    color="pink"
                    variant="soft"
                  >
                    Add
                  </Button>
                </Dialog.Close>
              </Flex>
            </form>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </Tooltip>
  );
};

export default AddExpenseButton;
