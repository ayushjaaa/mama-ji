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

const ContactUs = () => {
  const [occupation, setOccupation] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    pincode: "",
    city: "",
    state: "",
    salaryRange: "",
    annualIncome: "",
  });
  const [error, setError] = useState({});


  useEffect(() => {
    setStates(State.getStatesOfCountry("IN"));
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "state") {
      setFormData({ ...formData, state: value, city: "" });
      const selectedState = states.find((s) => s.name === value);
      if (selectedState) {
        const cityList = City.getCitiesOfState("IN", selectedState.isoCode);
        setCities(cityList);
      } else {
        setCities([]);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }


    setError((prev) => ({ ...prev, [name]: "" }));
  };


  const isValidIndianPhone = (number) => /^(?:\+91|0)?[6-9]\d{9}$/.test(number);
  const isValidName = (name) => /^[A-Za-z]+(?: [A-Za-z]+)*$/.test(name);
  const isValidPincode = (pin) => /^\d{6}$/.test(pin);


  const validateForm = () => {
    const err = {};


    if (!formData.firstName.trim()) err.firstName = "First name is required";
    else if (!isValidName(formData.firstName))
      err.firstName = "Invalid first name (letters only)";


    if (!formData.lastName.trim()) err.lastName = "Last name is required";
    else if (!isValidName(formData.lastName))
      err.lastName = "Invalid last name (letters only)";

 
    if (!formData.phone.trim()) err.phone = "Phone number is required";
    else if (!isValidIndianPhone(formData.phone))
      err.phone = "Enter a valid 10-digit number";


    if (!formData.pincode.trim()) err.pincode = "Pincode is required";
    else if (!isValidPincode(formData.pincode))
      err.pincode = "Pincode must be 6 digits";


    if (!formData.state) err.state = "Please select a state";


    if (!formData.city.trim()) err.city = "Please enter a city";
    else {
      const selectedState = states.find((s) => s.name === formData.state);
      if (selectedState) {
        const cityList = City.getCitiesOfState("IN", selectedState.isoCode);
        const validCity = cityList.find(
          (c) => c.name.toLowerCase() === formData.city.toLowerCase()
        );
        if (!validCity)
          err.city = "Please select a valid city from the list";
      }
    }

  
    if (!occupation) err.occupation = "Please select occupation";


    if (occupation === "Salaried" && !formData.salaryRange)
      err.salaryRange = "Please select salary range";
    if (occupation === "Self-Employed" && !formData.annualIncome)
      err.annualIncome = "Please enter annual income";

    return err;
  };


  const handleSubmit = async(e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setError(validationErrors);

    if (Object.keys(validationErrors).length == 0) {
 const data = {
  formData,
  occupation
 }

  const respone = await API.post("/api/user/userregister", data)

   console.log(respone)
         setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      pincode: "",
      city: "",
      state: "",
      salaryRange: "",
      annualIncome: "",
    });
    setOccupation("");
     
    }

  

 
  };

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


        <div className="flex-1 bg-white">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >

            <InputField
              label="First Name*"
              name="firstName"
              value={formData.firstName}
              placeholder="First Name"
              onChange={handleChange}
              error={error.firstName}
            />


            <InputField
              label="Last Name*"
              name="lastName"
              value={formData.lastName}
              placeholder="Last Name"
              onChange={handleChange}
              error={error.lastName}
            />

   
            <InputField
              label="Mobile Number*"
              name="phone"
              value={formData.phone}
              placeholder="+91 XXXXX XXXXX"
              onChange={handleChange}
              error={error.phone}
            />

        
            <InputField
              label="Pincode*"
              name="pincode"
              value={formData.pincode}
              placeholder="Enter Pincode"
              onChange={handleChange}
              error={error.pincode}
            />

            {/* State */}
            <SelectField
              label="State*"
              name="state"
              value={formData.state}
              onChange={handleChange}
              options={states.map((s) => s.name)}
              error={error.state}
            />

            {/* City */}
            <InputField
              label="City*"
              name="city"
              value={formData.city}
              placeholder="Type or select city"
              onChange={handleChange}
              list="cityList"
              error={error.city}
            />
            <datalist id="cityList">
              {cities.map((c) => (
                <option key={c.name} value={c.name} />
              ))}
            </datalist>

            {/* Occupation */}
            <SelectField
              label="Occupation*"
              name="occupation"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
              options={["Salaried", "Self-Employed"]}
              error={error.occupation}
            />

            {/* Conditional Fields */}
            {occupation === "Salaried" && (
              <SelectField
                label="Salary Range*"
                name="salaryRange"
                value={formData.salaryRange}
                onChange={handleChange}
                options={[
                  "Below ₹25,000",
                  "₹25,000 – ₹50,000",
                  "₹50,000 – ₹1,00,000",
                  "Above ₹1,00,000",
                ]}
                error={error.salaryRange}
              />
            )}

            {occupation === "Self-Employed" && (
              <InputField
                label="Annual Income*"
                name="annualIncome"
                value={formData.annualIncome}
                placeholder="Enter Annual Income"
                onChange={handleChange}
                error={error.annualIncome}
              />
            )}

            {/* Submit */}
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full bg-green-700 text-white font-medium py-3 rounded-md hover:bg-green-800 transition"
              >
                Submit Details
              </button>
            </div>
          </form>
        </div>
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
