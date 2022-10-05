import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Envited</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center lg:items-end pt-24 max-w-6xl mx-auto lg:relative lg:min-h-[80vh] lg:justify-center">
        <div className="max-w-xs md:max-w-xl text-center lg:text-right">
          <p className="text-5xl md:text-6xl font-bold text-[#240D57]">
            Imagine if
            <br />
            <span className="bg-gradient-to-r bg-clip-text text-transparent to-[#E87BF8] from-[#8456EC]">
              Snapchat
            </span>
            <br />
            had events.
          </p>

          <p className="mt-4 md:text-2xl font-light text-[#4F4F4F] leading-tight">
            Easily host and share events with your friends across any social
            media
          </p>
        </div>

        <img
          src="/Landingpageimage.svg"
          className="w-[166px] h-[292px] mt-8 md:w-[311px] md:h-[548px] shadow-xl object-cover rounded-xl object-top lg:absolute lg:left-0"
        />
        <Link href="/create">
          <a className="bg-gradient-to-r to-[#E87BF8] from-[#8456EC] mt-8 text-white font-semibold rounded-xl p-4 flex tracking-wide md:w-80 justify-center md:text-2xl">
            🎉 Create my event
          </a>
        </Link>
      </main>
    </div>
  );
}
