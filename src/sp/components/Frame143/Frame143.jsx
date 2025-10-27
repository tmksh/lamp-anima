/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Frame143 = ({
  className,
  frame = "/img/frame-144.svg",
  divClassName,
  text = "1人1人に寄り添った講義",
  text1 = "講義中はインストラクター2名体制で直接サポートします。また講義時間外は1人に1名現役のインストラクターがつくので二人三脚ですすめます。LINEでの相談も可能です。",
  text2 = "01",
}) => {
  return (
    <div
      className={`flex flex-col w-[335px] items-end justify-end relative top-[50px] left-[1255px] ${className}`}
    >
      <img
        className="relative w-[365px] flex-[0_0_auto] mr-[-30.00px]"
        alt="Frame"
        src={frame}
      />

      <div className="flex flex-col w-[305px] min-h-[250px] items-start gap-[15px] pt-2.5 pb-5 px-5 relative flex-[0_0_auto] -mt-10 bg-[#ffffffcc] rounded-[10px]">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Shippori_Mincho',Helvetica] font-semibold text-[#dec17a] text-[40px] tracking-[0] leading-[normal]">
          {text2}
        </div>

        <div
          className={`relative w-fit [font-family:'Shippori_Mincho',Helvetica] font-bold text-[#111111] text-lg tracking-[0] leading-[normal] ${divClassName}`}
        >
          {text}
        </div>

        <div className="relative self-stretch [font-family:'Shippori_Mincho',Helvetica] font-normal text-[#111111] text-[15px] tracking-[0] leading-[25.5px]">
          {text1}
        </div>
      </div>
    </div>
  );
};

Frame143.propTypes = {
  frame: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};
