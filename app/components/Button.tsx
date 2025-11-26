import Image from "next/image";

type ButtonProps = {
  text: string;
  img: string;
};

export default function Button({ text, img }: ButtonProps) {
  const btnStyle =
    text === "iOS Download"
      ? "bg-slate-900 text-white"
      : "bg-white text-slate-900";
  return (
    <button
      className={`w-full h-16 flex justify-center items-center gap-2  rounded-xl ${btnStyle}`}
    >
      <Image src={img} alt="" width={17} height={20} />
      <span className="mt-1">{text}</span>
    </button>
  );
}
