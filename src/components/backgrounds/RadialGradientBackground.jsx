import React from "react";

const RadialGradientBackground = ({ variant }) => {
  // Adding 'absolute' makes the placeholder text float
  // so it doesn't push your main portfolio content to the right
  return (
    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 text-xs z-0">
      RadialGradientBackground
    </div>
  );
};

export default RadialGradientBackground;
