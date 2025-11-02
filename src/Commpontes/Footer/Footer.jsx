import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-teal-700 h-fit text-white py-6 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-white/20 pb-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">Credigi</span>
          </div>

          {/* Menu */}
          <nav className="flex flex-wrap justify-center md:justify-end gap-6 mt-4 md:mt-0 text-sm">
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              About Us
            </a>
            <a href="#" className="hover:underline">
              Destination
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
          </nav>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-4 text-sm">
          <p>
            Copyright © 2025 Credigi. Built with{" "}
            <span className="font-semibold">Gutenverse Blocks Addons.</span>
          </p>

          {/* Payment Icons */}
          <div className="flex gap-3 mt-3 md:mt-0">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
              alt="Visa"
              className="h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
              alt="Mastercard"
              className="h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Apple_Pay_logo.svg"
              alt="Apple Pay"
              className="h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Stripe_Logo%2C_revised_2016.svg"
              alt="Stripe"
              className="h-6"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
