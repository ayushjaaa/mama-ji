// src/components/AnimatedNav/Trigger.jsx
import React, { memo } from "react";
import { motion } from "framer-motion";

/**
 * Trigger component: shows hamburger or close icon
 * - Large tap area
 * - CSS-only hover feedback for speed
 */
const Trigger = memo(function Trigger({ isOpen, onOpen, onClose }) {
  // little animation on tap uses CSS transform, cheaper than JS
  return (
    <div>
      {!isOpen ? (
        <button
          onClick={onOpen}
          aria-label="Open menu"
          className="w-12 h-12 rounded-md flex flex-col items-center justify-center gap-[6px] bg-transparent focus:outline-none active:scale-[0.98] touch-manipulation"
        >
          <span className="block w-6 h-[3px] bg-white rounded transition-all"></span>
          <span className="block w-6 h-[3px] bg-white rounded transition-all"></span>
          <span className="block w-6 h-[3px] bg-white rounded transition-all"></span>
        </button>
      ) : (
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="w-12 h-12 rounded-md flex items-center justify-center focus:outline-none active:scale-[0.98] touch-manipulation bg-transparent"
        >
          {/* Using two rotated bars for close icon - cheap CSS transforms */}
          <motion.span
            initial={{ rotate: 0 }}
            animate={{ rotate: 45 }}
            className="absolute block w-6 h-[3px] bg-[#222] rounded"
          />
          <motion.span
            initial={{ rotate: 0 }}
            animate={{ rotate: -45 }}
            className="absolute block w-6 h-[3px] bg-[#222] rounded"
          />
        </button>
      )}
    </div>
  );
});

export default Trigger;
