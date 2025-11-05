import React, { useState } from "react";

import CallusSupportButoon from '../CallussupportButoon/CallusSupportButoon'
import { ChevronDown, PhoneCall } from "lucide-react"; 

const faqs = [
  {
    id: 1,
    question: "What is the transaction limit for your credit card?",
    answer:
      "The transaction limit depends on your credit card type and usage history. You can check your specific limit in the mobile app or by contacting our support.",
  },
  {
    id: 2,
    question: "Can I still use my credit card overseas?",
    answer:
      "Yes, you can use your card internationally anywhere Visa or Mastercard is accepted. Just enable international usage from your app before traveling.",
  },
  {
    id: 3,
    question: "Can I find out more about the security system at your bank?",
    answer:
      "Our system uses advanced encryption and multi-layer authentication to ensure all transactions and data are fully protected.",
  },
  {
    id: 4,
    question: "Can I create more than one account at your bank?",
    answer:
      "Yes, you can open multiple accounts as long as they serve different purposes (personal, business, etc.) and meet our eligibility requirements.",
  },
  {
    id: 5,
    question: "How many credit cards can I make with one account?",
    answer:
      "You can have up to three credit cards linked to one account, depending on your credit limit and profile.",
  },
];

const Frequesntquestion = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <section className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white py-20 px-6">
      
      <div className="max-w-3xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-[#1B756B] font-medium">
            F A Q S
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 bg-[linear-gradient(160deg,rgba(220,255,234,1)_0%,rgba(27,117,107,1)_51.8%)] bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Find quick answers to the most common banking and card-related questions.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="divide-y divide-gray-200 bg-white rounded-2xl shadow-lg border border-[#CDEBE6]">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              onClick={() => toggle(faq.id)}
              className="transition-all duration-300"
            >
              {/* Question */}
              <div className="flex items-center justify-between py-6 px-6 hover:bg-[#E6F4F1] cursor-pointer group transition-all duration-300">
                <p
                  className={`font-medium text-lg transition-all duration-300 ${
                    openId === faq.id
                      ? "text-[#1B756B]"
                      : "text-[#2A9D8F] group-hover:text-[#1B756B]"
                  }`}
                >
                  {String(faq.id).padStart(2, "0")}. {faq.question}
                </p>
                <ChevronDown
                  className={`h-6 w-6 transition-transform duration-300 ${
                    openId === faq.id
                      ? "rotate-180 text-[#1B756B]"
                      : "text-[#2A9D8F] group-hover:text-[#1B756B]"
                  }`}
                />
              </div>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openId === faq.id ? "max-h-40" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-16 text-center bg-gradient-to-r from-emerald-50 to-teal-50 p-10 rounded-2xl border border-[#CDEBE6] shadow-md">
          <h3 className="text-2xl font-bold text-[#1B756B]">
            Still have questions?
          </h3>
          <p className="text-gray-600 mt-2">
            Our support team is here to help you 24/7. Don’t hesitate to reach out.
          </p>

        
        <CallusSupportButoon phone="+91 98765 43210" label="Contact Us" />
   
        </div>
    </section>
  );
};

export default Frequesntquestion;







