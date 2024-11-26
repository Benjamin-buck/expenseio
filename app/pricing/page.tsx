"use client";
import { useState } from "react";
import Navbar from "../Navbar";
import { Switch } from "@/components/ui/switch";
import { FaSquareCheck } from "react-icons/fa6";
import Footer from "@/components/Footer";

const packages = [
  {
    id: 1,
    name: "Free",
    pricePerMonth: 0,
    pricePerYear: 0,
    backgroundColor: "white",
    textColor: "black",
    features: ["Create 3 budgets", "Use of Core Features"],
  },
  {
    id: 2,
    name: "Intermediate",
    pricePerMonth: 14,
    pricePerYear: 153,
    backgroundColor: "black",
    textColor: "white",
    features: [
      "Unlimited budgets",
      "Feature 2",
      "Feature 3",
      "Feature 4",
      "Feature 5",
    ],
  },
  {
    id: 3,
    name: "Ultimate",
    pricePerMonth: 27,
    pricePerYear: 240,
    backgroundColor: "white",
    textColor: "black",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
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
      <div className="flex max-w-[70%] justify-center mx-auto gap-6 my-20">
        {packages.map(
          ({
            id,
            pricePerMonth,
            pricePerYear,
            name,
            features,
            backgroundColor,
            textColor,
          }) => (
            <div
              key={id}
              className={`flex-1 border rounded-md p-6 bg-${backgroundColor} text-${textColor} flex justify-between flex-col`}
            >
              <div>
                <h2 className="text-2xl font-semibold">{name}</h2>
                <p className="text-gray-400">
                  Our entry level tier that includes all base features.
                </p>
                <p className="text-4xl font-semibold">
                  ${" "}
                  {monthly
                    ? `${pricePerMonth} / month`
                    : `${pricePerYear} / year`}
                </p>
                <div className="my-6">
                  <h1 className="text-black font-semibold">
                    Package Includes:
                  </h1>
                  <ul>
                    {features.map((feature) => (
                      <li className="flex gap-3 items-center text-gray-500 my-2">
                        <FaSquareCheck className="text-xl" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                className={`bg-${textColor} text-${backgroundColor} w-full py-2 rounded-md`}
              >
                Buy Now
              </button>
            </div>
          )
        )}
      </div>
      <Footer />
    </div>
  );
};

export default PricingPage;
