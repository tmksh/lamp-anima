/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Frame163 = ({
  className,
  iconfinderSocial = "/img/iconfinder-social-media-applications-5line-4102577-113787-1-2-1.svg",
}) => {
  return (
    <div
      className={`inline-flex h-[42px] items-center justify-center gap-[5px] px-[15px] py-0 relative top-[1436px] left-[825px] bg-[#06c755] rounded-[5px] ${className}`}
    >
      <img
        className="relative w-10 h-10"
        alt="Iconfinder social"
        src={iconfinderSocial}
      />

      <div className="relative w-fit [font-family:'Shippori_Mincho',Helvetica] font-semibold text-white text-lg text-center tracking-[0] leading-[normal]">
        LINE登録はこちら
      </div>
    </div>
  );
};

Frame163.propTypes = {
  iconfinderSocial: PropTypes.string,
};
