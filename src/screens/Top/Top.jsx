import React from "react";
import { Frame50 } from "../../sp/components/Frame50";
import { Div } from "./sections/Div";
import { DivWrapper } from "./sections/DivWrapper";
import { Frame } from "./sections/Frame";
import { Frame184Wrapper } from "./sections/Frame184Wrapper";
import { FrameWrapper } from "./sections/FrameWrapper";

export const Top = () => {
  return (
    <div
      className="flex flex-col items-end relative bg-[#fcfbf9]"
      data-model-id="4067:2779"
    >
      <Frame />
      <FrameWrapper />
      <DivWrapper />
      <Div />
      <Frame184Wrapper />
      <Frame50 className="!absolute !left-0 !top-0" group="/img/group-7.png" />
    </div>
  );
};
