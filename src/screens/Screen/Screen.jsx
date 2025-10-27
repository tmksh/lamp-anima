import React from "react";
import { Frame141Wrapper } from "./sections/Frame141Wrapper";
import { FrameInstanceWrapper } from "./sections/FrameInstanceWrapper";
import { SectionComponentNode } from "./sections/SectionComponentNode";

export const Screen = () => {
  return (
    <div
      className="flex flex-col items-end relative bg-[#fcfbf9]"
      data-model-id="4067:3059"
    >
      <Frame141Wrapper />
      <div className="flex w-[375px] h-[238px] items-center justify-center gap-2.5 px-5 py-[50px] relative">
        <div className="flex-1 font-normal text-[15px] leading-[25.5px] relative [font-family:'Shippori_Mincho',Helvetica] text-[#111111] tracking-[0]">
          マシンピラティスインストラクター養成コースは、初めての方でも安心してわかりやすいステップ式のカリキュラムで進みます。下記のステップで、資格取得に向けた学びをしっかり進めていきます。
        </div>
      </div>

      <SectionComponentNode />
      <FrameInstanceWrapper />
    </div>
  );
};
