import React, { useState } from 'react'; // ✅ useState import
import { Menu, X } from "lucide-react";
import Button from '../Button.jsx/Button';
import { Link } from 'react-router-dom';
import AnimatedButton from '../Button.jsx/Button';

const Nav = () => {
  const [open, setOpen] = useState(false); // ✅ state for mobile menu

  const navarray = [
    { label: "Home", route: '/' },
    { label: "About Us", route: '/about' },
    { label: "Features", route: '/feature' },
    { label: "Blog", route: '/blog' },
    { label: "Contact Us", route: '/contact' }
  ];

  return (
    <header className="flex justify-between items-center px-6 md:px-10 py-6 relative">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
          <span className="text-white font-bold">C</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Credigi</h1>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex gap-8 items-center font-medium text-gray-700">
        {navarray.map((el, idx) => (
          <Link key={idx} to={el.route} className="hover:text-[#1C756B] transition">
            {el.label}
          </Link>
        ))}
    <Button variant="primary" buttonText="Become Partner" to="/BecomePartner" />
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden text-gray-700 focus:outline-none"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 lg:hidden z-50">
          {navarray.map((el, idx) => (
            <Link
              key={idx}
              to={el.route}
              className="py-2 text-lg w-full text-center hover:bg-gray-100 transition"
              onClick={() => setOpen(false)}
            >
              {el.label}
            </Link>
          ))}
    <button
        variant="primary"
        buttonText="Become Partner"
    
        to="/BecomePartner" // ✅ this triggers navigation
      />
        </div>
      )}
    </header>
  );
};

export default Nav;
