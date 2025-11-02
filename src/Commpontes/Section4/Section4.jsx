import React, { useState, useEffect, useRef } from "react";
import { Check } from "lucide-react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import "../../index.css";

const AnimatedCounter = ({ target, duration = 2 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, target, {
      duration,
      ease: "easeOut",
    });
    return controls.stop;
  }, [target]);

  return <motion.span>{rounded}</motion.span>;
};

const Section4 = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const [timeProgress, setTimeProgress] = useState(0);
  const [trustProgress, setTrustProgress] = useState(0);

  useEffect(() => {
    if (isInView) {
      // Animate progress bars when visible
      setTimeout(() => setTimeProgress(90), 300);
      setTimeout(() => setTrustProgress(94), 600);
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="w-full container m-auto min-h-screen flex flex-col lg:flex-row"
    >
      {/* Left Section */}
      <div className="w-full lg:w-1/2 bg-[#388279] text-white flex flex-col justify-center px-6 sm:px-10 lg:px-24 py-12 gap-8">
        <h1 className="text-4xl sm:text-4xl lg:text-6xl font-bold">
          The Most Comfortable Way To Make Online Payment
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#FFFFFF] lg:pt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Progress Bars */}
        <div className="space-y-4">
          {/* === Progress 1 === */}
          <div>
            <div className="flex justify-between font-medium">
              <span className="text-lg">Saving You Time</span>
              <span className="text-lg font-light">
                {isInView && <AnimatedCounter target={timeProgress} />}%
              </span>
            </div>
            <div className="w-full h-2 bg-white mt-1 rounded overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${timeProgress}%` }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                className="h-2 bg-black rounded" // Accent color for contrast
              ></motion.div>
            </div>
          </div>

          {/* === Progress 2 === */}
          <div>
            <div className="flex justify-between text-sm font-medium">
              <span className="text-lg">Trusted Company</span>
              <span className="text-lg font-light">
                {isInView && <AnimatedCounter target={trustProgress} />}%
              </span>
            </div>
            <div className="w-full h-2 bg-white mt-1 rounded overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${trustProgress}%` }}
                transition={{ duration: 1.8, ease: "easeOut", delay: 0.4 }}
                className="h-2 bg-black rounded"
              ></motion.div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-col sm:flex-row gap-6">
          <ul className="space-y-3 text-xl sm:text-base">
            <li className="flex items-center gap-2">
              <Check className="w-5 h-5 text-white" /> Constant Improvement
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-5 h-5 text-white" /> Commitment to Customers
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-5 h-5 text-white" /> Best Quality You Can Get
            </li>
          </ul>

          <div className="bg-white text-black rounded-lg p-6 flex items-center justify-center w-full sm:w-1/2">
            <p className="text-lg font-semibold">
              Keep Every Money Save in Your Online Wallet
            </p>
          </div>
        </div>

        {/* Button */}
        <button className="mt-6 w-fit bg-white text-[#22776f] px-6 py-4 rounded-full font-medium shadow hover:bg-gray-100 transition">
          Learn More
        </button>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 h-[400px] lg:h-auto">
        <img
          src="https://cdn.pixabay.com/photo/2021/07/10/09/23/payment-terminal-6400998_1280.png"
          alt="credit cards"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Section4;
