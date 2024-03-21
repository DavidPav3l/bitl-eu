"use client";

import { useMediaQuery } from "@/lib/use-media-query";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { ChevronsLeft } from "lucide-react";

import Link from "next/link";
import Image from "next/image";

import EuFund from "./EuFund";

import turkiyeFlag from "@/assets/flags/turkey.png";
import polandFlag from "@/assets/flags/poland.png";
import croatiaFlag from "@/assets/flags/croatia.png";
import romaniaFlag from "@/assets/flags/romania.png";
import irelandFlag from "@/assets/flags/ireland.png";

function CountryLink({ href, name, photo }) {
  return (
    <Link className="flex items-center justify-start gap-3" href={href}>
      <Image
        className="w-7 rounded-[50%] shadow-lg shadow-zinc-400"
        alt={`${name} flag`}
        src={photo}
      ></Image>
      <span className="text-2xl ">{name}</span>
    </Link>
  );
}

export default function Sidebar() {
  const isDesktop = useMediaQuery("(min-width: 640px)");

  return (
    <>
      {isDesktop ? null : (
        <Sheet>
          <SheetTrigger className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
            <ChevronsLeft className="h-8 w-8" />
            <span className="sr-only">Open</span>
          </SheetTrigger>
          <SheetContent>
            <div className="flex h-full flex-col justify-between">
              <nav className="mb-10 mt-[140px] space-y-16">
                <menu className="space-y-6">
                  <h2 className="text-2xl font-semibold ">Quick Access</h2>
                  <div className="ml-1 space-y-4">
                    <li>
                      <Link className="text-2xl" href="/mobilities">
                        Mobilities
                      </Link>
                    </li>
                    <li>
                      <Link className="text-2xl" href="/blog">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link className="text-2xl" href="/footprint">
                        Footprint
                      </Link>
                    </li>
                  </div>
                </menu>
                <menu className="space-y-6">
                  <h2 className="text-2xl font-semibold ">
                    Partener Countries
                  </h2>
                  <div className="ml-1 space-y-6">
                    <li>
                      <CountryLink
                        name="Türkiye"
                        href="/turkiye"
                        photo={turkiyeFlag}
                      />
                    </li>
                    <li>
                      <CountryLink
                        name="Poland"
                        href="/poland"
                        photo={polandFlag}
                      />
                    </li>
                    <li>
                      <CountryLink
                        name="Croatia"
                        href="/croatia"
                        photo={croatiaFlag}
                      />
                    </li>
                    <li>
                      <CountryLink
                        name="Romania"
                        href="/romania"
                        photo={romaniaFlag}
                      />
                    </li>
                    <li>
                      <CountryLink
                        name="Ireland"
                        href="/ireland"
                        photo={irelandFlag}
                      />
                    </li>
                  </div>
                </menu>
              </nav>
              <EuFund />
            </div>
          </SheetContent>
        </Sheet>
      )}
    </>
  );
}