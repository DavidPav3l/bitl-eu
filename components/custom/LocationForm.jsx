"use client";

import { valibotResolver } from "@hookform/resolvers/valibot";
import { object, coerce, boolean, minValue, number } from "valibot";

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
import { use, useState } from "react";

function DisplayRez({ aqi, pm25, o3, co, no2, city, handleClick }) {
  let aqiText;
  if (aqi === 1) aqiText = "Good";
  else if (aqi === 2) aqiText = "Fair";
  else if (aqi === 3) aqiText = "Moderate";
  else if (aqi === 4) aqiText = "Poor";
  else if (aqi === 5) aqiText = "Very poor";

  return (
    <div className="space-y-8 lg:space-y-16">
      <div className="space-y-2">
        <h2
          className={`text-center text-3xl font-bold sm:text-4xl lg:text-5xl  ${aqi === 1 ? "text-green-500" : aqi === 2 ? "text-yellow-500" : aqi === 3 ? "text-amber-500" : aqi === 4 ? "text-orange-500" : aqi === 5 ? "text-red-500" : ""}`}
        >
          – {aqiText} –
        </h2>
        <h3 className="text-center text-2xl font-light sm:text-3xl lg:text-4xl">
          {city}
        </h3>
      </div>
      <div className="space-y-8 lg:space-y-16">
        <div
          className={`mx-auto grid grid-cols-2 justify-items-center gap-4 min-[475px]:grid-cols-4`}
        >
          <div
            className={`flex w-full flex-col items-center justify-center gap-2 rounded-md border-2 p-2 ${aqi === 1 ? "border-green-500" : aqi === 2 ? "border-yellow-500" : aqi === 3 ? "border-amber-500" : aqi === 4 ? "border-orange-500" : aqi === 5 ? "border-red-500" : ""}`}
          >
            <span className="text-xl font-medium lg:text-2xl">CO</span>
            <span className="text-lg lg:text-xl">{co}</span>
          </div>
          <div
            className={`flex w-full flex-col items-center justify-center gap-2 rounded-md border-2 p-2 ${aqi === 1 ? "border-green-500" : aqi === 2 ? "border-yellow-500" : aqi === 3 ? "border-amber-500" : aqi === 4 ? "border-orange-500" : aqi === 5 ? "border-red-500" : ""}`}
          >
            <span className="whitespace-nowrap text-xl font-medium lg:text-2xl">
              PM 2.5
            </span>
            <span className="text-lg lg:text-xl">{pm25}</span>
          </div>
          <div
            className={`flex w-full flex-col items-center justify-center gap-2 rounded-md border-2 p-2 ${aqi === 1 ? "border-green-500" : aqi === 2 ? "border-yellow-500" : aqi === 3 ? "border-amber-500" : aqi === 4 ? "border-orange-500" : aqi === 5 ? "border-red-500" : ""}`}
          >
            <span className="text-xl font-medium lg:text-2xl">NO2</span>
            <span className="text-lg lg:text-xl">{no2}</span>
          </div>
          <div
            className={`flex w-full flex-col items-center justify-center gap-2 rounded-md border-2 p-2 ${aqi === 1 ? "border-green-500" : aqi === 2 ? "border-yellow-500" : aqi === 3 ? "border-amber-500" : aqi === 4 ? "border-orange-500" : aqi === 5 ? "border-red-500" : ""}`}
          >
            <span className="text-xl font-medium lg:text-2xl">O3</span>
            <span className="text-lg lg:text-xl">{o3}</span>
          </div>
        </div>
        <div className="space-y-3">
          <span className="text-xl font-semibold lg:text-2xl">Legend</span>
          <ul className="ml-5 list-disc space-y-3">
            <li>
              <p className="text-sm xs:text-base">
                CO <span className="font-semibold">(Carbon Monoxide)</span>: A
                colorless, odorless gas produced by incomplete combustion of
                fossil fuels, particularly in vehicles. It binds to hemoglobin
                in the blood, reducing its ability to carry oxygen.
              </p>
            </li>
            <li>
              <p className="text-sm xs:text-base">
                PM2.5{" "}
                <span className="font-semibold">(Particulate Matter 2.5)</span>:
                Fine particles with a diameter of 2.5 micrometers or less, often
                from vehicle exhaust, industrial processes. They penetrate into
                the lungs, causing respiratory problems.
              </p>
            </li>
            <li>
              <p className="text-sm xs:text-base">
                NO2 <span className="font-semibold">(Nitrogen Dioxide)</span>: A
                gas emitted from vehicles and industrial processes. Can worsen
                respiratory conditions, especially in children and the elderly.
              </p>
            </li>
            <li>
              <p className="text-sm xs:text-base">
                O3 <span className="font-semibold">(Ozone)</span>: A gas formed
                when sunlight reacts with pollutants like NO2 and volatile
                organic compounds. Irritates the airways, triggering asthma
                attacks.
              </p>
            </li>
          </ul>
          <p className="text-sm text-muted-foreground">
            *The values shown above refer to micrograms per cubic meter.
          </p>
        </div>
        <Button onClick={handleClick}>Another city?</Button>
      </div>
    </div>
  );
}

export default function LocationForm() {
  const [airData, setAirData] = useState(false);
  const [city, setCity] = useState(false);
  const [step, setStep] = useState(1);
  const form = useForm({
    defaultValues: {
      city: "",
    },
  });

  async function onSubmit(data) {
    try {
      const { city } = data;
      const coordRes = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=30bcadb9e0bb6b68d9159e49e5a8ae07`,
      );

      const [{ lat, lon }] = await coordRes.json();
      const airRes = await fetch(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=30bcadb9e0bb6b68d9159e49e5a8ae07`,
      );
      const airObj = await airRes.json();
      console.log(airObj);
      const cityRes = await fetch(
        `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=30bcadb9e0bb6b68d9159e49e5a8ae07`,
      );

      const cityObj = await cityRes.json();

      setCity(cityObj[0].name);
      setAirData(airObj.list[0]);
      setStep(2);
    } catch (error) {
      console.log(error);
    }
  }

  function goBack() {
    setStep(1);
    setCity(false);
    setAirData(false);
    form.reset();
  }

  return (
    <div className="pt-6 sm:px-6 sm:pt-10 lg:px-12 lg:pt-16">
      {step === 2 ? (
        <DisplayRez
          aqi={airData.main.aqi}
          co={airData.components.co}
          pm25={airData.components.pm2_5}
          no2={airData.components.no2}
          o3={airData.components.o3}
          city={city}
          handleClick={goBack}
        ></DisplayRez>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex w-full flex-col items-center gap-4 sm:gap-8"
          >
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input
                      className=""
                      name="city"
                      placeholder="Ex: Vaslui"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Type the name of the city that you want to see the air
                    pollution level of.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit">
              Search
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
}
