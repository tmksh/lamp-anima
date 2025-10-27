/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Frame50 } from "../Frame50";

export const Frame141 = ({
  className,
  rectangleClassName,
  rectangle = "/img/rectangle-60.png",
  text = "lampの魅力",
  text1 = "fascination",
  frame50Group = "/img/group-1.png",
  divClassName,
}) => {
  return (
    <div
      className={`flex flex-col w-[375px] items-center relative top-[50px] left-[3200px] ${className}`}
    >
      <img
        className={`relative self-stretch w-full h-[300px] ${rectangleClassName}`}
        alt="Rectangle"
        src={rectangle}
      />

      <div className="flex flex-col w-[300px] items-center justify-center px-[60px] py-[25px] relative flex-[0_0_auto] mt-[-55px] bg-[#fcfbf9] rounded-[10px]">
        <div
          className={`relative w-fit mt-[-1.00px] [font-family:'Shippori_Mincho',Helvetica] font-medium text-[#111111] text-2xl tracking-[0] leading-[normal] ${divClassName}`}
        >
          {text}
        </div>

        <div className="relative w-fit [font-family:'Allura',Helvetica] font-normal text-[#d2a3cb] text-xl tracking-[0] leading-[normal]">
          {text1}
        </div>
      </div>

      <Frame50 className="!absolute !left-0 !top-0" group={frame50Group} />
    </div>
  );
};

Frame141.propTypes = {
  rectangle: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  frame50Group: PropTypes.string,
};
