"use client";

import { useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
  width: number;
  height: number;
}

export function useElementBoundingRect(
  ref: React.RefObject<HTMLElement>,
): Position {
  const [boundingRect, setBoundingRect] = useState<Position>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return;

    function updateRect() {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      setBoundingRect({
        x: rect.left,
        y: rect.top,
        width: rect.width,
        height: rect.height,
      });
    }

    // Initial update
    updateRect();

    // Set up event listeners
    window.addEventListener("resize", updateRect);
    window.addEventListener("scroll", updateRect, { passive: true });

    // Clean up
    return () => {
      window.removeEventListener("resize", updateRect);
      window.removeEventListener("scroll", updateRect);
    };
  }, [ref]);

  return boundingRect;
}
