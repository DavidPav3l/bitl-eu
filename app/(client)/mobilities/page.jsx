import Image from "next/image";
import Link from "next/link";

import RomaniaFlag from "@/assets/flags/romania.png";
import IrlandFlag from "@/assets/flags/ireland.png";
import CroatiaFlag from "@/assets/flags/croatia.png";
import PolandFlag from "@/assets/flags/poland.png";
import TurkeyFalg from "@/assets/flags/turkey.png";

import LTTAPhoto from "@/assets/workshop.jpg";
import LTMPhoto from "@/assets/LTM.jpg";
import virtualPhoto from "@/assets/virualMeet.jpg";

import carbonIco from "@/assets/carbon-footprint.png";
import warmingIco from "@/assets/global-warming.png";
import learnIco from "@/assets/online-learning.png";
import comIco from "@/assets/talking.png";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const flags = [
  { flag: RomaniaFlag, country: "romania" },
  { flag: IrlandFlag, country: "ireland" },
  { flag: CroatiaFlag, country: "croatia" },
  { flag: PolandFlag, country: "poland" },
  { flag: TurkeyFalg, country: "turkiye" },
];

export const metadata = {
  title: "Mobilities | BITL Blog",
};

function Objective({ children, title }) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 rounded border p-6 transition-all duration-300 hover:scale-[102%] min-[425px]:flex-row">
      {children}
      <span className="max-w-lg text-center text-lg min-[425px]:text-left lg:text-xl">
        {title}
      </span>
    </div>
  );
}

