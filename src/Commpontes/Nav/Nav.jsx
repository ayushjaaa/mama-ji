// src/components/Nav/Nav.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X, Home, Info, Star, BookOpen, Phone } from "lucide-react";
import Button from "../Button.jsx/Button";

const navItems = [
  { label: "Home", route: "/", icon: <Home size={20} /> },
  { label: "About Us", route: "/about", icon: <Info size={20} /> },
  { label: "Features", route: "/feature", icon: <Star size={20} /> },
  { label: "Blog", route: "/blog", icon: <BookOpen size={20} /> },
  { label: "Contact Us", route: "/contact", icon: <Phone size={20} /> },
];

const Nav = () => {
  const [open, setOpen] = useState(false);

  // prevent body scroll when nav is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <header className="flex justify-between items-center px-6 md:px-10 py-5 relative bg-white z-[60] shadow-sm">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#1C756B] to-[#4ad1b2] flex items-center justify-center shadow-md">
          <span className="text-white font-extrabold text-lg">C</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 tracking-wide">
          Credigi
        </h1>
      </div>

      {/* Desktop nav */}
      <nav className="hidden lg:flex gap-8 items-center font-medium text-gray-700">
        {navItems.map((item, i) => (
          <Link
            key={i}
            to={item.route}
            className="relative group transition text-gray-700 hover:text-[#1C756B]"
          >
            {item.label}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#1C756B] transition-all duration-300 group-hover:w-full rounded-full"></span>
          </Link>
        ))}
        <Button variant="primary" buttonText="Become Partner" to="/BecomePartner" />
      </nav>

      {/* Hamburger / Close button */}
      {!open ? (
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpen(true)}
          className="flex lg:hidden flex-col justify-between w-7 h-6 cursor-pointer"
        >
          <span className="block h-[3px] bg-gray-800 rounded"></span>
          <span className="block h-[3px] bg-gray-800 rounded"></span>
          <span className="block h-[3px] bg-gray-800 rounded"></span>
        </motion.button>
      ) : (
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpen(false)}
          className="z-[100] lg:hidden flex flex-col justify-center items-center w-7 h-7"
        >
          <X size={28} className="text-gray-800" />
        </motion.button>
      )}

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-[80vw] h-screen bg-white/70 backdrop-blur-md shadow-2xl z-50 flex flex-col justify-between rounded-l-2xl"
          >
            <div className="p-8 flex flex-col space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Menu</h2>

              {/* Menu Links */}
              {navItems.map((link, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-3 py-2 px-3 rounded-xl cursor-pointer hover:bg-gradient-to-r hover:from-[#e6f5f3] hover:to-[#f2fcfa] transition"
                >
                  <span className="text-[#1C756B]">{link.icon}</span>
                  <Link
                    to={link.route}
                    onClick={() => setOpen(false)}
                    className="text-gray-800 font-medium"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <div className="pt-8 border-t border-gray-200">
                <Button
                  variant="primary"
                  buttonText="Become Partner"
                  to="/BecomePartner"
                />
              </div>
            </div>

            {/* Footer Section */}
            <div className="p-6 border-t border-gray-200 text-sm text-gray-600 flex flex-col space-y-2">
              <p>📞 +91 98765 43210</p>
              <p>✉️ support@credigi.com</p>
              <div className="flex space-x-4 pt-2 text-[#1C756B]">
                <i className="ri-facebook-fill"></i>
                <i className="ri-instagram-line"></i>
                <i className="ri-twitter-x-line"></i>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;
