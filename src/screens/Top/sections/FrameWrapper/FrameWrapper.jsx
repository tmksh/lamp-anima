import React from "react";
import { ConcreteComponentNode } from "../../../../sp/components/ConcreteComponentNode";
import { Frame13 } from "../../../../sp/components/Frame13";
import { Group } from "../../../../sp/components/Group";

export const FrameWrapper = () => {
  return (
    <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex flex-col items-center justify-center relative self-stretch w-full flex-[0_0_auto] z-[1]">
        <div className="flex items-start pt-[50px] pb-[30px] px-0 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-center justify-center gap-[30px] px-5 py-0 relative flex-1 grow">
            <Group className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]" />
            <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative w-fit mt-[-1.00px] [font-family:'Shippori_Mincho',Helvetica] font-normal text-black text-xl tracking-[0] leading-[34.0px] whitespace-nowrap">
                <span className="font-bold">”</span>

                <span className="font-medium">教える</span>

                <span className="font-bold">”</span>

                <span className="font-medium">を支える５つの特典</span>
              </p>

              <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <img
                  className="relative self-stretch w-full h-px mt-[-1.00px] object-cover"
                  alt="Line"
                  src="/img/line-16.svg"
                />

                <div className="flex flex-col items-start justify-center gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex w-[215px] items-center gap-[15px] relative flex-[0_0_auto]">
                    <div className="relative w-10 h-10 aspect-[1]">
                      <div className="relative w-[98.21%] h-[100.00%]">
                        <img
                          className="absolute w-[20.64%] h-[20.27%] top-0 left-[30.16%]"
                          alt="Vector"
                          src="/img/vector.svg"
                        />

                        <img
                          className="absolute w-full h-full top-0 left-0"
                          alt="Vector"
                          src="/img/vector-1.svg"
                        />
                      </div>
                    </div>

                    <div className="w-fit font-bold text-black text-base leading-[normal] relative [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
                      スタジオ開放
                    </div>
                  </div>

                  <div className="inline-flex items-center justify-center gap-2.5 pl-[15px] pr-0 py-0 relative flex-[0_0_auto] mr-[-28.00px]">
                    <div className="w-[348px] mt-[-1.00px] font-medium text-black text-base leading-[normal] relative [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
                      自主練習のためのスタジオ使用
                      <br />
                      （7：00～23：00）
                    </div>
                  </div>
                </div>

                <img
                  className="relative self-stretch w-full h-px object-cover"
                  alt="Line"
                  src="/img/line-16.svg"
                />

                <div className="flex flex-col items-start justify-center gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex w-[215px] items-center gap-[15px] relative flex-[0_0_auto]">
                    <img
                      className="relative w-10 h-10 aspect-[1]"
                      alt="Image"
                      src="/img/image.svg"
                    />

                    <div className="w-fit font-bold text-black text-base leading-[normal] relative [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
                      メンター制度
                    </div>
                  </div>

                  <div className="inline-flex items-center justify-center gap-2.5 pl-[15px] pr-0 py-0 relative flex-[0_0_auto]">
                    <div className="w-fit mt-[-1.00px] font-medium text-black text-base leading-[normal] relative [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
                      現役のインストラクターが１対1で伴走
                    </div>
                  </div>
                </div>

                <img
                  className="relative self-stretch w-full h-px object-cover"
                  alt="Line"
                  src="/img/line-16.svg"
                />

                <div className="flex flex-col items-start justify-center gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex w-[215px] items-center gap-[15px] relative flex-[0_0_auto]">
                    <div className="relative w-10 h-10 aspect-[1]">
                      <div className="relative w-[96.26%] h-full bg-[url(/img/vector-2.svg)] bg-[100%_100%]">
                        <img
                          className="absolute w-[5.07%] h-[4.88%] top-[29.01%] left-[39.22%]"
                          alt="Vector"
                          src="/img/vector-3.svg"
                        />

                        <img
                          className="absolute w-[5.07%] h-[4.88%] top-[29.01%] left-[55.71%]"
                          alt="Vector"
                          src="/img/vector-4.svg"
                        />
                      </div>
                    </div>

                    <div className="w-fit font-bold text-black text-base leading-[normal] relative [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
                      レビュー指導
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2.5 pl-[15px] pr-0 py-0 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex-1 mt-[-1.00px] font-medium text-black text-base relative [font-family:'Shippori_Mincho',Helvetica] tracking-[0] leading-[normal]">
                      実際の60分レッスンに対するフィードバック
                    </div>
                  </div>
                </div>

                <img
                  className="relative self-stretch w-full h-px object-cover"
                  alt="Line"
                  src="/img/line-16.svg"
                />

                <div className="flex flex-col items-start justify-center gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-center gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
                    <img
                      className="relative w-10 h-10 aspect-[1]"
                      alt="Image"
                      src="/img/1.svg"
                    />

                    <div className="flex-1 font-bold text-black text-base relative [font-family:'Shippori_Mincho',Helvetica] tracking-[0] leading-[normal]">
                      麻布十番でのレッスン機会
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2.5 pl-[15px] pr-0 py-0 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex-1 mt-[-1.00px] font-medium text-black text-base relative [font-family:'Shippori_Mincho',Helvetica] tracking-[0] leading-[normal]">
                      国際的な雰囲気のスタジオで実践可
                    </div>
                  </div>
                </div>

                <img
                  className="relative self-stretch w-full h-px object-cover"
                  alt="Line"
                  src="/img/line-16.svg"
                />

                <div className="flex flex-col items-start justify-center gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-center gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="overflow-hidden relative w-10 h-10 aspect-[1]">
                      <div className="relative w-[100.00%] h-[74.49%] top-[12.76%]">
                        <img
                          className="absolute w-[61.28%] h-[90.68%] top-0 left-[38.72%]"
                          alt="Vector"
                          src="/img/vector-5.svg"
                        />

                        <img
                          className="absolute w-[61.28%] h-[90.68%] top-[9.32%] left-0"
                          alt="Vector"
                          src="/img/vector-6.svg"
                        />
                      </div>
                    </div>

                    <div className="flex-1 font-bold text-black text-base relative [font-family:'Shippori_Mincho',Helvetica] tracking-[0] leading-[normal]">
                      グループレッスン受け放題
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2.5 pl-[15px] pr-0 py-0 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex-1 mt-[-1.00px] font-medium text-black text-base relative [font-family:'Shippori_Mincho',Helvetica] tracking-[0] leading-[normal]">
                      自ら受けながら学べる環境
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ConcreteComponentNode
              className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
              text="プラン詳細はこちら"
              to="/u32946u25104u12459u12522u12461u12517u12521u12512"
            />
          </div>
        </div>

        <img
          className="relative w-[335px] h-[333px] aspect-[1.01] object-cover"
          alt="Image"
          src="/img/image-15-1.png"
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-[30px] pt-[90px] pb-[50px] px-5 relative self-stretch w-full flex-[0_0_auto] mt-[-60px] z-0">
        <Group
          className="!flex-[0_0_auto] !left-[unset] !w-[133px] !top-[unset]"
          text="fascination"
          text1="lampの特徴"
        />
        <Frame13
          className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
          rectangle="/img/rectangle-5-1.png"
        />
        <Frame13
          className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
          rectangle="/img/rectangle-5-2.png"
          text="就職支援"
          text1=" “教える場所”があるから、一歩踏み出せる。 卒業後はlampで週2コマから実践デビューが可能です。"
        />
        <Frame13
          className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
          rectangle="/img/rectangle-5-3.png"
          rectangleClassName="![object-fit:unset]"
          text="指導力が身につく"
          text1="即戦力として60分のリフォーマークラスが担当できるようにプログラムが構成されています"
        />
        <ConcreteComponentNode
          className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
          text="詳しくはこちら"
          to="/lampu12398u39749u21147"
        />
      </div>
    </div>
  );
};
