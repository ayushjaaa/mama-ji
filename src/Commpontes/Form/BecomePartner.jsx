import React, { useState, useEffect } from "react";
import { State, City } from "country-state-city";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BecomePartner = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    state: "",
    city: "",
    address: "",
    partnerType: "",
    accountType: "",
    aadhar: "",
    pan: "",
    smName: "",
    heardAboutUs: "",
  });

  const [errors, setErrors] = useState({});
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  // Load Indian states
  useEffect(() => {
    setStates(State.getStatesOfCountry("IN"));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "state") {
      setFormData({ ...formData, state: value, city: "" });
      const selectedState = states.find((s) => s.name === value);
      if (selectedState) {
        setCities(City.getCitiesOfState("IN", selectedState.isoCode));
      } else {
        setCities([]);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Validation Functions
  const isValidName = (name) => /^[A-Za-z ]+$/.test(name);
  const isValidMobile = (number) => /^(?:\+91|0)?[6-9]\d{9}$/.test(number);
  const isValidEmail = (email) =>
    /^[\w.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email);
  const isValidAadhar = (num) => /^\d{12}$/.test(num);
  const isValidPAN = (pan) => /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan);

  const validateForm = () => {
    const err = {};

    if (!formData.fullName.trim()) err.fullName = "Full name is required";
    else if (!isValidName(formData.fullName))
      err.fullName = "Name can't have numbers or special characters";

    if (!formData.mobile.trim()) err.mobile = "Mobile number is required";
    else if (!isValidMobile(formData.mobile))
      err.mobile = "Enter a valid 10-digit Indian number";

    if (!formData.email.trim()) err.email = "Email is required";
    else if (!isValidEmail(formData.email)) err.email = "Enter a valid email";

    if (!formData.state.trim()) err.state = "Please select a state";
    if (!formData.city.trim()) err.city = "Please select a city";
    else {
      const selectedState = states.find((s) => s.name === formData.state);
      if (selectedState) {
        const validCity = City.getCitiesOfState(
          "IN",
          selectedState.isoCode
        ).find(
          (c) => c.name.toLowerCase() === formData.city.toLowerCase()
        );
        if (!validCity) err.city = "City does not exist in selected state";
      }
    }

    if (!formData.address.trim()) err.address = "Address is required";
    if (!formData.partnerType) err.partnerType = "Select partner type";
    if (!formData.accountType) err.accountType = "Select account type";

    if (!formData.aadhar.trim()) err.aadhar = "Aadhar number is required";
    else if (!isValidAadhar(formData.aadhar))
      err.aadhar = "Enter valid 12-digit Aadhar number";

    if (!formData.pan.trim()) err.pan = "PAN number is required";
    else if (!isValidPAN(formData.pan))
      err.pan = "Enter valid PAN (ABCDE1234F)";

    if (!formData.smName.trim()) err.smName = "SM Name is required";
    if (!formData.heardAboutUs.trim())
      err.heardAboutUs = "This field cannot be empty";

    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Data:", formData);
      toast.success("Form submitted successfully!");
      setFormData({
        fullName: "",
        mobile: "",
        email: "",
        state: "",
        city: "",
        address: "",
        partnerType: "",
        accountType: "",
        aadhar: "",
        pan: "",
        smName: "",
        heardAboutUs: "",
      });
      setCities([]);
    } else {
      toast.error("Please fix the errors in the form");
    }
  };

  return (
    <div className="w-full px-4 sm:px-8 lg:px-16 py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-6 sm:p-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          Become a <span className="text-green-700">Partner</span>
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <InputField
            label="Full Name*"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
          />

          <InputField
            label="Mobile Number*"
            name="mobile"
            placeholder="Enter your mobile number"
            value={formData.mobile}
            onChange={handleChange}
            error={errors.mobile}
          />

          <InputField
            label="Email Address*"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />

          <SelectField
            label="State Name*"
            name="state"
            value={formData.state}
            onChange={handleChange}
            options={states.map((s) => s.name)}
            error={errors.state}
          />

          <InputField
            label="City Name*"
            name="city"
            placeholder="Type or select city"
            value={formData.city}
            onChange={handleChange}
            list="cityList"
            error={errors.city}
          />
          <datalist id="cityList">
            {cities.map((c) => (
              <option key={c.name} value={c.name} />
            ))}
          </datalist>

          <InputField
            label="Current Residence Address*"
            name="address"
            placeholder="Enter your complete address"
            value={formData.address}
            onChange={handleChange}
            error={errors.address}
          />

          <SelectField
            label="Team / Individual*"
            name="partnerType"
            value={formData.partnerType}
            onChange={handleChange}
            options={["Individual", "Team"]}
            error={errors.partnerType}
          />

          <SelectField
            label="Account Type*"
            name="accountType"
            value={formData.accountType}
            onChange={handleChange}
            options={["Saving Account", "Current Account"]}
            error={errors.accountType}
          />

          <InputField
            label="Owner's Aadhar (Number)*"
            name="aadhar"
            placeholder="Enter your Aadhar number"
            value={formData.aadhar}
            onChange={handleChange}
            error={errors.aadhar}
          />

          <InputField
            label="Owner's PAN (Number)*"
            name="pan"
            placeholder="Enter your PAN number"
            value={formData.pan}
            onChange={handleChange}
            error={errors.pan}
          />

          <InputField
            label="SM Name*"
            name="smName"
            placeholder="Enter SM name"
            value={formData.smName}
            onChange={handleChange}
            error={errors.smName}
          />

          <InputField
            label="How did you hear about us?"
            name="heardAboutUs"
            placeholder="Referral / Social Media / Ads"
            value={formData.heardAboutUs}
            onChange={handleChange}
            error={errors.heardAboutUs}
          />

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full bg-green-700 text-white font-medium py-3 rounded-lg hover:bg-green-800 transition"
            >
              Submit Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Input Component
const InputField = ({ label, name, value, onChange, placeholder, list, error }) => (
  <div className="sm:col-span-1 w-full">
    <label className="block text-sm sm:text-base font-medium mb-1">{label}</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      list={list}
      className={`w-full border p-3 sm:p-4 rounded-lg focus:outline-green-700 focus:ring-1 focus:ring-green-700 ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

// Select Component
const SelectField = ({ label, name, value, onChange, options, error }) => (
  <div className="sm:col-span-1 w-full">
    <label className="block text-sm sm:text-base font-medium mb-1">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full border p-3 sm:p-4 rounded-lg focus:outline-green-700 focus:ring-1 focus:ring-green-700 ${
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

export default BecomePartner;
