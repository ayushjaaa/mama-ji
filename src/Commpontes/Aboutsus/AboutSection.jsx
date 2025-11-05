import React from "react";
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="bg-white py-12  px-8 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left - Image with Card */}
        <div className="relative">
          <img
            src="/../../public/Images/3dBG01.png"
            alt="Woman holding card"
            className="rounded-lg shadow-md object-cover w-full h-full"
          />
          {/* Floating Card */}
          <div className="absolute bottom-6 left-6 bg-white shadow-lg rounded-xl p-5 w-72 max-w-[85%]">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-green-100 text-green-600 p-2 rounded-lg">
                💵
              </span>
              <h3 className="font-semibold text-lg">One-Stop Solution</h3>
            </div>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus.
            </p>
          </div>
        </div>

        {/* Right - Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            All Payment & Financial Solution in{" "}
            <span className="text-green-600">One Product</span>
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
            et magnis dis parturient montes, nascetur.
          </p>

          {/* Checklist */}
          <div className="grid grid-cols-2 gap-y-3 mb-8">
            {[
              "Develop Press Release",
              "Make Press Kit",
              "Media Connection",
              "Media & Government",
              "Social Media Content",
              "PR Consultation",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="text-green-600 w-5 h-5" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>

          {/* Signature */}
          <div className="flex justify-between w-60">
            <p className="font-signature text-lg border-r-1 p-4">Harry J.</p>
       <div className="flex-col ">
       <p className="font-medium text-gray-800 ">Harry Jackson</p>
       <p className="text-gray-500 text-sm">Credigi CEO</p>
       </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
