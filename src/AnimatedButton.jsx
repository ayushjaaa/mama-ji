import { useButton } from "react-aria";
import { useRef, useState } from "react";
import { ArrowRight, CreditCard, Users } from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ import navigate

const AnimatedButton = ({
  onPress,
  children,
  icon = "card",
  buttonText,
  to, // ✅ add prop for navigation
}) => {
  const ref = useRef();
  const [isPressed, setIsPressed] = useState(false);
  const navigate = useNavigate(); // ✅ initialize

  // 🎯 handle navigation onPress
  const handlePress = () => {
    if (onPress) onPress(); // run custom onPress
    if (to) navigate(to); // navigate if 'to' prop provided
  };

  // React Aria
  const { buttonProps, isPressed: ariaPressed } = useButton(
    {
      onPressStart: () => setIsPressed(true),
      onPressEnd: () => setIsPressed(false),
      onPress: handlePress, // ✅ use our handler
    },
    ref
  );

  // Icon logic
  const IconComponent =
    icon === "card"
      ? CreditCard
      : icon === "user"
      ? Users
      : ArrowRight;

  return (
    <button
      {...buttonProps}
      ref={ref}
      className={`relative flex items-center justify-center gap-2 px-6 py-3 text-white rounded-full font-semibold 
        transition-all duration-200 ease-in-out select-none
        ${isPressed || ariaPressed ? "scale-95 bg-indigo-700" : "bg-indigo-600 hover:bg-indigo-500"}
        focus:outline-none focus:ring-4 focus:ring-indigo-300`}
    >
      {/* Icon */}
      <IconComponent size={20} className="text-white" />

      {/* Text */}
      {buttonText}

      {/* Ripple */}
      <span
        className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
          isPressed ? "opacity-30 bg-white" : "opacity-0"
        }`}
      />
    </button>
  );
};

export default AnimatedButton;
