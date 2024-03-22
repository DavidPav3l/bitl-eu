import { Button } from "@/components/ui/button";

import Link from "next/link";

import Image from "next/image";

import Logo from "@/assets/logo.jpg";
import mobilitiesImg from "@/assets/mobilitiesCover.jpeg";
import blogImg from "@/assets/blog-ilustration.svg";
import footImg from "@/assets/carbon-ilustration.png";

export default async function Home() {
  return (
    <main className="mx-auto w-[calc(90%_-_16px)] max-w-screen-xl">
      <section className="relative mb-20 mt-16 grid min-h-[calc(100vh_-_100px)] w-full grid-cols-1 items-center lg:mt-0 lg:grid-cols-2">
        <div className="flex flex-col items-start justify-center gap-3">
          <div className="flex flex-col items-start justify-center gap-3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl">
              <span className="font-semibold">Before</span> It&apos;s{" "}
              <span className="whitespace-nowrap font-semibold">Too Late</span>
            </h1>
            <p className="max-w-xs text-sm sm:max-w-xl sm:text-base xl:text-lg">
              We <span className="font-semibold">ignite your love</span> for
              Earth, unravel its wonders, and{" "}
              <span className="font-semibold">empower you</span> to protect it -{" "}
              <span className="font-semibold text-primary">
                it&apos;s never too late to make a difference!
              </span>
            </p>
            <p className="sm:text-lg">
              Project number:{" "}
              <span className="font-semibold text-emerald-500 sm:font-bold">
                2021-1-RO01-KA220-SCH-000032488
              </span>
            </p>
          </div>
          {/* <Button size="lg">
            <Link href="#discover">Discover</Link>
          </Button> */}
        </div>
        <Image
          src={Logo}
          loading="eager"
          priority
          alt="Global Warming Ilustration"
          className="w-full max-w-[300px] self-start justify-self-center xs:max-w-xs sm:max-w-sm lg:self-auto lg:justify-self-end 2xl:max-w-md"
        />
      </section>
      <section className="mb-36 flex flex-col items-center gap-10 lg:min-h-[60vh] lg:flex-row lg:justify-between">
        <div className="flex max-w-[475px] flex-col items-center gap-10">
          <h2 className="text-center text-3xl md:text-4xl lg:text-5xl">
            Check out the{" "}
            <span className="whitespace-nowrap">BITL Mobilities</span>
          </h2>
          <p className="text-center text-lg">
            Welcome to our collaborative{" "}
            <span className="font-bold">Erasmus+</span> project, a joint effort
            driven by partner schools in{" "}
            <span className="font-bold">Romania</span>,{" "}
            <span className="font-bold">Türkiye</span>,{" "}
            <span className="font-bold">Poland</span>,{" "}
            <span className="font-bold">Croatia</span>, and an{" "}
            <span className="font-bold">Irish NGO</span>. Our project centers on
            school-based education, focusing on{" "}
            <span className="whitespace-nowrap font-bold">Climate Change</span>{" "}
            and{" "}
            <span className="whitespace-nowrap font-bold">
              social inclusion
            </span>
            .
          </p>
          <Button className="mx-auto hidden lg:grid" size="lg" asChild>
            <Link href="/mobilities">Take me there</Link>
          </Button>
        </div>
        <Image
          priority
          className="w-full max-w-[400px] rounded shadow-lg shadow-zinc-400 lg:max-w-[500px]"
          src={mobilitiesImg}
          alt="Crotia mobility"
        />
        <Button className="mx-auto lg:hidden" size="lg" asChild>
          <Link href="/mobilities">Take me there</Link>
        </Button>
      </section>
      <section className="mb-36 flex flex-col items-center gap-10 lg:min-h-[60vh] lg:flex-row lg:justify-between">
        <Image
          priority
          className="order-2 w-full max-w-[400px] rounded shadow-lg shadow-zinc-400 lg:order-1 lg:max-w-[500px]"
          src={blogImg}
          alt="Blog ilustration"
        />
        <div className="order-1 flex max-w-[475px] flex-col items-center gap-10 lg:order-2">
          <h2 className="text-center text-3xl md:text-4xl lg:text-5xl">
            Drop an eye over the{" "}
            <span className="whitespace-nowrap">BITL Blog</span>
          </h2>
          <p className="text-center text-lg">
            A platform to showcase every school&apos;s{" "}
            <span className="font-bold">amazing efforts</span> to save the
            planet! Here, teachers and students participating in our project can
            share their inspiring stories, innovative ideas, and practical tips
            for a <span className="font-bold">greener future</span>.
          </p>
          <Button className="mx-auto hidden lg:grid" size="lg" asChild>
            <Link href="/blog">Let&apos;s see</Link>
          </Button>
        </div>
        <Button className="order-3 mx-auto lg:hidden" size="lg" asChild>
          <Link href="/blog">Let&apos;s see</Link>
        </Button>
      </section>
      <section className="mb-36 flex flex-col items-center gap-10 lg:min-h-[60vh] lg:flex-row lg:justify-between">
        <div className="flex max-w-[475px] flex-col items-center gap-10">
          <h2 className="text-center text-3xl md:text-4xl lg:text-5xl">
            Calculate your{" "}
            <span className="whitespace-nowrap">Carbon Footprint</span>
          </h2>
          <p className="text-center text-lg">
            This handy tool helps you calculate your{" "}
            <span className="font-bold">carbon footprint</span> - a measure of
            the <span className="font-bold">greenhouse gases</span> you generate
            through your activities.
          </p>
          <Button className="mx-auto hidden lg:grid" size="lg" asChild>
            <Link href="/footprint">Calculate</Link>
          </Button>
        </div>
        <Image
          priority
          className="w-full max-w-[300px] rounded  lg:max-w-[400px]"
          src={footImg}
          alt="Carbon footprint ilustration"
        />
        <Button className="mx-auto lg:hidden" size="lg" asChild>
          <Link href="/footprint">Calculate</Link>
        </Button>
      </section>
    </main>
  );
}
