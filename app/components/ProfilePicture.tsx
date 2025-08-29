"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const IMAGES = [
  "/Jeeva1.png",
  "/Jeeva11.jpeg",
  "/Jeevakrishna.jpg",
  "/Jeeva.jpg",
  "/Jeeva3.jpg",
];

export function ProfilePicture() {
  const [mounted, setMounted] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  // Only render on client-side to avoid hydration mismatch
  useEffect(() => {
    // Set a random initial image on mount
    setImageIndex(Math.floor(Math.random() * IMAGES.length));
    setMounted(true);
  }, []);

  const changeImage = () => {
    if (!mounted) return;

    setIsChanging(true);
    const availableImages = IMAGES.filter((_, idx) => idx !== imageIndex);
    const randomIndex = Math.floor(Math.random() * availableImages.length);
    const newIndex = IMAGES.indexOf(availableImages[randomIndex]);

    setImageIndex(newIndex);
  };

  if (!mounted) {
    // Return a simple placeholder with the same dimensions during SSR
    return (
      <div className="relative my-5 md:mt-9">
        <div className="mx-auto h-[148px] w-[148px] rounded-full bg-gray-200" />
      </div>
    );
  }

  return (
    <div className="relative my-5 md:mt-9">
      <div className="relative">
        <motion.svg
          className="mx-auto"
          width="148"
          height="148"
          viewBox="0 0 148 148"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={isChanging ? { scale: 0.95 } : { scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 10,
          }}
          onAnimationComplete={() => setIsChanging(false)}
        >
          <circle
            cx="74"
            cy="74"
            r="73.5"
            stroke="#D6DADE"
            strokeOpacity="0.5"
          />
          <g filter="url(#filter0_i_0_1)">
            <rect
              x="16"
              y="16"
              width="116"
              height="116"
              rx="58"
              fill="#F7F7F8"
            />
            <foreignObject x="20" y="20" width="108" height="108">
              <div className="h-full w-full overflow-hidden rounded-full">
                <Image
                  src={IMAGES[imageIndex]}
                  alt="Profile"
                  width={108}
                  height={108}
                  className="h-full w-full object-cover"
                  onClick={changeImage}
                  style={{ cursor: "pointer" }}
                  priority
                />
              </div>
            </foreignObject>
          </g>
          <defs>
            <filter
              id="filter0_i_0_1"
              x="16"
              y="14"
              width="116"
              height="118"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="-2" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.647059 0 0 0 0 0.682353 0 0 0 0 0.721569 0 0 0 0.5 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_0_1"
              />
            </filter>
          </defs>
        </motion.svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={IMAGES[imageIndex]}
              className="h-[100px] w-[100px] overflow-hidden rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              <Image
                src={IMAGES[imageIndex]}
                alt="Profile"
                width={100}
                height={100}
                className="h-full w-full cursor-pointer object-cover transition-opacity hover:opacity-90"
                onClick={changeImage}
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
