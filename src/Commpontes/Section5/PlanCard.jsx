import React, { memo } from "react";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

const PlanCard = memo(({ plan, isClicked, onClick, index }) => {
  return (
    <div
      className={`w-full h-fit ${plan.recomandee ? "recomandee" : "bg-white"}
      p-12  rounded-2xl border shadow-premium`}
    >
      <h3 className={`text-2xl font-semibold ${plan.recomandee ? "text-white" : ""}`}>
        {plan.name}
      </h3>
      <h2 className={`text-4xl font-bold pt-1 ${plan.recomandee ? "text-white" : "text-[#3C84F6]"}`}>
        {plan.price}
      </h2>
      <h4 className={`${plan.recomandee ? "text-white" : "text-[#64758B]"}`}>{plan.period}</h4>

      <div className="mt-4 space-y-2">
        {plan.features.map((feature, i) => (
          <p key={i} className="flex gap-3 text-sm text-[#171B26]">
            <Check className="text-blue-500 h-5 w-5" /> {feature}
          </p>
        ))}

        {plan.notIncluded.map((item, i) => (
          <p key={i} className="flex gap-3 text-sm text-[#B2B9C5]">
            <X className="text-blue-500 h-5 w-5" /> {item}
          </p>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        clik
        onClick={() => onClick(index)}
        className={`mt-6 w-full py-3 rounded-lg text-white font-semibold transition-all 
        ${isClicked ? "bg-blue-700 scale-95" : "bg-blue-500 hover:bg-blue-600"}`}
      >
        Select Plan
      </motion.button>
    </div>
  );
});

export default PlanCard;
