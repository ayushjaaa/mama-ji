import React from 'react';
import BecomePartner from '../Commpontes/Form/BecomePartner';
import { CheckCircle } from 'lucide-react';
import Nav from '../Commpontes/Nav/Nav';
import Footer from '../Commpontes/Footer/Footer';

const benefits = [
  "Earn extra income with flexible opportunities",
  "Work with a trusted and growing network",
  "Access exclusive resources and training",
  "Grow your business with our support",
];

const PartnerPage = () => {
  return (
   <>
    <Nav></Nav>
    <div className="bg-gray-50 min-h-screen">

      {/* Hero / Benefits Section */}
      <div className="bg-green-50 py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12">
          
          {/* Credit Card Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="https://media.istockphoto.com/id/1360389625/photo/hand-with-protective-work-gloves-holding-a-credit-card.jpg?s=1024x1024&w=is&k=20&c=y9Fe5QgdE02UT8jfXFhXmZxLygEyfQPwePxWlNMPxo8="
              alt="Credit Card"
              className="rounded-2xl shadow-xl w-full max-w-md transform transition duration-500 hover:scale-105"
            />
          </div>

          {/* Benefits */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-green-900 mb-4">
              Become Our <span className="text-green-700">Partner</span>
            </h1>
            <p className="text-gray-700 mb-8 text-lg">
              Join our partner network and enjoy exclusive benefits while growing your business.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transition transform hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="bg-green-700 w-12 h-12 flex items-center justify-center rounded-full mb-4 text-white">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <p className="text-gray-800 font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-6xl mx-auto px-6 lg:px-16 py-12">
        <BecomePartner />
      </div>
      <Footer/>
    </div></>
  );
};

export default PartnerPage;
