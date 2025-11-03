import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function AnimatedNav() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["Home", "Services", "About", "Contact"];

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[#1a1a1a] overflow-hidden">
      {/* Logo */}
      <motion.div
        animate={isOpen ? { scale: 0.7, opacity: 0 } : { scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-extrabold text-5xl select-none tracking-widest"
      >
        UI<span className="text-blue-400">6</span>
      </motion.div>

      {/* Open Button */}
      {!isOpen && (
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="absolute top-8 right-8 z-50 flex flex-col justify-between w-7 h-6 cursor-pointer"
        >
          <span className="block h-[3px] bg-white rounded"></span>
          <span className="block h-[3px] bg-white rounded"></span>
          <span className="block h-[3px] bg-white rounded"></span>
        </motion.button>
      )}

      {/* Close Button */}
      {isOpen && (
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 z-50"
        >
          <motion.span
            animate={{ rotate: 45, y: 3 }}
            className="block w-7 h-[3px] bg-black rounded mb-1"
          />
          <motion.span
            animate={{ rotate: -45, y: -3 }}
            className="block w-7 h-[3px] bg-black rounded"
          />
        </motion.button>
      )}

      {/* Animated Background Layers */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ scale: 0, rotate: -45, opacity: 0 }}
              animate={{ scale: 2.5, rotate: -45, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute w-[150vw] h-[150vh] bg-white origin-center z-10 shadow-2xl"
            />
          </>
        )}
      </AnimatePresence>

      {/* Menu Links */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{
              duration: 0.6,
              delayChildren: 0.3,
              staggerChildren: 0.1,
              ease: "easeInOut",
            }}
            className="absolute z-20 flex flex-col items-center space-y-8 text-[#111] text-2xl font-semibold"
          >
            {links.map((link, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                whileHover={{
                  scale: 1.1,
                  color: "#2563eb",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="cursor-pointer relative group"
              >
                {link}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
