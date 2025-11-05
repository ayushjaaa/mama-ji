import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 text-gray-800">
      {/* Container */}
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-extrabold text-red-500 mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          Sorry, the page you’re looking for doesn’t exist. Check the URL or go back to the homepage.
        </p>
        {/* Call to Action */}
        <a
          href="/"
          className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition transform hover:scale-105"
        >
          Back to Home
        </a>
      </div>

      {/* Illustration */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/1006/1006549.png"
        alt="Credit card illustration"
        className="w-64 mt-10 md:w-80"
      />
    </div>
  );
};

export default NotFound;
