import React from "react";
import { Frame14 } from "../../../../components/Frame14";
import { Frame143 } from "../../../../components/Frame143";

export const Frame2 = () => {
  return (
    <div className="flex flex-col items-end gap-[30px] px-5 py-[50px] relative self-stretch w-full flex-[0_0_auto]">
      <Frame143
        className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
        divClassName="!self-stretch !w-[unset]"
        frame="/img/frame-144-2.svg"
        text={
          <>
            東京都港区麻布十番での
            <br />
            安心環境
          </>
        }
        text1="東京都港区麻布十番のスタジオで、女性が安心して通える環境を整えています。周辺環境も良く、快適な立地で学べます。"
      />
      <Frame14
        className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
        frame="/img/frame-144-3.svg"
        text="自由に通えるスタジオ"
        text1="平日・土日を問わず、10:00～22:00の間で自由に通えます。ライフスタイルに合わせて受講可能です。"
      />
      <Frame143
        className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
        frame="/img/frame-144-4.svg"
        text="1人1人に寄り添った講義"
        text1="講義中はインストラクター2名体制で直接サポートします。また講義時間外は1人に1名現役のインストラクターがつくので二人三脚ですすめます。LINEでの相談も可能です。"
        text2="03"
      />
      <Frame14
        className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
        frame="/img/frame-144-5.svg"
        text={
          <>
            インストラクターとしての
            <br />
            デビューを応援
          </>
        }
        text1="養成講座では６０分のクラス指導ができる実践的なスキルを身に着けることができます。実際に現役のインストラクターに向けて模擬レッスンを行い、レビューをもらう機会もあり卒業後すぐにインストラクターとして勤務可能です。また卒業後、麻布一等地にあるlampの当スタジオで勤務することも可能です。"
        text2="04"
      />
      <Frame143
        className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
        frame="/img/frame-144-6.svg"
        text="充実した設備環境"
        text1="１人１台マシンの利用ができるので、待ち時間なく効率的に学ぶことが可能です。またスタジオ貸し出しも行っておりますので、講座の内容理解を深めるための自主練習の場としての利用も可能です。"
        text2="05"
      />
      <Frame14
        className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
        frame="/img/frame-144-7.svg"
        text="本格的な講座内容"
        text1="ピラティスの歴史から解剖学を網羅する知識と、それに基づくエクササイズ指導の実践が含まれています。実践では60分のプログラム練習まで行います。インストラクターとして必要な知識と技術、立ち振る舞いを学べる内容です。"
        text2="06"
      />
      <Frame143
        className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
        frame="/img/frame-144-8.svg"
        text="継続した学習サポート"
        text1="ピラティスでは継続した学びが大切になるので、養成講座以外でもグループクラスが無制限で受講可能、かつプライベートクラスの受講も可能です。講座の内容をそのままにせず、実際に身体を動かし学びを体感していただきます。"
        text2="07"
      />
    </div>
  );
};
