import React from "react";
import { Frame7 } from "./sections/Frame7";
import { Frame8 } from "./sections/Frame8";
import { Frame9 } from "./sections/Frame9";

export const ScreenWrapper = () => {
  return (
    <div
      className="flex flex-col items-start relative bg-[#fcfbf9]"
      data-model-id="4067:3069"
    >
      <Frame7 />
      <div className="flex w-[375px] items-center justify-center gap-2.5 px-5 py-[50px] relative flex-[0_0_auto]">
        <div className="flex-1 mt-[-1.00px] font-normal text-[15px] leading-[25.5px] relative [font-family:'Shippori_Mincho',Helvetica] text-[#111111] tracking-[0]">
          こちらでは、マシンピラティスインストラクター養成コースに関するよくある質問とその回答をご紹介します。受講にあたっての不安や疑問を解消し、安心してコースをスタートできるようサポートします。
        </div>
      </div>

      <Frame8 />
      <Frame9 />
    </div>
  );
};
