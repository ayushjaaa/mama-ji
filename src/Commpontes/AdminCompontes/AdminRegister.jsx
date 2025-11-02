import React, { useContext, useState } from "react";
import { Eye, EyeOff, Mail, Lock, Phone, User } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Context } from "../../main";

const AdminRegister = () => {
  const { setIsAuthenticated, setUser } = useContext(Context);
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    password: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // --- Validation ---
  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!values.name) errors.name = "Name is required";

    if (!values.email) errors.email = "Email is required";
    else if (!emailRegex.test(values.email))
      errors.email = "Please enter a valid email";

    if (!values.phone) errors.phone = "Phone number is required";
    else if (!phoneRegex.test(values.phone))
      errors.phone = "Please enter a valid 10-digit Indian number";

    if (!values.password) errors.password = "Password is required";
    else if (values.password.length < 8)
      errors.password = "Password must be at least 8 characters";

    return errors;
  };

  const isFormValid = () => Object.keys(validate(formValues)).length === 0;

  // --- Handlers ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    if (touched[name]) setFormErrors(validate({ ...formValues, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
    setFormErrors(validate(formValues));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, password: true });
    const errors = validate(formValues);
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setLoading(true);
    try {
      // Prepend +91 to phone
      const sendingData = {
        ...formValues,
        phone: `+91${formValues.phone}`,
      };

      const response = await axios.post(
        "http://localhost:3000/api/register",
        sendingData,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 200) {
        toast.success("Registration successful!");
        // setIsAuthenticated(true);
        // setUser(response.data.user);
        navigate(`/otp-verfication-register/${formValues.email}/${formValues.phone}`);
      } else {
        toast.error(response.data.message || "Something went wrong!");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  // --- Render ---
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
      <div className="absolute w-72 h-72 bg-blue-200/40 rounded-full top-[-80px] left-[-80px] blur-3xl"></div>
      <div className="absolute w-96 h-96 bg-purple-200/40 rounded-full bottom-[-120px] right-[-120px] blur-3xl"></div>

      <div className="bg-white/90 backdrop-blur-2xl shadow-2xl rounded-3xl p-8 w-full max-w-md border border-gray-100 relative z-10 transition-all hover:shadow-3xl duration-300">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-3 rounded-2xl shadow-lg">
            <User className="text-white" size={32} />
          </div>
          <h2 className="text-3xl font-bold mt-4 text-gray-800 tracking-tight">Admin Register</h2>
          <p className="text-gray-500 text-sm mt-1">Create your secure account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                name="name"
                placeholder="Ayush"
                value={formValues.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`pl-10 w-full border p-3 rounded-lg text-gray-700 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 ${
                  touched.name && formErrors.name ? "border-red-500" : "border-gray-200"
                }`}
              />
            </div>
            {touched.name && formErrors.name && (
              <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="email"
                name="email"
                placeholder="admin@example.com"
                value={formValues.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`pl-10 w-full border p-3 rounded-lg text-gray-700 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 ${
                  touched.email && formErrors.email ? "border-red-500" : "border-gray-200"
                }`}
              />
            </div>
            {touched.email && formErrors.email && (
              <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Phone</label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                name="phone"
                placeholder="9876543210"
                value={formValues.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`pl-10 w-full border p-3 rounded-lg text-gray-700 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 ${
                  touched.phone && formErrors.phone ? "border-red-500" : "border-gray-200"
                }`}
              />
            </div>
            {touched.phone && formErrors.phone && (
              <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                value={formValues.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`pl-10 pr-10 w-full border p-3 rounded-lg text-gray-700 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 ${
                  touched.password && formErrors.password ? "border-red-500" : "border-gray-200"
                }`}
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 cursor-pointer text-gray-400 hover:text-blue-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </div>
            </div>
            {touched.password && formErrors.password && (
              <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading || !isFormValid()}
            className={`w-full py-3 mt-2 rounded-xl text-white font-semibold shadow-lg ${
              loading || !isFormValid()
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-600 to-blue-700 hover:scale-[1.02]"
            }`}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="text-center text-gray-500 text-xs mt-8">
          © {new Date().getFullYear()} Secure Admin Dashboard. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AdminRegister;
