import ImageUpload from "@/components/custom/AiForm";

import { Toaster } from "@/components/ui/toaster";

export default function AiPage() {
  return (
    <main className="mx-auto w-[calc(90%_-_16px)] max-w-screen-xl">
      <section className="mt-[10vh] min-h-[calc(100vh_-_100px_-_200px)] space-y-8 pb-20 sm:space-y-10 lg:space-y-12">
        <h1 className="text-center text-3xl font-semibold sm:text-4xl lg:text-5xl">
          <span className="text-4xl font-bold text-emerald-500 sm:text-5xl lg:text-6xl">
            Eco
          </span>
          Scan
        </h1>
        <ImageUpload />
      </section>
      <Toaster />
    </main>
  );
}
