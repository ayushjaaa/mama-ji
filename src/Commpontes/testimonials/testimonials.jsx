import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Shubham Kumar",
    role: "Doctor",
    image: "https://via.placeholder.com/150", // replace with real image
    text: "I have been using Card Delta service for the last 4 years. Not a single complaint till date — really satisfied with the service.",
  },
  {
    name: "Vinay Kumar",
    role: "Project Manager",
    image: "https://via.placeholder.com/150",
    text: "Since using Card Delta, I no longer need to visit the bank. Their advice and support make managing my cards so much easier.",
  },
  {
    name: "Aman Singh",
    role: "Web Developer",
    image: "https://via.placeholder.com/150",
    text: "I love your service, especially the 24/7 support. Thanks for always providing quick solutions to my problems.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">
          What Users Say About{" "}
          <span className="text-green-600">Our Service</span>
        </h2>
        <p className="mt-2 text-gray-500">Users share their Card Delta experience</p>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6 ">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white shadow  rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Quote Icon */}
            <Quote className="w-10 h-10 text-green-600 mb-4" />

            {/* Testimonial Text */}
            <p className="text-gray-600 leading-relaxed mb-6">{t.text}</p>

            {/* User Image */}
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 rounded-full border-4 border-green-600 shadow-md mb-4 object-cover"
            />

            {/* User Info */}
            <h3 className="text-lg font-semibold text-gray-800">{t.name}</h3>
            <p className="text-sm text-gray-500">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
