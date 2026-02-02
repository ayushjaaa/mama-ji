import React, { useState, useEffect } from "react";

import API from "../../api/axiosInstance";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import { State, City } from "country-state-city";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConactInpurts from "./ConactInpurts";

const ContactUs = () => {


  
  return (
    <div className="w-full px-6 lg:px-16 py-12 bg-white">




      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
   
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">
            Get Closer <span className="text-green-700">With Us</span>
          </h2>
          <p className="text-gray-500 mb-8">
            Fill the form below and our team will reach out to help you choose
            the best credit card for your needs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <InfoCard
              icon={<MapPin className="text-green-700 w-6 h-6 mt-1" />}
              title="Location"
              detail="Puputan Renon, DPS"
            />
            <InfoCard
              icon={<Clock className="text-green-700 w-6 h-6 mt-1" />}
              title="Opening Hours"
              detail="9AM – 8PM"
            />
            <InfoCard
              icon={<Phone className="text-green-700 w-6 h-6 mt-1" />}
              title="Contact"
              detail="+91 98765 43210"
            />
            <InfoCard
              icon={<Mail className="text-green-700 w-6 h-6 mt-1" />}
              title="Email"
              detail="support@credigi.com"
            />
          </div>


          <p className="font-semibold mb-3">Social Media :</p>
          <div className="flex gap-3">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="bg-green-700 text-white p-2 rounded-md hover:bg-green-800 transition"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

<ConactInpurts/>
      </div>
    </div>
  );
};

// 🧩 Input Component
const InputField = ({ label, name, value, onChange, placeholder, list, error }) => (
  <div className="sm:col-span-1">
    <label className="block text-sm font-medium mb-1">{label}</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      list={list}
      className={`w-full border p-3 rounded-md focus:outline-green-700 ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

// 🧩 Select Component
const SelectField = ({ label, name, value, onChange, options, error }) => (
  <div className="sm:col-span-1">
    <label className="block text-sm font-medium mb-1">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full border p-3 rounded-md focus:outline-green-700 ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    >
      <option value="">Select</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

// 🧩 Info Card
const InfoCard = ({ icon, title, detail }) => (
  <div className="bg-white shadow-md rounded-lg p-5 flex items-start gap-3">
    {icon}
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-gray-500 text-sm">{detail}</p>
    </div>
  </div>
);

export default ContactUs;
