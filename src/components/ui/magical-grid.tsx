"use client";
import { motion } from "motion/react";

interface ColsAndRows {
  opacity?: number[];
  duration?: number;
  delay?: number;
  repeatDelay?: number;
}

//   opacity: [0, 1.5, 0, 1, 1.4, 0, 1, 0, 1.7, 0, 1.2, 1.8, 0, 0, 0, 1, 1.5],
//   duration: 15,
//   delay: 0,
//   repeatDelay: 0.5,

export const Magical_grid = () => {
  const columns_grid: ColsAndRows[] = [
    {
      opacity: [0, 1.5, 0, 1, 1.4, 0, 1, 0, 1.7, 0, 1.2, 1.8, 0, 0, 0, 1, 1.5],
      duration: 15,
      delay: 0,
      repeatDelay: 0.5,
    },
    {},
    {
      opacity: [0, 1.5, 0, 0, 0, 1.4, 1, 0, 1.7, 0, 1.2, 1.8, 0, 0, 0, 1, 1.5],
      duration: 8,
      delay: 0,
      repeatDelay: 0.5,
    },
    {
      opacity: [0, 1.5, 0, 1, 1.4, 0, 1, 0, 1.7, 0, 1.2, 1.8, 0, 0, 0, 1, 1.5],
      duration: 15,
      delay: 0,
      repeatDelay: 0.5,
    },
    {},
    {},
    {
      opacity: [0, 1.5, 0, 1, 1.4, 0, 0, 0, 1.7, 0, 0, 1.8, 0, 0, 0, 1, 1.5],
      duration: 15,
      delay: 1,
      repeatDelay: 0.5,
    },
    {},
    {},
    {},
    {
      opacity: [0, 1.5, 0, 1, 1.4, 0, 1, 0, 1.7, 0, 1.2, 1.8, 0, 0, 0, 1, 1.5],
      duration: 15,
      delay: 0.1,
      repeatDelay: 0.5,
    },
    {},
    {},
    {
      opacity: [0, 1.5, 0, 1, 1.4, 0, 1, 0, 1.7, 0, 1.2, 1.8, 0, 0, 0, 1, 1.5],
      duration: 15,
      delay: 1.5,
      repeatDelay: 0,
    },
    {},
    {},
    {
      opacity: [0, 1.5, 0, 1, 1.4, 0, 0, 0, 1.7, 0, 1.2, 1.8, 0, 0, 0, 1, 1.5],
      duration: 15,
      delay: 3,
      repeatDelay: 0.5,
    },
    {},
    {
      opacity: [0, 0, 0, 0, 0.5, 0, 1, 0, 0.7, 0, 0.2, 0, 0, 0, 0, 1, 0.5],
      duration: 15,
      delay: 2,
      repeatDelay: 1,
    },
    {},
    {
      opacity: [0, 1.5, 0, 1, 1.4, 0, 1, 0, 1.7, 0, 1.2, 1.8, 0, 0, 0, 1, 1.5],
      duration: 15,
      delay: 2,
      repeatDelay: 1,
    },
    {},
  ];
  const rows_grid: ColsAndRows[] = [
    {
      opacity: [0, 1.5, 0, 1, 1.4, 0, 1, 0, 1.7, 0, 1.2, 1.8, 0, 0, 0, 1, 1.5],
      duration: 15,
      delay: 0,
      repeatDelay: 0.5,
    },
    {},
    {
      opacity: [0, 1.5, 0, 1, 1.4, 0, 1, 0, 1.7, 0, 1.2, 1.8, 0, 0, 0, 1, 1.5],
      duration: 10,
      delay: 0,
      repeatDelay: 0.5,
    },
    {
      opacity: [0, 1.5, 0, 1, 1.4, 0, 1, 0, 1.7, 0, 1.2, 1.8, 0, 0, 0, 1, 1.5],
      duration: 20,
      delay: 0.6,
      repeatDelay: 0.5,
    },
    {
      opacity: [0, 1.5, 0, 1, 1.4, 0, 1, 0, 1.7, 0, 1.2, 1.8, 0, 0, 0, 1, 1.5],
      duration: 15,
      delay: 0,
      repeatDelay: 0.5,
    },
    {
      opacity: [0, 1.5, 0, 1, 1.4, 0, 1, 0, 1.7, 0, 1.2, 1.8, 0, 0, 0, 1, 1.5],
      duration: 15,
      delay: 0,
      repeatDelay: 0.5,
    },
    {},
    {
      opacity: [0, 1.5, 0, 1, 1.4, 0, 1, 0, 1.7, 0, 1.2, 1.8, 0, 0, 0, 1, 1.5],
      duration: 15,
      delay: 0,
      repeatDelay: 0.5,
    },
    {},
    {
      opacity: [0, 1.5, 0, 1, 1.4, 0, 1, 0, 1.7, 0, 1.2, 1.8, 0, 0, 0, 1, 1.5],
      duration: 15,
      delay: 0,
      repeatDelay: 0.5,
    },
    {
      opacity: [0, 1.5, 0, 1, 1.4, 0, 1, 0, 1.7, 0, 1.2, 1.8, 0, 0, 0, 1, 1.5],
      duration: 15,
      delay: 0,
      repeatDelay: 0.5,
    },
    {},
  ];
  return (
    <div>
      {" "}
      <div className="h-auto w-full overflow-hidden">
        <div className="mx-auto grid w-7xl shrink-0 grid-cols-22 gap-15">
          {columns_grid.map((data, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{
                  opacity: 1,
                }}
                animate={{
                  opacity: data.opacity || 1,
                }}
                transition={{
                  duration: data.duration,
                  delay: data.delay,
                  repeatDelay: data.repeatDelay,
                  repeat: Infinity,
                }}
                className="h-[130vh] w-[1px] bg-neutral-400 dark:bg-white/30"
              ></motion.div>
            );
          })}
        </div>
      </div>
      <div className="absolute inset-0 z-10 overflow-hidden">
        <div className="grid grid-rows-20 gap-15">
          {rows_grid.map((data, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{
                  opacity: 1,
                }}
                animate={{
                  opacity: data.opacity || 1,
                }}
                transition={{
                  duration: data.duration,
                  delay: data.delay,
                  repeat: Infinity,
                  repeatDelay: data.repeatDelay,
                }}
                className="h-[1px] w-screen bg-neutral-400 dark:bg-white/30"
              ></motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
