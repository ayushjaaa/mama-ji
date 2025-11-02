import React from "react";
import { Phone } from "lucide-react"; // modern icon set
import CallusSupportButoon from "../CallussupportButoon/callusSupportButoon";

const Callsupport = () => {
  return (
    <div className="max-w-md mx-auto my-10 text-center bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-center mb-4">
        <div className="bg-emerald-600 p-3 rounded-full shadow-md">
          <Phone className="text-white w-6 h-6" />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Talk to Our Support Team
      </h2>

      <p className="text-gray-600 mb-4">
        Have questions or need help? We’re just one tap away.
      </p>

      {/* <CallusSupportButoon phone="+91 98765 43210" label="Contact Us" /> */}

    </div>
  );
};

export default Callsupport;


