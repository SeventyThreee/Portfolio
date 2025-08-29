"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export interface TimelineProps {
  avatarUrl: string;
}

export function Timeline({ avatarUrl }: TimelineProps) {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["end 50%", "start 50%"],
    layoutEffect: false,
  });

  const avatarY = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Always render the same structure, just control the animation state
  return (
    <div ref={containerRef} className="relative h-full w-full">
      <motion.div
        className="absolute -left-0.5 z-10 flex h-9 w-9 items-center justify-center"
        style={
          isMounted
            ? {
                top: 0,
                height: "100%",
                y: avatarY,
              }
            : {
                position: "absolute",
                top: 0,
                height: "100%",
                transform: "translateY(100%)",
              }
        }
      >
        <div className="h-9 w-9 overflow-hidden rounded-full border-2 border-bg-primary bg-bg-primary shadow-md">
          <Image
            src={avatarUrl}
            alt="Profile"
            width={36}
            height={36}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </motion.div>
      <div className="absolute bottom-0 left-1/2 top-0 w-2 -translate-x-1/2 rounded-full bg-[#E8ECEF] shadow-[inset_0_2px_1.5px_rgba(165,174,184,0.32)]">
        {isMounted && (
          <motion.div
            className="absolute inset-0 w-full origin-bottom rounded-full bg-gradient-to-b from-blue-500 to-transparent"
            style={{ scaleY: scrollYProgress }}
          />
        )}
      </div>
    </div>
  );
}
