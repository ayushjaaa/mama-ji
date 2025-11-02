import { useButton } from "react-aria";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom"; // ✅ Import navigate

const Button = ({
  onPress,
  children,
  variant = "primary",
  icon,
  buttonText,
  to, // ✅ new prop for navigation route
}) => {
  const ref = useRef();
  const [isPressed, setIsPressed] = useState(false);
  const [ripples, setRipples] = useState([]);
  const navigate = useNavigate(); // ✅ initialize navigate

  const handlePress = () => {
    console.log(to)
    if (onPress) onPress(); // run custom onPress if given
    if (to) navigate(to); // navigate if 'to' prop is provided
  };

  const { buttonProps, isPressed: ariaPressed } = useButton(
    {
      onPressStart: (e) => {
        setIsPressed(true);
        const rect = ref.current.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        setRipples([...ripples, { x, y, size, id: Date.now() }]);
      },
      onPressEnd: () => setIsPressed(false),
      onPress: handlePress, // ✅ integrated custom press handler
    },
    ref
  );

  // === Styles ===
  const base =
    "relative overflow-hidden font-semibold rounded-full px-8 py-4 flex items-center justify-center gap-2 focus:outline-none transition-all duration-200 ease-in-out text-lg";

  const variants = {
    primary:
      "bg-[#22776f] text-white hover:bg-[#195E54] shadow-md hover:shadow-lg",
    secondary:
      "bg-transparent text-[#195E54] border border-[#195E54] hover:bg-[#E6F4F1]",
  };

  return (
    <button
      {...buttonProps}
      ref={ref}
      className={`${base} ${variants[variant]} ${
        isPressed || ariaPressed ? "scale-95" : "scale-100"
      }`}
    >
      {icon && <span className="text-xl">{icon}</span>}
      {buttonText || children}

      {/* Ripple effect */}
      <AnimatePresence>
        {ripples.map((r) => (
          <motion.span
            key={r.id}
            initial={{ opacity: 0.4, scale: 0 }}
            animate={{ opacity: 0, scale: 2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              position: "absolute",
              top: r.y,
              left: r.x,
              width: r.size,
              height: r.size,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.3)",
              pointerEvents: "none",
            }}
            onAnimationComplete={() =>
              setRipples((prev) => prev.filter((p) => p.id !== r.id))
            }
          />
        ))}
      </AnimatePresence>
    </button>
  );
};

export default Button;
