"use client";

import Sidebar from "./Sidebar";

import { Button } from "../ui/button";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const pathName = usePathname();

  return (
    <header className="mx-auto flex h-[100px] w-[calc(90%_-_16px)] max-w-screen-xl items-center justify-between py-3">
      <Button
        className="hover_underline p-0 text-2xl text-foreground hover:no-underline sm:text-3xl"
        asChild
        variant="link"
      >
        <Link href="/">
          <span className="font-light tracking-wider">BITL</span>{" "}
          <span
            className={`font-bold ${pathName === "/" ? "text-primary" : "text-emerald-500"}`}
          >
            Blog
          </span>
        </Link>
      </Button>
      <menu className="hidden gap-10 lg:flex">
        <li>
          <Button
            className="p-0 text-lg text-foreground transition-all duration-300 hover:text-primary hover:no-underline"
            asChild
            variant="link"
          >
            <Link
              href="/mobilities"
              className={`${pathName === "/mobilities" ? "text-primary" : ""}`}
            >
              Mobilities
            </Link>
          </Button>
        </li>
        <li>
          <Button
            className="p-0 text-lg text-foreground transition-all duration-300 hover:text-primary hover:no-underline"
            asChild
            variant="link"
          >
            <Link
              href="/blog"
              className={`${pathName === "/blog" ? "text-primary" : ""}`}
            >
              Blog
            </Link>
          </Button>
        </li>
        <li>
          <Button
            className="p-0 text-lg text-foreground transition-all duration-300 hover:text-primary hover:no-underline"
            asChild
            variant="link"
          >
            <Link
              href="/footprint"
              className={`${pathName === "/footprint" ? "text-orange-500" : ""}`}
            >
              Footprint
            </Link>
          </Button>
        </li>
        <li>
          <Button
            className="p-0 text-lg text-foreground transition-all duration-300 hover:text-primary hover:no-underline"
            asChild
            variant="link"
          >
            <Link
              href="/air"
              className={`${pathName === "/air" ? "text-orange-500" : ""}`}
            >
              Air Quality
            </Link>
          </Button>
        </li>
        <li>
          <Button
            className="p-0 text-lg text-foreground transition-all duration-300 hover:text-primary hover:no-underline"
            asChild
            variant="link"
          >
            <Link
              href="/ai"
              className={`${pathName === "/ai" ? "text-orange-500" : ""}`}
            >
              EcoScan
            </Link>
          </Button>
        </li>
      </menu>
      <div className="lg:hidden">
        <Sidebar />
      </div>
    </header>
  );
}
