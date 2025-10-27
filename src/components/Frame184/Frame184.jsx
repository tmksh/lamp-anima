/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { Frame163 } from "../Frame163";
import { Group } from "../Group";

export const Frame184 = ({
  className,
  frame163IconfinderSocial = "/img/iconfinder-social-media-applications-5line-4102577-113787-1-2.svg",
  elementClassName,
  element = "/img/2024-09-08-1-46-17-1.png",
  logo = "/img/logo-1.svg",
  to,
  to1,
  to2,
  to3,
}) => {
  return (
    <div
      className={`flex flex-col w-[375px] items-start relative top-[1436px] left-[1107px] ${className}`}
    >
      <div className="flex flex-col w-[375px] items-center justify-center gap-[30px] px-5 py-[50px] relative flex-[0_0_auto] bg-[url(/img/frame-14.png)] bg-cover bg-[50%_50%]">
        <Group
          className="!flex-[0_0_auto] !inline-flex !left-[unset] !w-[unset] !top-[unset]"
          text="Request &amp; Contact"
          text1="受講申し込み・お問い合わせ"
        />
        <p className="self-stretch font-normal text-transparent text-[15px] leading-[25.5px] relative [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
          <span className="text-[#111111]">
            受講のお申し込みはもちろん、受講を迷っている方や疑問がある方もこちらの
          </span>

          <span className="font-semibold text-[#06c755] underline">
            公式LINE
          </span>

          <span className="text-[#111111]">
            からお気軽にご連絡ください。皆様の不安や疑問に丁寧にお答えいたします。あなたの新しい一歩を全力でサポートいたしますので、ぜひご相談ください。
          </span>
        </p>

        <Frame163
          className="!left-[unset] !top-[unset]"
          iconfinderSocial={frame163IconfinderSocial}
        />
      </div>

      <div className="flex flex-col w-[375px] items-start gap-2.5 px-[45px] py-[30px] relative flex-[0_0_auto]">
        <img
          className="relative w-[285px] h-[134px] aspect-[2.12] object-cover"
          alt="Image"
          src="/img/image-15.png"
        />
      </div>

      <div className="flex flex-col items-start justify-end relative self-stretch w-full flex-[0_0_auto]">
        <img
          className={`relative w-[375.45px] h-[225px] mr-[-0.45px] ${elementClassName}`}
          alt="Element"
          src={element}
        />

        <div className="flex flex-col w-[375px] items-start gap-10 px-5 py-10 relative flex-[0_0_auto]">
          <div className="flex flex-col w-[264px] items-start gap-5 relative flex-[0_0_auto]">
            <img
              className="relative w-[100px] h-[53.95px]"
              alt="Logo"
              src={logo}
            />

            <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Shippori_Mincho',Helvetica] font-semibold text-[#111111] text-lg tracking-[0] leading-[normal]">
                ピラティススタジオ lamp
              </div>

              <div className="relative self-stretch [font-family:'Shippori_Mincho',Helvetica] font-normal text-[#111111] text-[15px] tracking-[0] leading-[normal]">
                〒106-0045
                <br />
                東京都港区麻布十番 2-1-10 静屋ビル 3F
              </div>
            </div>
          </div>

          <div className="inline-flex items-end gap-[60px] relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start gap-[15px] relative flex-[0_0_auto]">
              <Link
                className="relative w-fit mt-[-1.00px] [font-family:'Shippori_Mincho',Helvetica] font-semibold text-[#111111] text-sm text-center tracking-[0] leading-[normal] block"
                to={to}
              >
                lampの魅力
              </Link>

              <Link
                className="self-stretch font-semibold text-[#111111] text-sm leading-[normal] relative [font-family:'Shippori_Mincho',Helvetica] tracking-[0] block"
                to={to1}
              >
                講師紹介
              </Link>

              <div className="w-fit font-semibold text-[#111111] text-sm text-center leading-[normal] relative [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
                プランのご紹介
              </div>

              <div className="w-fit font-semibold text-[#111111] text-sm text-center leading-[normal] relative [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
                コラム
              </div>

              <Link
                className="w-fit font-semibold text-[#111111] text-sm text-center leading-[normal] relative [font-family:'Shippori_Mincho',Helvetica] tracking-[0] block"
                to={to2}
              >
                よくある質問
              </Link>

              <Link
                className="self-stretch font-semibold text-[#111111] text-sm leading-[normal] relative [font-family:'Shippori_Mincho',Helvetica] tracking-[0] block"
                to={to3}
              >
                受講の流れ
              </Link>

              <div className="w-fit font-semibold text-[#111111] text-sm text-center leading-[normal] relative [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
                受講申し込み
              </div>
            </div>

            <div className="inline-flex flex-col h-[244px] items-start justify-end gap-[15px] relative flex-[0_0_auto]">
              <div className="w-fit font-semibold text-[#111111] text-[10px] text-center leading-[normal] relative [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
                プライバシーポリシー
              </div>

              <div className="w-fit font-semibold text-[#111111] text-[10px] text-center leading-[normal] relative [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
                キャンセルポリシー
              </div>
            </div>
          </div>
        </div>

        <img
          className="relative w-[375px] h-px object-cover"
          alt="Line"
          src="/img/line-1.svg"
        />

        <div className="flex w-[375px] h-[69px] items-center justify-center gap-2.5 px-[90px] py-5 relative">
          <p className="relative w-fit ml-[-52.50px] mr-[-52.50px] [font-family:'Shippori_Mincho',Helvetica] font-semibold text-[#a2a2a2] text-[15px] tracking-[0] leading-[normal]">
            © lamp pilates studio All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

Frame184.propTypes = {
  frame163IconfinderSocial: PropTypes.string,
  element: PropTypes.string,
  logo: PropTypes.string,
  to: PropTypes.string,
  to1: PropTypes.string,
  to2: PropTypes.string,
  to3: PropTypes.string,
};
