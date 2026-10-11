import { useEffect, useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

interface Props {
  children: ReactNode;
  /** Classes for the visual card — put `bento-card` styles here. */
  className?: string;
  /** Max rotation in degrees on each axis. */
  maxTilt?: number;
}

const spring = { stiffness: 240, damping: 24, mass: 0.5 } as const;

/**
 * Frosted-glass 3D tilt wrapper (Aurora theme).
 * Outer div is a transparent perspective container; the visual card
 * (`className`) rotates on transform only — no layout impact. Disabled on
 * touch devices and under prefers-reduced-motion. The existing card
 * spotlight keeps working because `bento-card` lives on the rotating element
 * and mouse events bubble to it.
 */
export default function TiltCard({ children, className = "", maxTilt = 7 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const enabled = useRef(false);

  useEffect(() => {
    enabled.current =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const sRotateX = useSpring(rotateX, spring);
  const sRotateY = useSpring(rotateY, spring);

  return (
    <div
      ref={ref}
      className="h-full"
      style={{ perspective: 900 }}
      onMouseMove={(e) => {
        if (!enabled.current || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        rotateY.set((px - 0.5) * maxTilt * 2);
        rotateX.set((0.5 - py) * maxTilt * 2);
      }}
      onMouseLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
    >
      <motion.div
        className={`tilt-3d flex h-full flex-col justify-between ${className}`}
        style={{ rotateX: sRotateX, rotateY: sRotateY }}
      >
        {children}
      </motion.div>
    </div>
  );
}
