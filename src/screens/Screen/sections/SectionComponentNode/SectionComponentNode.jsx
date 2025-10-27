import React from "react";
import { Frame68 } from "../../../../components/Frame68";

export const SectionComponentNode = () => {
  return (
    <div className="flex flex-col w-[375px] items-start gap-10 px-5 py-[50px] relative flex-[0_0_auto]">
      <Frame68
        className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
        rectangle="/img/rectangle-64-1.png"
      />
      <Frame68
        className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
        rectangle="/img/rectangle-64-2.png"
        text="02"
        text1="講義受講"
        text2="マシンピラティスの基礎から応用まで、実践的な講義を受けられます。少人数制での指導により、スキルをしっかりと習得できます。"
      />
      <Frame68
        className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
        rectangle="/img/rectangle-64-3.png"
        text="03"
        text1="自主練習後、テスト受講"
        text2="自主練習を重ねて実力を高め、実技テストに臨みます。インストラクターとしての技術と知識を確認します。"
      />
      <Frame68
        className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
        rectangle="/img/rectangle-64-4.png"
        text="04"
        text1="卒業認定後、インストラクターとして活躍"
        text2="テスト合格後、正式にインストラクターとしての資格が認定されます。卒業後は、就職支援を活用して、現場での活躍を目指します。"
      />
    </div>
  );
};
