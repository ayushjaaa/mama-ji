// src/components/Nav/Nav.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X, Home, Info, Star, BookOpen, Phone } from "lucide-react";
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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <header className="flex justify-between items-center px-5 sm:px-8 md:px-10 py-4 bg-white shadow-sm relative z-[60]">
      {/* Logo */}
      <div className="flex items-center gap-2">
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
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(!open)}
        className="lg:hidden w-8 h-8 flex items-center justify-center"
      >
        {open ? (
          <X size={26} className="text-gray-800" />
        ) : (
          <div className="flex flex-col justify-between w-6 h-5">
            <span className="block h-[3px] bg-gray-800 rounded"></span>
            <span className="block h-[3px] bg-gray-800 rounded"></span>
            <span className="block h-[3px] bg-gray-800 rounded"></span>
          </div>
        )}
      </motion.button>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="fixed top-0 right-0 max-w-xs w-full h-[100dvh] bg-white/80 backdrop-blur-lg shadow-2xl z-50 flex flex-col justify-between rounded-l-2xl overflow-y-auto"
          >
            <div className="p-6 sm:p-8 flex flex-col space-y-5 pt-[max(env(safe-area-inset-top),1rem)]">
              <h2 className="text-xl font-semibold text-gray-800">Menu</h2>

              {navItems.map((link, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, x: 30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: i * 0.05 }}
  >
    <Link
      to={link.route}
      onClick={() => setOpen(false)}
      className="flex items-center gap-3 py-2 px-3 rounded-lg transition active:scale-[0.97] active:bg-[#e9f9f5]"
    >
      <motion.span
        whileTap={{ scale: 0.9 }}
        className="text-[#1C756B] flex-shrink-0"
      >
        {link.icon}
      </motion.span>
      <span className="text-gray-800 font-medium">{link.label}</span>
    </Link>
  </motion.div>
))}


              <div className="pt-6 border-t border-gray-200">
                <Button
                  variant="primary"
                  buttonText="Become Partner"
                  to="/BecomePartner"
                />
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 text-sm text-gray-600 space-y-2">
              <p>📞 +91 98765 43210</p>
              <p>✉️ support@credigi.com</p>
              <div className="flex space-x-4 pt-2 text-[#1C756B] text-lg">
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
