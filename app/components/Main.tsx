import Image from "next/image";
import Card from "./Card";
export default function Main() {
  return (
    <main className="relative py-[110px] md:py-[200px] md:px-11 lg:px-40">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[210px] h-[430px] md:translate-0 md:w-[270px] md:h-[556px] md:left-[86px] md:top-[86px] lg:w-[350px] lg:h-[642px] lg:top-20 lg:left-[230px]">
        <Image
          src="/illustration-app.png"
          alt="Product example"
          fill
          className="object-contain"
        />
      </div>
      <div className="h-96 body-bg-1 md:h-[600px]"></div>
      <Card />
    </main>
  );
}
