import React from "react";
import { Frame1 } from "./sections/Frame1";
import { Frame2 } from "./sections/Frame2";
import { Frame3 } from "./sections/Frame3";

export const Lamp = () => {
  return (
    <div
      className="flex flex-col items-start relative bg-[#fcfbf9]"
      data-model-id="4067:2966"
    >
      <Frame1 />
      <Frame2 />
      <Frame3 />
    </div>
  );
};
