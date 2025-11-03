import React from "react";
import Button from "../Button.jsx/Button";
import { Star } from "lucide-react";

const Section1 = () => {
  return (
    <section className="w-full flex justify-center items-center bg-white overflow-hidden relative">
      {/* Decorative Underline Image */}
      <div className="hidden lg:block absolute top-[35%] left-[22%] rotate-6">
        <img
          className="w-60 h-auto object-contain"
          src="/Fonts/underline-swoshes.png"
          alt="underline decoration"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-6 sm:px-10 lg:px-16 py-12">
        {/* Left Side (Text Section) */}
        <div className="flex flex-col text-center lg:text-left lg:w-1/2 space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-text-primary">
            The Best Choice for Online{" "}
            <span className="bg-gradient-to-br from-green-200 to-teal-700 bg-clip-text text-transparent">
              Credit Card
            </span>{" "}
            Payment
          </h1>

          <p className="text-p-light text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
            <Button
              style={"primary"}
              image={"/Images/hand.png"}
              buttonText={"Apply Credit Card"}
            />
            <Button
              style={"secondary"}
              icone1={<i className="ri-arrow-right-line"></i>}
              buttonText={"Learn More"}
            />
          </div>

          {/* Ratings + Users */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-6 pt-6">
            {/* Overlapping user images */}
            <div className="relative flex">
              <div className="h-10 w-10 rounded-full border-2 border-white bg-amber-200 absolute left-0 " />
              <div className="h-10 w-10 rounded-full border-2 border-white bg-amber-300 absolute left-6 " />
              <div className="h-10 w-10 rounded-full border-2 border-white bg-amber-400 absolute left-12" />
              <div className="h-10 w-10 opacity-0" /> {/* spacing */}
            </div>

            {/* Stars + Text */}
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-yellow-400"
                  />
                ))}
              </div>
              <h3 className="text-p-light text-sm sm:text-base">
                Over <span className="text-black font-semibold">2k+</span> Active Users
              </h3>
            </div>
          </div>
        </div>

        {/* Right Side (Image Section) */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
          <img
            src="/Images/gard.png"
            alt="Credit card illustration"
            className="w-[85vw] sm:w-[70vw] md:w-[55vw] lg:w-[35vw] xl:w-[30vw] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Section1;
