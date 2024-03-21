"use client";

import { useForm } from "react-hook-form";

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

export default function FootprintPage() {
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
    }, 25);

    return () => clearInterval(interval);
  }, [growingRez, rez]);

  const form = useForm({
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
    const electricCarbon = values["electric-bill"] * 0.22 * 90;
    const gasCarbon = values["gas-bill"] * 0.22 * 95;
    const oilCarbon = 175 * 0.22 * 110;
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
                        <Input type="number" placeholder="avg: 1" {...field} />
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
                        <Input type="number" placeholder="avg: 1" {...field} />
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
        <div className="space-y-10">
          <h2 className="text-center text-3xl font-bold sm:text-4xl lg:text-5xl">
            Your carbon footprint is
          </h2>
          <span
            className={`block text-center text-3xl font-black tracking-wider xs:text-5xl sm:text-7xl lg:text-8xl ${growingRez <= 7500 ? "text-green-600" : growingRez <= 12000 ? "text-amber-400" : "text-red-600"}`}
          >
            {growingRez} <br />
            <span className="text-2xl text-secondary-foreground xs:text-3xl sm:text-5xl lg:text-6xl">
              kg CO2 / year
            </span>
          </span>
          <ul className="space-y-3">
            <li>
              <p className="text-muted-foreground sm:text-lg lg:text-xl">
                <span className="font-medium text-green-600">
                  Less than 7500
                </span>{" "}
                - this is considered a good carbon footprint and is lower than
                average.
              </p>
            </li>
            <li>
              <p className="text-muted-foreground sm:text-lg lg:text-xl">
                <span className="font-medium text-amber-400">
                  Between 7500 and 12000
                </span>{" "}
                - this is considered an average carbon footprint.
              </p>
            </li>
            <li>
              <p className="text-muted-foreground sm:text-lg lg:text-xl">
                <span className="font-medium text-red-600">
                  More than 12000
                </span>{" "}
                - this is considered a higher than average carbon footprint and
                you should start taking steps to bring that number down.
              </p>
            </li>
          </ul>
          <p>This formula does not calculate the exact </p>
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
