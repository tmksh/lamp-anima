/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Group = ({
  className,
  text = "Message",
  text1 = "１人も取り残さない<br/>サポート体制",
  divClassName,
  divClassNameOverride,
}) => {
  return (
    <div
      className={`flex flex-col w-[216px] items-start relative top-[1436px] left-[370px] ${className}`}
    >
      <div
        className={`relative self-stretch mt-[-1.00px] [font-family:'Allura',Helvetica] font-normal text-[#dec17a] text-[32px] tracking-[0] leading-[normal] ${divClassName}`}
      >
        {text}
      </div>

      <div
        className={`relative self-stretch mt-[-26px] [font-family:'Shippori_Mincho',Helvetica] font-medium text-[#111111] text-2xl tracking-[0] leading-[normal] ${divClassNameOverride}`}
      >
        {text1}
      </div>
    </div>
  );
};

Group.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
};
