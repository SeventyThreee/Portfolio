"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ProfilePicture } from "./ProfilePicture";

interface AnimatedProfilePictureProps {
  delay?: number;
}

export function AnimatedProfilePicture({
  delay = 0,
}: AnimatedProfilePictureProps) {
  const [isMounted, setIsMounted] = useState(false);

  // Ensure this only runs on the client-side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render the animation during SSR or before the component is mounted
  if (!isMounted) {
    return <ProfilePicture />;
  }

  return (
    <motion.div
      key="motion-wrapper"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
        delay,
      }}
    >
      <ProfilePicture />
    </motion.div>
  );
}
