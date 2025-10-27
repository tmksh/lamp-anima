import React from "react";
import { Frame4 } from "./sections/Frame4";
import { Frame5 } from "./sections/Frame5";
import { Frame6 } from "./sections/Frame6";

export const ScreenScreen = () => {
  return (
    <div
      className="flex flex-col items-end relative bg-[#fcfbf9]"
      data-model-id="4067:2918"
    >
      <Frame4 />
      <Frame5 />
      <Frame6 />
    </div>
  );
};
