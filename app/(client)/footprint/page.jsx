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
import { useState } from "react";

export default function FootprintPage() {
  const [showRez, setShowRez] = useState(false);
  const [rez, setRez] = useState(0);

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
    const electricCarbon = values["electric-bill"] * 0.22 * 80;
    const gasCarbon = values["gas-bill"] * 0.22 * 80;
    const oilCarbon = 175 * 0.22 * 110;
    const distanceCarbon = values["distance-traveled"] * 0.62 * 0.7;
    const shortCarbon = values["short-flights"] * 1000;
    const longCarbon = values["long-flights"] * 2500;

    const paperCarbon = values["paper"] === false ? 150 : 0;
    const aluminumCarbon = values["aluminum"] === false ? 150 : 0;

    setRez(
      electricCarbon +
        gasCarbon +
        oilCarbon +
        distanceCarbon +
        shortCarbon +
        longCarbon +
        paperCarbon +
        aluminumCarbon,
    );

    setShowRez(true);

    form.reset();
  }

  return (
    <div className="mx-auto my-20 w-[calc(90%_-_16px)] max-w-screen-xl space-y-10 rounded-md border px-12 py-20 shadow-lg shadow-zinc-300">
      {showRez === false ? (
        <div className="space-y-10">
          <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl">
            Calculate your carbon footprint
          </h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
              <FormField
                control={form.control}
                name="electric-bill"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Monthly electric bill</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="avg: 175" {...field} />
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
                  <FormItem>
                    <FormLabel>Monthly gas bill</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="avg: 350" {...field} />
                    </FormControl>
                    <FormDescription>
                      Enter the amount you pay for gas every month, in RON.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="distance-traveled"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Yearly distance traveled by car</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="avg: 10000"
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
                  <FormItem>
                    <FormLabel>Short flights in the past year</FormLabel>
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
                  <FormItem>
                    <FormLabel>Long flights in the past year</FormLabel>
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
              <FormField
                control={form.control}
                name="paper"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Do you recycle paper?</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="aluminum"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Do you recycle aluminum?</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      ) : (
        <div className="space-y-20">
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl">
            Your carbon footprint is
          </h2>
          <span
            className={`block text-center text-3xl font-black tracking-wider sm:text-5xl lg:text-7xl ${rez.toFixed() <= 16000 ? "text-green-600" : rez.toFixed() <= 23000 ? "text-amber-400" : "text-red-600"}`}
          >
            {rez.toFixed()}
          </span>
          <ul className="space-y-3">
            <li>
              <p className="text-muted-foreground sm:text-lg lg:text-xl">
                <span className="text-green-600">Less than 16000</span> - this
                is considered a good carbon footprint and is lower than average.
              </p>
            </li>
            <li>
              <p className="text-muted-foreground sm:text-lg lg:text-xl">
                <span className="text-amber-400">Between 16000 and 23000</span>{" "}
                - this is considered an average carbon footprint.
              </p>
            </li>
            <li>
              <p className="text-muted-foreground sm:text-lg lg:text-xl">
                <span className="text-red-600">More than 23000</span> - this is
                considered a higher than average carbon footprint and you should
                start taking steps to bring that number down.
              </p>
            </li>
          </ul>
          <Button
            onClick={() => {
              setRez(0);
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
