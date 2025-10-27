import React from "react";
import { ConcreteComponentNode } from "../../../../sp/components/ConcreteComponentNode";
import { Group } from "../../../../sp/components/Group";

export const DivWrapper = () => {
  return (
    <div className="flex flex-col w-[375px] items-center justify-center px-5 py-[30px] relative flex-[0_0_auto] bg-[url(/img/frame-172.png)] bg-cover bg-[50%_50%]">
      <img
        className="relative w-[300px] h-[426.01px]"
        alt="Img"
        src="/img/img-1515-2.png"
      />

      <div className="w-[335px] px-0 py-[30px] rounded-[10px] flex flex-col items-center gap-[30px] relative flex-[0_0_auto]">
        <Group
          className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
          divClassName="![align-self:unset] !w-fit"
          divClassNameOverride="![align-self:unset] !w-fit"
          text="Greetings"
          text1="ご挨拶"
        />
        <p className="self-stretch font-normal text-[#111111] text-[15px] leading-[25.5px] relative [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
          資格を取っても、すぐに教えるのは不安。そんな声を何度も耳にしてきました。
          だからlampでは、ただ学ぶだけでなく、
          “教えられる力”を育てる講座をつくりました。
          卒業後には、60分レッスンの設計と実践をしっかり経験 できます。
          不安を自信に変えて、一歩を踏み出しましょう
        </p>

        <ConcreteComponentNode
          className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
          text="インストラクター紹介はこちら"
          to="/u35611u24107u32057u20171"
        />
      </div>
    </div>
  );
};
