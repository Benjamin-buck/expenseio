"use client";
import { useState } from "react";
import Navbar from "../Navbar";
import { Switch } from "@/components/ui/switch";

const packages = [
  {
    id: 1,
    name: "Free",
    pricePerMonth: 0,
    pricePerYear: 0,
    backgroundColor: "white",
  },
  {
    id: 2,
    name: "Intermediate",
    pricePerMonth: 27,
    pricePerYear: 240,
    backgroundColor: "white",
  },
  {
    id: 3,
    name: "Intermediate",
    pricePerMonth: 27,
    pricePerYear: 240,
    backgroundColor: "white",
  },
];

const PricingPage = () => {
  const [monthly, setMonthly] = useState(true);
  const handleClick = () => {
    if (monthly === false) setMonthly(true);
    if (monthly === true) setMonthly(false);
  };
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center mt-[150px]">
        <h1 className="text-4xl font-semibold font-instrumentSans text-center">
          Choose the right plan!
        </h1>
        <p className="my-5 max-w-[700px] text-center text-gray-400 text-lg">
          Select from our best plans, ensuring a perfect match. Need more or
          less? Customize your subscription to fit your needs.
        </p>
        <div className="flex gap-4 items-center">
          <p className="text-gray-600 text-lg font-semibold">Monthly</p>
          <Switch onClick={handleClick} />
          <p className="text-gray-600 text-lg font-semibold">Annually</p>
        </div>
      </div>
      <div className="flex max-w-[70%] justify-center mx-auto gap-6 mt-20">
        {packages.map(({ id, pricePerMonth, pricePerYear, name }) => (
          <div key={id} className="flex-1 border rounded-md p-6">
            <h2 className="text-2xl font-semibold">{name}</h2>
            <p className="text-gray-400">
              Our entry level tier that includes all base features.
            </p>
            <p className="text-4xl">
              ${" "}
              {monthly ? `${pricePerMonth} / month` : `${pricePerYear} / year`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
