/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Frame13 = ({
  className,
  rectangle = "/img/rectangle-5.png",
  text = "メンター制度",
  text1 = "1人1人に現役のインストラクターがつくので困ったときに直ぐ質問し解決することが可能です",
  rectangleClassName,
}) => {
  return (
    <div
      className={`flex flex-col w-[345px] items-center gap-[15px] pt-[15px] pb-[25px] px-[15px] relative top-[50px] left-[50px] bg-[#ffffffcc] ${className}`}
    >
      <img
        className={`relative self-stretch w-full aspect-[1.51] object-cover ${rectangleClassName}`}
        alt="Rectangle"
        src={rectangle}
      />

      <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative self-stretch h-[29px] mt-[-1.00px] [font-family:'Shippori_Mincho',Helvetica] font-medium text-[#111111] text-xl text-center tracking-[0] leading-[normal]">
          {text}
        </div>

        <div className="relative self-stretch [font-family:'Shippori_Mincho',Helvetica] font-normal text-[#111111] text-[15px] tracking-[0] leading-[25.5px]">
          {text1}
        </div>
      </div>
    </div>
  );
};

Frame13.propTypes = {
  rectangle: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
};
