type ButtonProps = {
  text: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export default function Button({ text, Icon }: ButtonProps) {
  const btnStyle = text === "iOS Download" ? "btn-1" : "btn-2";

  return (
    <button
      className={`w-full h-16 flex justify-center items-center gap-2 rounded-xl ${btnStyle}`}
    >
      <Icon className="icon w-[17px] h-5" />
      <span className="mt-1">{text}</span>
    </button>
  );
}
