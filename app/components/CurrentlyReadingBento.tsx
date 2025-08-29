import { Changelog } from "@/.velite";
import { fetchAndSortChangelogEntrees } from "app/lib/utils";
import { BentoCard } from "./BentoCard";
import { motion } from "framer-motion";
import Image from "next/image";

export function CurrentlyReadingBento() {
  return (
    <BentoCard height="h-full" className="group">
      <h2 className="mb-2 font-medium">Coming soon</h2>
      <div className="relative h-full">
        <div className="absolute left-10 top-6 h-full origin-bottom-left transition-transform duration-300 ease-in-out group-hover:-rotate-3">
          <BookCover />
        </div>
      </div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-white via-transparent to-transparent"></div>
    </BentoCard>
  );
}

function BookCover() {
  return (
    <div className="relative aspect-video h-full w-96 overflow-hidden rounded bg-red-500">
      <div className="absolute left-5 h-full w-2 bg-slate-900/20 blur-sm"></div>
      <Image
        src="/My Book.png"
        alt="My Book coming soon"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
