import ImageUpload from "@/components/custom/AiForm";

import { Toaster } from "@/components/ui/toaster";

export default function AiPage() {
  return (
    <main className="mx-auto w-[calc(90%_-_16px)] max-w-screen-xl">
      <section className="mb-20 mt-[15vh] min-h-[calc(100vh_-_100px_-_200px)] space-y-8 sm:space-y-12 lg:space-y-16">
        <h1 className="text-center text-3xl font-bold sm:text-4xl lg:text-5xl">
          EcoScan
        </h1>
        <ImageUpload />
      </section>
      <Toaster />
    </main>
  );
}
