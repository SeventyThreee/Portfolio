"use client";

import { useEffect, useState } from "react";
import { BentoCard } from "./BentoCard";
import Image from "next/image";
import { softwareData } from "../data/toolboxProject";

type SoftwareItem = {
  title: string;
  imgSrc: string;
  link: string;
};

export function ProjectShowcase({ linkTo }: { linkTo?: string }) {
  const [items, setItems] = useState<JSX.Element[]>([]);

  useEffect(() => {
    // Load the software data dynamically on the client side
    import("../data/toolboxProject").then(({ softwareData }) => {
      const generatedItems = (softwareData as SoftwareItem[])
        .slice(0, 5)
        .map((item, index) => (
          <div key={item.title} className="group inline-block text-center">
            <div
              className={`rounded-[20px] border border-border-primary p-1.5 sm:p-2 transition-all duration-500 group-hover:border-indigo-400 ${
                index === 2
                  ? "w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-[130px] lg:h-[130px] delay-0 group-hover:-translate-y-3"
                  : index === 1 || index === 3
                    ? "w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-[110px] lg:h-[110px] delay-100 group-hover:-translate-y-3"
                    : "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[110px] lg:h-[110px] delay-200 group-hover:-translate-y-3"
              }`}
            >
              <div
                className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0]"
                style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
              >
                <div className="relative h-10 w-10">
                  <Image
                    src={item.imgSrc}
                    alt={item.title}
                    fill
                    className="object-contain"
                    sizes="40px"
                    priority={index < 2} // Only prioritize first couple of images
                  />
                </div>
              </div>
            </div>
          </div>
        ));
      setItems(generatedItems);
    });
  }, []);

  return (
    <BentoCard linkTo={linkTo} height="md:h-[304px] lg:h-[300px]">
      <div className="group-hover:from-bg-white absolute inset-y-0 left-0 z-20 w-8 bg-gradient-to-r from-bg-primary to-transparent md:w-1/5"></div>
      <div className="group-hover:from-bg-white absolute inset-y-0 right-0 z-20 w-8 bg-gradient-to-l from-bg-primary to-transparent md:w-1/5"></div>
      <div className="z-20 text-center">
        <h2 className="text-base font-medium">My Projects</h2>
        <p className="mt-1 text-text-secondary">
          I love creating products from scratch
        </p>
      </div>
      <div className="mt-10 flex items-center justify-center gap-3 transition-all duration-500 ease-in-out md:mt-12">
        {items.length > 0
          ? items
          : // Loading skeleton
            Array(5)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className={`animate-pulse rounded-[20px] bg-gray-200 ${
                    i === 2 
                      ? 'w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-[130px] lg:h-[130px]'
                      : 'w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[110px] lg:h-[110px]'
                  }`}
                />
              ))}
      </div>
    </BentoCard>
  );
}