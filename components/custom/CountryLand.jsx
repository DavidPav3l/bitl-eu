export default function CountryLand({ title }) {
  return (
    <section className="mx-auto mb-20 flex min-h-[calc(100vh_-_150px)] w-[calc(90%_-_16px)] max-w-screen-xl animate-show-up items-center justify-center py-4">
      <div className="relative flex flex-col items-center justify-center gap-3 px-2">
        <h1 className="text-4xl uppercase min-[315px]:text-5xl sm:text-7xl sm:tracking-widest lg:text-8xl">
          {title}
        </h1>
        <span className="max-w-xl px-2 text-center text-lg lg:text-xl">
          A brief summery of the impact{" "}
          <span className="font-semibold">{title}</span> had in the{" "}
          <span className="whitespace-normal font-semibold">
            Erasmums+ KA220
          </span>{" "}
          project &quot;
          <span className="whitespace-normal font-semibold">
            Before It Is Too Late
          </span>
          &quot;.
        </span>
      </div>
    </section>
  );
}
