"use client";

import { useForm } from "react-hook-form";

import { valibotResolver } from "@hookform/resolvers/valibot";
import { object, coerce, boolean, minValue, number } from "valibot";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Image from "next/image";

import airLeakImg from "@/assets/gas-pipe.png";
import airFilterImg from "@/assets/water-leak.png";
import clothesDryerImg from "@/assets/dryer.png";

import cycleImg from "@/assets/cycle.png";
import blogImg from "@/assets/blogging.png";
import vintageImg from "@/assets/jacket.png";

const schema = object({
  "electric-bill": coerce(
    number("Electric bill must be a numeric value.", [
      minValue(1, "Electric bill must be a positive number."),
    ]),
    Number,
  ),
  "gas-bill": coerce(
    number("Gas bill must be a numeric value.", [
      minValue(1, "Gas bill must be a positive number."),
    ]),
    Number,
  ),

  "distance-traveled": coerce(
    number("Distance traveled must be a numeric value.", [
      minValue(0, "Distance traveled must be a positive number."),
    ]),
    Number,
  ),
  "short-flights": coerce(
    number("Number of short flights must be a numeric value.", [
      minValue(0, "Short flights must be a positive number."),
    ]),
    Number,
  ),
  "long-flights": coerce(
    number("Number of long flights must be a numeric value.", [
      minValue(0, "Long flights must be a positive number."),
    ]),
    Number,
  ),
  paper: boolean(),
  aluminum: boolean(),
});

function FlagComponent({ img, text, co2Value, color = "text-red-600" }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-lg border p-4 sm:flex-row sm:justify-between">
      <Image src={img} alt="representative icon" className="h-8 w-8" />

      <p className="text-center text-lg">{text}</p>
      <p className={`text-center text-lg font-semibold ${color}`}>{co2Value}</p>
    </div>
  );
}

