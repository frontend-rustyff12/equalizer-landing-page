import Button from "./Button";
import AppleIcon from "./icons/AppleIcon";
import AndroidIcon from "./icons/AndroidIcon";
export default function Card() {
  const paragraphClass =
    "text-[16px] leading-[150%] md:text-[18px] lg:text-[20px] ";
  return (
    <article className="bg-orange absolute py-12 px-5 flex flex-col justify-between gap-12 md:w-[356px] h-[632px] md:p-12 md:right-[108px] md:top-[266px] md:rounded-2xl lg:p-14 lg:w-lg  lg:right-56 lg:top-72">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-6 md:">
          <h2 className="font-bold text-[40px] leading-[110%]">Premium EQ</h2>
          <p className={paragraphClass}>
            Get expert-level control with a robust equalizer, volume mixer, and
            spatial audio. Take your listening experience to a whole new level
            and access all our incredible features!
          </p>
        </div>
        <div className="flex items-center gap-2">
          <h3 className="font-bold text-[64px] leading-[100%]">$4</h3>
          <p className={paragraphClass}>/ month</p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <Button text="iOS Download" Icon={AppleIcon} />
        <Button text="Android Download" Icon={AndroidIcon} />
      </div>
    </article>
  );
}