function Activities({
  photo,
  order,
  title,
  activity,
  anco,
  description,
  countries,
}) {
  return (
    <div
      className={
        order === "normal"
          ? "flex flex-col items-center justify-center gap-10 lg:flex-row lg:justify-between lg:gap-20"
          : "flex flex-col items-center justify-center gap-10 lg:flex-row-reverse lg:justify-between lg:gap-20"
      }
    >
      <h3 className="text-center text-4xl font-light xs:text-5xl lg:hidden">
        LTT activities
      </h3>
      <div
        style={{ backgroundImage: `url(${photo})` }}
        className={
          title === "Virtual Meetings"
            ? "relative h-[400px] w-full max-w-[500px] rounded bg-cover bg-right bg-no-repeat shadow-xl lg:h-[550px] lg:w-[450px]"
            : "relative h-[400px] w-full max-w-[500px] rounded bg-cover bg-center bg-no-repeat shadow-xl lg:h-[550px] lg:w-[450px]"
        }
      ></div>
      <div
        className={
          order === "normal"
            ? "xxs:items-start flex flex-col items-center justify-center gap-10"
            : "flex flex-col items-center justify-center gap-10"
        }
      >
        <h3 className="hidden text-center text-4xl font-light xs:text-5xl lg:block lg:text-6xl">
          {title}
        </h3>
        <p
          className={
            order === "normal"
              ? "max-w-sm text-center md:text-lg lg:text-left"
              : "max-w-sm text-center md:text-lg lg:text-left"
          }
        >
          {description}
        </p>
        <div className="flex w-full flex-col items-center justify-center gap-8 xs:items-start">
          <h4
            className={
              order === "normal"
                ? "max-w-md text-center text-xl font-semibold"
                : "max-w-md text-center text-xl font-semibold"
            }
          >
            Click the flags below to see how each{" "}
            <span className="font-bold">{activity}</span> unfolded:
          </h4>
          <div className="flex flex-col items-start justify-center gap-10 self-center xs:flex-row">
            {countries.map((country, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-5"
              >
                <Link href={`/${country.country}`}>
                  <Image
                    src={country.flag}
                    alt={country.country}
                    className="w-10 rounded-[50%] shadow-xl duration-300 hover:scale-110 xs:w-12"
                  />
                </Link>
                <p className="font-medium capitalize xs:hidden xs:text-lg">
                  {country.country}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MobilitiesPage() {
  return (
    <main className="mx-auto w-[calc(90%_-_16px)] max-w-screen-xl">
      <section className="mb-3 mt-20 min-h-[calc(80vh_-_100px)] w-full animate-show-up space-y-10 sm:mt-32 md:gap-16 md:space-y-20 lg:mt-44 lg:space-y-24">
        <h2 className="text-center text-4xl font-bold md:text-5xl lg:text-6xl">
          Partener Countries
        </h2>
        <Carousel className="mx-auto w-[70%] max-w-xs lg:max-w-xl">
          <CarouselContent className="-ml-1">
            {flags.map((flag, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/3 lg:basis-1/5"
              >
                <div className="p-1">
                  <Link
                    key={index}
                    className=" flex aspect-square items-center justify-center"
                    href={`/${flag.country}`}
                  >
                    <Image
                      src={flag.flag}
                      alt="Flag"
                      className="w-20 rounded-[50%] shadow-lg shadow-zinc-300 transition-all duration-300 hover:scale-105"
                    />
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="flex w-full flex-col items-start justify-start">
          <p className="text-lg">
            <span className="text-2xl font-bold text-emerald-500 lg:text-3xl">
              Welcome
            </span>{" "}
            to our collaborative{" "}
            <span className="font-bold text-orange-500">Erasmus+</span>
            project, a joint effort driven by partner schools in{" "}
            <span className="font-bold">Romania</span>,{" "}
            <span className="font-bold">Türkiye</span>,{" "}
            <span className="font-bold">Poland</span>,{" "}
            <span className="font-bold">Croatia</span>, and an{" "}
            <span className="font-bold">Irish NGO</span>. Our project centers on
            school-based education, focusing on &quot;
            <span className="whitespace-nowrap font-bold">Climate Change</span>
            &quot; and social inclusion. <br /> At the core of our initiative
            lies a shared commitment:{" "}
            <span className="font-bold">
              We delve into understanding the intricate causes and far-reaching
              impacts of climate change
            </span>
            . <br />
            By raising{" "}
            <span className="font-bold text-emerald-500">awareness</span> among
            participants, we foster a deep understanding of the urgent need for
            climate precautions.
          </p>
        </div>
      </section>

      <section className="mb-20 flex w-full flex-col items-start justify-start gap-10 lg:gap-16">
        <h2 className="self-start text-3xl font-extralight sm:text-4xl lg:text-5xl">
          Main Objectives
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Objective
            key="1"
            title="Helping participants gain valuable insights into the significance of the carbon footprint."
          >
            <Image
              src={carbonIco}
              alt="BITL Objective"
              className="w-14 rounded"
            />
          </Objective>
          <Objective
            key="2"
            title="Assisting participants in gaining valuable insights into the significance of climate change, its impact on our planet, and the urgency of taking action."
          >
            <Image
              src={warmingIco}
              alt="BITL Objective"
              className="w-14 rounded"
            />
          </Objective>
          <Objective
            key="3"
            title="Strengthening intercultural dialogue, which is crucial for fostering understanding, respect, and harmony among diverse communities."
          >
            <Image src={comIco} alt="BITL Objective" className="w-14 rounded" />
          </Objective>
          <Objective
            key="4"
            title="Empowering participants to gain valuable insights into new ways of studying, communicating effectively, and fostering personal growth."
          >
            <Image
              src={learnIco}
              alt="BITL Objective"
              className="w-14 rounded"
            />
          </Objective>
        </div>
      </section>

      <section className="mb-20 flex min-h-screen w-full flex-col justify-center gap-28 lg:gap-48">
        <Activities
          photo={LTTAPhoto.src}
          key="ltt-activities"
          order="normal"
          title="LTT Activities"
          anco="ltt"
          activity="LTTA"
          description="LTT activities are the educational components of an Erasmus project, including workshops, seminars, and training sessions. They promote cross-cultural learning and skill development among participants, enhancing their competencies and fostering international cooperation."
          countries={[
            { flag: TurkeyFalg, country: "turkiye" },
            { flag: PolandFlag, country: "poland" },
            { flag: CroatiaFlag, country: "croatia" },
            { flag: RomaniaFlag, country: "romania" },
          ]}
        />
        <Activities
          photo={LTMPhoto.src}
          key="ltm-activities"
          order="reverse"
          title="TP Meetings"
          activity="TPM"
          anco="tp"
          description="TP meetings are essential coordination gatherings within an Erasmus project. They bring project partners together to discuss progress, plan future activities, and ensure compliance with program guidelines. TP meetings facilitate effective communication and collaboration among stakeholders, contributing to the project's success."
          countries={[
            { flag: RomaniaFlag, country: "romania" },
            { flag: IrlandFlag, country: "ireland" },
            { flag: PolandFlag, country: "poland" },
          ]}
        />
        <Activities
          photo={virtualPhoto.src}
          order="normal"
          key="virtual-activities"
          title="Virtual Meetings"
          activity="virtual meeting"
          anco="vm"
          description="Through video conferencing, presentations, interactive discussions, and shared resources, we connect and work together seamlessly, breaking down geographical barriers to  to propel our project towards successful realization."
          countries={[
            { flag: TurkeyFalg, country: "turkiye" },
            { flag: RomaniaFlag, country: "romania" },
          ]}
        />
      </section>
    </main>
  );
}
