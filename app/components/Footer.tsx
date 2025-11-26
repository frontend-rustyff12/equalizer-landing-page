import Image from "next/image";
export default function Footer() {
  return (
    <footer className="px-5 py-16 md:px-10 ">
      <div className="flex flex-col gap-8 lg:grid grid-cols-12 lg:grid-rows-1">
        <Image
          className="lg:col-start-1 lg:col-end-3 "
          src="/logo.svg"
          alt="equalizer company logo"
          width={144}
          height={32}
        />
        <div className="flex flex-col gap-8 md:flex-row md:justify-between lg:col-start-4 lg:col-end-12">
          <div>
            <p>All rights reserved © Equalizer 2021</p>
            <p>Have any problems? Contact us via social media or email us at</p>

            <a className="font-bold" href="mailto:equalizer@example.com">
              equalizer@example.com
            </a>
          </div>

          <div className="flex gap-8 md:self-center">
            <a href="https://www.facebook.com">
              <Image src="/icon-facebook.svg" alt="" width={20} height={20} />
            </a>
            <a href="https://www.instagram.com">
              <Image src="/icon-instagram.svg" alt="" width={20} height={20} />
            </a>
            <a href="https://www.twitter.com">
              <Image src="/icon-twitter.svg" alt="" width={20} height={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
