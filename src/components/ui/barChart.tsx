"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const Bar_Chart = () => {
  const bars = [
    {
      initial: 60,
      translateY: [60, -20, 50, 60],
      className: "",
    },
    {
      initial: 0,
      translateY: [0, 45, -10, 0],
      className: "",
    },
    {
      initial: 25,
      translateY: [25, -30, 0, -20, 25],
      className: "",
    },
    {
      initial: -20,
      translateY: [-20, 50, 5, 0, -20],
      className: "",
    },
    {
      initial: 19,
      translateY: [19, -20, 19],
      className: "",
    },
  ];

  const barVariants = {
    move: (custom: { translateY: number[] }) => ({
      translateY: custom.translateY,
    }),
  };

  return (
    <motion.div
      className="relative z-20 h-full w-full overflow-hidden"
      whileHover="move"
    >
      <motion.div className="mx-auto mt-20 grid h-32 w-60 grid-cols-5 gap-2 overflow-hidden">
        {bars.map((data, id) => {
          return (
            <motion.div
              custom={{
                translateY: data.translateY,
              }}
              initial={{
                translateY: data.initial,
              }}
              key={id}
              variants={barVariants}
              transition={{
                duration: 1.5,
                ease: "linear",
              }}
              className={cn(
                "relative top-10 rounded-t-md bg-linear-to-b",
                "from-rose-300 to-indigo-300 to-60%",
                "dark:from-rose-500 dark:to-blue-500 dark:to-60%",
                data.className,
              )}
            ></motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};
