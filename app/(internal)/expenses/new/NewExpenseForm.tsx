"use client";
import { Input } from "@/components/ui/input";
import * as React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const NewExpenseForm = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    console.log(Date.parse(data.date));
    await axios.post("/api/expense", data);
    router.push("/expenses");
    router.refresh();
  });
  return (
    <form className="card" onSubmit={onSubmit}>
      <div className="mb-4">
        <h2 className="card_heading">Transaction Details</h2>
        <p className="card_desc">
          Please provide the details of the transaction
        </p>
      </div>
      <label htmlFor="merchant" className="font-semibold">
        Merchant
      </label>
      <Input
        id="merchant"
        type="text"
        className="w-[250px] mb-5"
        placeholder="Merchant"
        {...register("merchant")}
      />
      <div className=" mb-5">
        <label htmlFor="merchant" className="font-semibold">
          Merchant
        </label>
        <Select>
          <SelectTrigger className="w-[250px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="groceries">Rent</SelectItem>
            <SelectItem value="rent">Groceires</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col mb-5">
        <label htmlFor="date" className="font-semibold">
          Transaction Date
        </label>
        <input
          type="date"
          {...register("date")}
          className="w-[250px] border rounded-md px-2 py-1 text-sm text-gray-500"
        />
      </div>

      <label htmlFor="price" className="font-semibold">
        Price
      </label>
      <Input
        id="price"
        type="text"
        {...register("price")}
        className="w-[250px] mb-5"
        placeholder="20.30"
      />
      <button className="text-white bg-black px-3 py-2 rounded-md">Save</button>
    </form>
  );
};

export default NewExpenseForm;
