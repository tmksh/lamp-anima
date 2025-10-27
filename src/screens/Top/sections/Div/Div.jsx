import React from "react";
import { ConcreteComponentNode } from "../../../../sp/components/ConcreteComponentNode";
import { Frame25 } from "../../../../sp/components/Frame25";
import { Group } from "../../../../sp/components/Group";

export const Div = () => {
  return (
    <div className="flex flex-col w-[375px] items-center justify-center gap-[30px] px-0 py-[50px] relative flex-[0_0_auto]">
      <Group
        className="!flex-[0_0_auto] !inline-flex !left-[unset] !w-[unset] !top-[unset]"
        divClassName="![align-self:unset] !w-fit"
        text="Column"
        text1="コラム"
      />
      <div className="flex flex-col items-center gap-[25px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-center justify-center gap-[35px] relative self-stretch w-full flex-[0_0_auto]">
          <Frame25 className="!ml-[-252.50px] !left-[unset] !top-[unset]" />
          <Frame25 className="!left-[unset] !top-[unset]" />
          <Frame25 className="!mr-[-252.50px] !left-[unset] !top-[unset]" />
          <div className="absolute top-[189px] left-80 w-10 h-10 bg-[#d2a3cb] rounded-[20px]">
            <img
              className="absolute top-[13px] left-[9px] w-[22px] h-3.5"
              alt="Vector"
              src="/img/vector-1-1.svg"
            />
          </div>

          <div className="absolute top-[189px] left-[15px] w-10 h-10 bg-[#d2a3cb] rounded-[20px] rotate-180">
            <img
              className="-rotate-180 absolute top-[13px] left-[9px] w-[22px] h-3.5"
              alt="Vector"
              src="/img/vector-1-2.svg"
            />
          </div>
        </div>

        <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
          <div className="bg-[#d2a3cb] relative w-2.5 h-2.5 rounded-[5px] aspect-[1]" />

          <div className="bg-[#d9d9d9] relative w-2.5 h-2.5 rounded-[5px] aspect-[1]" />

          <div className="bg-[#d9d9d9] relative w-2.5 h-2.5 rounded-[5px] aspect-[1]" />

          <div className="bg-[#d9d9d9] relative w-2.5 h-2.5 rounded-[5px] aspect-[1]" />
        </div>
      </div>

      <ConcreteComponentNode
        className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
        text="コラム一覧はこちら"
      />
    </div>
  );
};
