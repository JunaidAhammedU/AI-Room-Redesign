"use client";

import React, { useContext, useState } from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { UserDetailContext } from "@/app/_context/userDetailContext";
// import { useRouter } from "next/router";

interface Tier {
  name: string;
  credits: number;
  id: string;
  price: string;
  description: string;
  featured: boolean;
}

const tiers: Tier[] = [
  { name: "5 credits", credits: 5, id: "tier-5", price: "0.99", description: "Starter plan", featured: false },
  { name: "10 credits", credits: 10, id: "tier-10", price: "1.99", description: "For growing users", featured: false },
  { name: "50 credits", credits: 50, id: "tier-50", price: "4.99", description: "Popular plan", featured: false },
  { name: "100 credits", credits: 100, id: "tier-100", price: "9.99", description: "Enterprise plan", featured: false },
];

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<Tier | null>(null);
  const { user } = useUser();
  // const router = useRouter();
  const context = useContext(UserDetailContext);

  if (!context) return null;

  const { userDetails } = context;

  const createOrder = (data: any, actions: any) => {
    if (!selectedPlan) return;
    return actions.order.create({
      purchase_units: [
        {
          amount: { value: selectedPlan.price },
          description: selectedPlan.description,
        },
      ],
    });
  };

  const onApprove = async () => {
    try {
      const response = await axios.post("/api/buy-credits", {
        userEmail: user?.primaryEmailAddress?.emailAddress,
        currentCredits: userDetails?.credits || 0,
        selectedCredits: selectedPlan?.credits,
      });

      if (response.status === 200) {
        // router.push("/dashboard");
        alert("Payment successful");
      } else {
        alert("Something went wrong during payment processing.");
      }
    } catch (error: any) {
      console.error("Payment error:", error.message);
      alert("There was an error processing your payment. Please try again.");
    }
  };

  console.log(selectedPlan?.price)
  return (
    <div className="relative isolate bg-white px-6 py-12 sm:py-16 lg:px-8">
      <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
          Buy more credits
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-600 sm:text-xl/8">
        Purchase credits to redesign your room with the power of AI and transform your living space effortlessly.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={`p-6 bg-white/30 border ${
              selectedPlan?.id === tier.id
                ? "border-indigo-500 shadow-lg scale-105 transition duration-300 ease-in-out"
                : "border-gray-100 transition duration-300 ease-in-out"
            } rounded-lg shadow-sm backdrop-blur-sm`}
          >
            <h3 className="text-lg font-semibold text-gray-900">{tier.name}</h3>
            <p className="mt-2 text-sm text-gray-500">{tier.description}</p>
            <p className="mt-4 text-2xl font-bold text-gray-900">${tier.price}</p>
            <button
              onClick={() => setSelectedPlan(tier)}
              className="mt-6 w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
            >
              Choose
            </button>
          </div>
        ))}
      </div>

      {selectedPlan && (
        <div className="mt-12 flex justify-center">
          <PayPalButtons
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={() => onApprove()}
            onCancel={() => console.log("Payment cancelled")}
            onError={(err) => console.error("PayPal Checkout Error:", err)}
            style={{ layout: "vertical" }}
          />
        </div>
      )}
    </div>
  );
};

export default Pricing;
