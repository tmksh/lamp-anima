/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Frame68 = ({
  className,
  rectangle = "/img/rectangle-64.png",
  text = "01",
  text1 = "事前面談",
  text2 = "受講前に個別面談を実施し、あなたの目標や希望に合わせた学習プランを作成します。学びのスタートをサポートする重要なステップです。",
}) => {
  return (
    <div
      className={`flex flex-col w-[335px] items-center justify-center px-5 py-0 relative top-[50px] left-[2450px] bg-[#ffffffcc] rounded-[10px] shadow-[0px_10px_10px_#0000000d] ${className}`}
    >
      <img
        className="relative w-[335px] h-[228.37px] ml-[-20.00px] mr-[-20.00px] object-cover"
        alt="Rectangle"
        src={rectangle}
      />

      <div className="flex flex-col items-start gap-3.5 px-0 py-5 relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex items-center justify-center gap-2.5 px-2.5 py-0 relative flex-[0_0_auto] bg-[#d2a3cb] rounded-[5px]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Shippori_Mincho',Helvetica] font-bold text-white text-2xl tracking-[7.20px] leading-10 whitespace-nowrap">
            {text}
          </div>
        </div>

        <div className="font-medium text-lg leading-[normal] relative self-stretch [font-family:'Shippori_Mincho',Helvetica] text-[#111111] tracking-[0]">
          {text1}
        </div>

        <div className="font-normal text-[15px] leading-[25.5px] relative self-stretch [font-family:'Shippori_Mincho',Helvetica] text-[#111111] tracking-[0]">
          {text2}
        </div>
      </div>
    </div>
  );
};

Frame68.propTypes = {
  rectangle: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};
