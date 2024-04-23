import LocationForm from "@/components/custom/LocationForm";

export default function AirPage() {
  return (
    <main className="mx-auto w-[calc(90%_-_16px)] max-w-screen-xl">
      <section className="mb-20 mt-[15vh] min-h-[calc(100vh_-_100px)]">
        <div className="relative mx-auto w-full max-w-screen-md rounded py-12 lg:border-2 lg:px-8 lg:py-16 lg:pb-16 lg:shadow-lg lg:shadow-zinc-300">
          <h1 className="absolute -top-7 left-1/2 w-max -translate-x-1/2 bg-white text-center text-3xl font-bold xs:-top-8 sm:-top-9 sm:text-4xl lg:-top-12 lg:px-6 lg:text-5xl">
            Curious about <br className="" />
            <span className="whitespace-nowrap">Air Quality</span>?
          </h1>
          <LocationForm />
        </div>
      </section>
    </main>
  );
}
