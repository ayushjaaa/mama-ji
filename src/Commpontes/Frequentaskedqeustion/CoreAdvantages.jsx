import React from "react";
import { Sparkles, Wallet, RefreshCcw, Plane } from "lucide-react";

const advantages = [
  {
    id: 1,
    icon: <Sparkles className="h-8 w-8 text-emerald-600" />,
    title: "Rewards",
    description:
      "Earn reward points on every purchase to redeem for flights, products, and exclusive offers.",
  },
  {
    id: 2,
    icon: <Wallet className="h-8 w-8 text-emerald-600" />,
    title: "Cash Back",
    description:
      "Get a percentage of your spending back as cash, deposited directly into your account.",
  },
  {
    id: 3,
    icon: <RefreshCcw className="h-8 w-8 text-emerald-600" />,
    title: "Balance Transfer",
    description:
      "Easily transfer balances with low or 0% intro APR to help consolidate debt.",
  },
  {
    id: 4,
    icon: <Plane className="h-8 w-8 text-emerald-600" />,
    title: "Travel",
    description:
      "Enjoy travel-specific perks, lounge access, and vouchers with your credit card.",
  },
];

const CoreAdvantages = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
            Benefits
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 bg-gradient-to-r  bg-[linear-gradient(160deg,rgba(220,255,234,1)_0%,rgba(27,117,107,1)_51.8%)] bg-clip-text text-transparent">
            Our Core Advantages
          </h3>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Discover the exclusive features designed to make your banking experience smarter and more rewarding.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {advantages.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-emerald-50 group-hover:bg-emerald-100 transition-colors duration-300 mx-auto">
                {item.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mt-6 group-hover:text-emerald-600 transition-colors duration-300">
                {item.title}
              </h4>
              <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreAdvantages;
