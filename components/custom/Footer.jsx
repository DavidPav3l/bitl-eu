import Image from "next/image";

import Link from "next/link";

import EuFund from "./EuFund";
import fcLogo from "@/assets/fc-ico.svg";
import instaLogo from "@/assets/insta-ico.svg";

export default function Footer() {
  return (
    <footer className="flex flex-col-reverse items-center justify-center px-5 py-4 sm:flex-row sm:justify-between">
      <div className="max-w-72">
        <EuFund />
      </div>
      <div className="flex items-center justify-center gap-5">
        <Link
          className="w-8 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          href="https://www.facebook.com/groups/1362000527654372"
          target="_blank"
        >
          <Image src={fcLogo} alt="Facebook BITL" className="w-full" />
        </Link>
        <Link
          className="w-8 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          href="https://www.instagram.com/erasmus_beforeitistoolate/"
          target="_blank"
        >
          <Image src={instaLogo} alt="Instagram BITL" className="w-full" />
        </Link>
      </div>
    </footer>
  );
}
