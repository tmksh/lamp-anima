/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Frame50 = ({ className, group = "/img/group-1.png" }) => {
  return (
    <div
      className={`flex w-[375px] h-20 items-center justify-between px-5 py-[5px] relative top-[50px] left-[445px] bg-[#ffffff66] ${className}`}
    >
      <img
        className="relative w-[60px] h-[32.37px] z-[1]"
        alt="Group"
        src={group}
      />

      <div className="flex flex-col w-[30px] items-start gap-3 relative z-0">
        <img
          className="relative w-[35px] h-[5px] mt-[-2.50px] ml-[-2.50px] mr-[-2.50px]"
          alt="Line"
          src="/img/line-9-1.svg"
        />

        <img
          className="relative w-[35px] h-[5px] ml-[-2.50px] mr-[-2.50px]"
          alt="Line"
          src="/img/line-9-1.svg"
        />

        <img
          className="relative w-[35px] h-[5px] mb-[-2.50px] ml-[-2.50px] mr-[-2.50px]"
          alt="Line"
          src="/img/line-9-1.svg"
        />
      </div>
    </div>
  );
};

Frame50.propTypes = {
  group: PropTypes.string,
};
