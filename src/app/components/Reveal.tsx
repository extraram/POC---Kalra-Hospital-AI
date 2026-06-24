import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: 28, y: 0 },
  right: { x: -28, y: 0 },
  none: { x: 0, y: 0 },
};

interface RevealProps {
  children: ReactNode;
  /** Direction the content travels in from. Default "up". */
  direction?: Direction;
  /** Seconds to wait before the animation starts. */
  delay?: number;
  /** Animation duration in seconds. */
  duration?: number;
  className?: string;
}

/**
 * Fades + slides its children into view the first time they enter the viewport.
 * Respects the user's reduced-motion preference.
 */
export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className,
}: RevealProps) {
  const reduce = useReducedMotion();
  const { x, y } = offsets[direction];

  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
