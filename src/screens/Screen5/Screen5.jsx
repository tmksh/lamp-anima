import React from "react";
import { Frame10 } from "./sections/Frame10";
import { Frame11 } from "./sections/Frame11";
import { Frame12 } from "./sections/Frame12";

export const Screen5 = () => {
  return (
    <div
      className="flex flex-col items-end relative bg-[#fcfbf9]"
      data-model-id="4067:2977"
    >
      <Frame10 />
      <div className="flex h-[238px] items-center justify-center gap-2.5 px-5 py-[50px] relative self-stretch w-full bg-[#fcfbf9]">
        <div className="relative flex-1 font-normal text-[15px] tracking-[0] leading-[25.5px] [font-family:'Shippori_Mincho',Helvetica] text-[#111111]">
          当スタジオの講師は、豊富な現場経験と高い指導力を備えた専門家です。確かな技術で、初心者から上級者まで、それぞれの目標に合わせた指導を行います。資格取得後のキャリア支援にも力を入れ、あなたの夢を実現するお手伝いをします。
        </div>
      </div>

      <Frame11 />
      <Frame12 />
    </div>
  );
};
