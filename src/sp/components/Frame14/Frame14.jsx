/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Frame14 = ({
  className,
  frame = "/img/frame-144-1.svg",
  text = "インストラクターとしての<br/>デビューを応援",
  text1 = "養成講座では６０分のクラス指導ができる実践的なスキルを身に着けることができます。実際に現役のインストラクターに向けて模擬レッスンを行い、レビューをもらう機会もあり卒業後すぐにインストラクターとして勤務可能です。また卒業後、麻布一等地にあるlampの当スタジオで勤務することも可能です。",
  text2 = "02",
}) => {
  return (
    <div
      className={`flex flex-col w-[335px] items-start justify-center relative top-[50px] left-[870px] ${className}`}
    >
      <img
        className="relative w-[335px] flex-[0_0_auto]"
        alt="Frame"
        src={frame}
      />

      <div className="flex flex-col w-[305px] min-h-[250px] items-start gap-[15px] pt-2.5 pb-5 px-5 relative flex-[0_0_auto] -mt-10 bg-[#ffffffcc] rounded-[10px]">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Shippori_Mincho',Helvetica] font-semibold text-[#dec17a] text-[40px] tracking-[0] leading-[normal]">
          {text2}
        </div>

        <div className="relative w-fit [font-family:'Shippori_Mincho',Helvetica] font-bold text-[#111111] text-lg tracking-[0] leading-[normal]">
          {text}
        </div>

        <div className="relative self-stretch [font-family:'Shippori_Mincho',Helvetica] font-normal text-[#111111] text-[15px] tracking-[0] leading-[25.5px]">
          {text1}
        </div>
      </div>
    </div>
  );
};

Frame14.propTypes = {
  frame: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};
