import Sidebar from "./Sidebar";

import { Button } from "../ui/button";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="mx-auto flex h-[100px] w-[calc(90%_-_16px)] max-w-screen-xl items-center justify-between py-3">
      <Button
        className="p-0 text-2xl text-foreground hover:no-underline sm:text-3xl"
        asChild
        variant="link"
      >
        <Link href="/">
          <span className="font-light tracking-wider">BITL</span>{" "}
          <span className="font-bold text-emerald-500">Blog</span>
        </Link>
      </Button>
      <menu className="hidden gap-10 sm:flex">
        <li>
          <Button
            className="p-0 text-xl text-foreground hover:no-underline"
            asChild
            variant="link"
          >
            <Link href="/mobilities">Mobilities</Link>
          </Button>
        </li>
        <li>
          <Button
            className="p-0 text-xl text-foreground hover:no-underline"
            asChild
            variant="link"
          >
            <Link href="/blog">Blog</Link>
          </Button>
        </li>
        <li>
          <Button
            className="p-0 text-xl text-foreground hover:no-underline"
            asChild
            variant="link"
          >
            <Link href="/footprint">Footprint</Link>
          </Button>
        </li>
      </menu>
      <div className="sm:hidden">
        <Sidebar />
      </div>
    </header>
  );
}
