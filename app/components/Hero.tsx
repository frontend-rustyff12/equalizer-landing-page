import Image from "next/image";
export default function Hero() {
  return (
    <div className="relative py-16 px-5 md:px-11 lg:px-40">
      <header>
        <Image
          className="mb-16"
          src="/logo.svg"
          alt="equalizer company logo"
          width={144}
          height={32}
        />
      </header>
      <div>
        <div className="flex flex-col gap-10">
          <h1 className="font-bold text-[40px] leading-[100%] tracking-[-1px] md:text-[64px] md:w-[12ch] lg:text-[80px] lg:w-[20ch]">
            We make your music sound extraordinary
          </h1>

          <p className="text-[16px] leading-[150%]  md:text-[18px] md:w-[50ch] lg:text-[20px] lg:w-[65ch]">
            A system audio equalizer specifically designed for Android and iOS.
            Freely tune the way your music sounds with a professional grade
            parametric EQ & volume mixer. Control bass, mids, treble, gain
            control, reverb, and more!
          </p>
        </div>
      </div>
    </div>
  );
}
