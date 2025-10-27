import React from "react";

export const Frame = () => {
  return (
    <div className="flex flex-col w-[375px] h-[610px] items-center justify-end gap-[30px] pt-[164px] pb-[70px] px-5 relative bg-[url(/img/frame-80.png)] bg-cover bg-[50%_50%]">
      <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
        <div className="inline-flex items-center justify-center gap-2.5 px-[15px] py-2.5 relative flex-[0_0_auto] bg-[#d2a3cb] rounded-[5px]">
          <div className="w-fit mt-[-1.00px] font-bold text-white text-[32px] relative [font-family:'Shippori_Mincho',Helvetica] tracking-[0] leading-[normal]">
            人生が変わる”6日間”
          </div>
        </div>

        <div className="flex flex-col items-start gap-2.5 px-[5px] py-[15px] relative self-stretch w-full flex-[0_0_auto] bg-[#ffffffa6] rounded-[5px]">
          <div className="inline-flex flex-col items-center justify-center pl-2.5 pr-0 py-0 relative flex-[0_0_auto]">
            <div className="w-fit mt-[-1.00px] font-semibold text-[#111111] text-base leading-[27.2px] whitespace-nowrap relative [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
              実践的なスキルと確かな指導力を手に入れ
            </div>

            <img
              className="relative self-stretch w-full h-0.5 mb-[-1.00px]"
              alt="Line"
              src="/img/line-4.svg"
            />
          </div>

          <div className="inline-flex flex-col items-start pl-2.5 pr-0 py-0 relative flex-[0_0_auto]">
            <div className="w-fit mt-[-1.00px] font-semibold text-[#111111] text-base leading-[27.2px] whitespace-nowrap relative [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
              誰かの成長を支えるインストラクターに
            </div>

            <img
              className="relative self-stretch w-full h-0.5 mb-[-1.00px]"
              alt="Line"
              src="/img/line-5.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
