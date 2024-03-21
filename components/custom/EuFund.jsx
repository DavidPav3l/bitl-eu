import Image from "next/image";

import euLogo from "@/assets/flag-eu-svgrepo-com.svg";

export default function EuFund() {
  return (
    <div className="flex h-[100px] w-full shrink-0 items-center justify-between gap-3">
      <p className="xs:text-base text-sm font-semibold">
        Co-funded by the <br /> European Union
      </p>
      <Image
        src={euLogo}
        className="xs:w-16 w-12"
        alt="European Union Logo"
      ></Image>
    </div>
  );
}