export default function CarbonCalculator() {
  const [showRez, setShowRez] = useState(false);
  const [rez, setRez] = useState(0);
  const [growingRez, setGrowingRez] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (growingRez >= rez.toFixed()) {
        clearInterval(interval);
        return;
      }

      if (rez.toFixed() - growingRez > 100) {
        setGrowingRez((prev) => prev + 100);
        return;
      }
      setGrowingRez((prev) => prev + 1);
    }, 20);

    return () => clearInterval(interval);
  }, [growingRez, rez]);

  const form = useForm({
    resolver: valibotResolver(schema),
    defaultValues: {
      "electric-bill": "",
      "gas-bill": "",
      "distance-traveled": "",
      "short-flights": "",
      "long-flights": "",
      paper: false,
      aluminum: false,
    },
  });

  function onSubmit(values) {
    const electricCarbon = values["electric-bill"] * 0.22 * 105;
    const gasCarbon = values["gas-bill"] * 0.22 * 105;
    const oilCarbon = 50 * 0.22 * 50;
    const distanceCarbon = values["distance-traveled"] * 0.62 * 0.7;
    const shortCarbon = values["short-flights"] * 1000;
    const longCarbon = values["long-flights"] * 2500;

    const paperCarbon = values["paper"] === false ? 150 : 0;
    const aluminumCarbon = values["aluminum"] === false ? 150 : 0;

    setRez(
      (electricCarbon +
        gasCarbon +
        oilCarbon +
        distanceCarbon +
        shortCarbon +
        longCarbon +
        paperCarbon +
        aluminumCarbon) *
        0.45,
    );

    setShowRez(true);

    form.reset();
  }

  return (
    <div className="mx-auto my-20 w-[calc(90%_-_16px)] max-w-screen-xl space-y-10 rounded-md shadow-zinc-300 lg:border lg:px-8 lg:py-16 lg:shadow-lg">
      {showRez === false ? (
        <div className="space-y-16">
          <h1 className="text-center text-3xl font-bold sm:text-4xl lg:text-5xl">
            Calculate your carbon footprint
          </h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
              <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
                <FormField
                  control={form.control}
                  name="electric-bill"
                  render={({ field }) => (
                    <FormItem className="grow basis-0">
                      <FormLabel className="xs:text-lg lg:text-xl">
                        Monthly electric bill
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="avg: 175"
                          {...field}
                          onChange={(event) =>
                            field.onChange(+event.target.value)
                          }
                        />
                      </FormControl>
                      <FormDescription>
                        Enter the amount you pay for electricity every month, in
                        RON.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gas-bill"
                  render={({ field }) => (
                    <FormItem className="grow basis-0">
                      <FormLabel className="xs:text-lg lg:text-xl">
                        Monthly gas bill
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="avg: 350"
                          {...field}
                          onChange={(event) =>
                            field.onChange(+event.target.value)
                          }
                        />
                      </FormControl>
                      <FormDescription>
                        Enter the amount you pay for gas every month, in RON.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
                <FormField
                  control={form.control}
                  name="distance-traveled"
                  render={({ field }) => (
                    <FormItem className="grow basis-0">
                      <FormLabel className="xs:text-lg lg:text-xl">
                        Yearly distance traveled by car
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="avg: 6000"
                          {...field}
                          onChange={(event) =>
                            field.onChange(+event.target.value)
                          }
                        />
                      </FormControl>
                      <FormDescription>
                        Enter the distance you travel by car every year, in
                        kilometers.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="short-flights"
                  render={({ field }) => (
                    <FormItem className="grow basis-0">
                      <FormLabel className="xs:text-lg lg:text-xl">
                        Short flights in the past year
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="avg: 1"
                          {...field}
                          onChange={(event) =>
                            field.onChange(+event.target.value)
                          }
                        />
                      </FormControl>
                      <FormDescription>
                        Enter the number of short flights you took in the past
                        year, 4 hours or less.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="long-flights"
                  render={({ field }) => (
                    <FormItem className="grow basis-0">
                      <FormLabel className="xs:text-lg lg:text-xl">
                        Long flights in the past year
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="avg: 1"
                          {...field}
                          onChange={(event) =>
                            field.onChange(+event.target.value)
                          }
                        />
                      </FormControl>
                      <FormDescription>
                        Enter the number of long flights you took in the past
                        year, 4 hours or more.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="paper"
                render={({ field }) => (
                  <FormItem className="flex grow flex-row items-center space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        className="h-6 w-6 rounded-full lg:h-8 lg:w-8"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="xs:text-lg lg:text-xl">
                        Do you recycle paper?
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="aluminum"
                render={({ field }) => (
                  <FormItem className="flex grow flex-row items-center space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        className="h-6 w-6 rounded-full lg:h-8 lg:w-8"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="xs:text-lg lg:text-xl">
                        Do you recycle aluminum?
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <Button size="lg" type="submit" className="xs:text-lg lg:text-xl">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      ) : (
        <div className="ms:space-y-8 space-y-6 lg:space-y-10">
          <h2 className="text-center text-3xl font-bold sm:text-4xl lg:text-5xl">
            Your carbon footprint is
          </h2>
          <span
            className={`block text-center text-5xl font-black tracking-wider sm:text-7xl lg:text-8xl ${growingRez <= 7500 ? "text-green-600" : growingRez <= 12000 ? "text-amber-400" : "text-red-600"}`}
          >
            {growingRez} <br />
            <span className="text-2xl text-secondary-foreground xs:text-3xl sm:text-5xl lg:text-6xl">
              kg CO2 / year
            </span>
          </span>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              *The information you&apos;ve received is indeed helpful in giving
              you an estimation of your carbon footprint. However, it&apos;s
              essential to understand that it may not provide a 100% accurate
              representation.
            </p>
            <ul className="space-y-3">
              <li>
                <p className="text-muted-foreground sm:text-lg lg:text-xl">
                  <span className="font-semibold text-green-600">
                    Less than 7500 kg CO2 / year
                  </span>{" "}
                  - this is considered a good carbon footprint and is lower than
                  average.
                </p>
              </li>
              <li>
                <p className="text-muted-foreground sm:text-lg lg:text-xl">
                  <span className="font-semibold text-amber-400">
                    Between 7500 and 12000 kg CO2 / year
                  </span>{" "}
                  - this is considered an average carbon footprint.
                </p>
              </li>
              <li>
                <p className="text-muted-foreground sm:text-lg lg:text-xl">
                  <span className="font-semibold text-red-600">
                    More than 12000 kg CO2 / year
                  </span>{" "}
                  - this is considered a higher than average carbon footprint
                  and you should start taking steps to bring that number down.
                </p>
              </li>
            </ul>
          </div>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="xs:text-lg sm:text-xl lg:text-2xl">
                Carbon Footprint Red Flags 🚩
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-8">
                  <li>
                    <FlagComponent
                      img={airLeakImg}
                      text="Air leaks in your home."
                      co2Value="362 kg CO2 per year "
                    />
                  </li>
                  <li>
                    <FlagComponent
                      img={airFilterImg}
                      text="Clogged AC filter"
                      co2Value="158 kg CO2 per year"
                    />
                  </li>
                  <li>
                    <FlagComponent
                      img={clothesDryerImg}
                      text="Clothes dryer "
                      co2Value="653 kg CO2 per year"
                    />
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="xs:text-lg sm:text-xl lg:text-2xl">
                Carbon Footprint Green Flags 🟢
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-8">
                  <li>
                    <FlagComponent
                      img={cycleImg}
                      text="Bike usage"
                      co2Value="3500 kg CO2 per year"
                      color="text-green-600"
                    />
                  </li>
                  <li>
                    <FlagComponent
                      img={blogImg}
                      text="Online newspapers"
                      co2Value="263 kg CO2 per year"
                      color="text-green-600"
                    />
                  </li>
                  <li>
                    <FlagComponent
                      img={vintageImg}
                      text="Vintage fashion"
                      co2Value="362 kg CO2 per year"
                      color="text-green-600"
                    />
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Button
            size="lg"
            className="xs:text-lg lg:text-xl"
            onClick={() => {
              setRez(0);
              setGrowingRez(0);
              setShowRez(false);
            }}
          >
            Calculate again
          </Button>
        </div>
      )}
    </div>
  );
}
