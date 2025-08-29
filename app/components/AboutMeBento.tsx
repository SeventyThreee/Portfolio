import { getTimeOfDayGreeting } from "../lib/utils";
import { BentoCard } from "./BentoCard";
import Image from "next/image";

export function AboutMeBento({ linkTo }: { linkTo?: string }) {
  const timeOfDayGreeting = getTimeOfDayGreeting();

  return (
    <BentoCard height="h-[275px] md:h-[304px] lg:h-[220px]" linkTo={linkTo}>
      <div className="group flex h-full">
        <div className="text-balance">
          <h2 className="mb-4 text-base font-medium">Learn more about me</h2>
          <p className="mb-2 text-balance pr-1 text-text-secondary md:pr-4">
            {timeOfDayGreeting} <br />
            I&apos;m Jeeva Krishna V,Full-time Developer & Engineer, Part-time
            Artist.
          </p>
        </div>
        <div className="relative">
          <div className="group inline-block text-center">
            <div
              className="rounded-[20px] border border-border-primary p-2 transition-all duration-500 ease-out group-hover:border-indigo-400"
              style={{ width: 188, height: 278 }}
            >
              <div
                className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0]"
                style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
              ></div>
            </div>
          </div>
          <div className="absolute -top-1 left-0 h-[180px] w-[180px] rotate-[7deg] overflow-hidden rounded-lg shadow transition-all duration-500 group-hover:rotate-[4deg] group-hover:scale-105">
            <Image
              src="/Jeeva1.png"
              alt="Jeeva Krishna"
              width={180}
              height={180}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </BentoCard>
  );
}
