/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

export const ConcreteComponentNode = ({
  className,
  text = "lampの魅力",
  to,
}) => {
  return (
    <Link
      className={`inline-flex items-center justify-center gap-2.5 px-5 py-2 relative top-[1436px] left-[636px] bg-[#d2a3cb] rounded-[5px] ${className}`}
      to={to}
    >
      <div className="relative w-fit mt-[-1.00px] [font-family:'Shippori_Mincho',Helvetica] font-semibold text-white text-lg text-center tracking-[0] leading-[normal]">
        {text}
      </div>
    </Link>
  );
};

ConcreteComponentNode.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
};
