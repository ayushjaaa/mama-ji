import React, { useState, useEffect } from 'react';
import ConactInpurts from '../Form/ConactInpurts';

const PopeUpForm = () => {
  const [isoOpen, setisoOpen] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isoOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isoOpen]);

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        setisoOpen(false);
        setIsClosing(false);
      }, 300); // match transition duration
      return () => clearTimeout(timer);
    }
  }, [isClosing]);

  if (!isoOpen) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div
        className={`bg-white rounded-lg shadow-lg w-[80%] max-h-[80vh] overflow-y-auto relative p-6
        transform transition-all duration-300
        ${isClosing ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
      >
   <button
  className="absolute right-3 top-3 text-gray-500 hover:text-gray-800 text-xl 
             transition-transform duration-150 transform active:scale-90"
  onClick={() => setIsClosing(true)}
>
  ✖
</button>


        <ConactInpurts />
      </div>
    </div>
  );
};

export default PopeUpForm;
