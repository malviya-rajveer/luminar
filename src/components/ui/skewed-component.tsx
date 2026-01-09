"use client";
import {
  IconArrowAutofitContent,
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
} from "@tabler/icons-react";
import { motion, scale } from "motion/react";
export const SkewedCard = () => {
  const skewEffect_parent = {
    initial: {
      translateY: -40,
      translateX: 40,
      translateZ: 0,
      opacity: 0,
      filter: "blur(10px)",
      skewX: 19,
    },
    hover: {
      translateY: 0,
      translateX: 0,
      filter: "blur(0px)",
      opacity: 1,
      translateZ: 0,
      skewX: 17,
    },
  };
  const skewEffect_child = {
    initial: {
      translateY: -20,
      translateX: 30,
      translateZ: 0,
      opacity: 0,
      filter: "blur(10px)",
      skewX: 19,
    },
    hover: {
      translateY: 0,
      translateX: 0,
      filter: "blur(0px)",
      opacity: 1,
      translateZ: 0,
      skewX: 0,
    },
  };

  return (
    <motion.div
      className="absolute inset-0 z-20 flex items-center justify-center"
      initial="initial"
      whileHover="hover"
    >
      <div className="absolute inset-0 mask-b-from-50% mask-b-to-100%">
        <div className="bg absolute right-0 bottom-6 h-45 w-65 skew-x-17 rounded-2xl border border-b-0 border-neutral-300 dark:border-neutral-800"></div>
        <motion.div
          variants={skewEffect_parent}
          transition={{
            duration: 0.5,
            delay: 0,
          }}
          className="absolute right-0 bottom-6 h-45 w-65 overflow-hidden rounded-2xl bg-linear-to-r from-white to-neutral-100 mask-b-from-90% mask-b-to-100% dark:from-neutral-700 dark:to-black/50"
        >
          <motion.div
            variants={skewEffect_child}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: 0.4,
            }}
            className="m-3 flex w-57 justify-between gap-1"
          >
            <div className="flex gap-1">
              <div className="size-2 skew-x-0 rounded-full bg-neutral-200 dark:bg-neutral-400"></div>
              <div className="size-2 rounded-full bg-neutral-200 dark:bg-neutral-400"></div>
              <div className="size-2 rounded-full bg-neutral-200 dark:bg-neutral-400"></div>
            </div>
            <motion.div
              variants={skewEffect_child}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                delay: 0.6,
              }}
              className="flex gap-1 text-neutral-500 dark:text-white"
            >
              <IconArrowNarrowLeft size={13} />
              <IconArrowNarrowRight size={13} />
            </motion.div>
          </motion.div>
          <motion.div
            variants={skewEffect_child}
            className="relative z-60 flex w-full"
          >
            <motion.div className="ml-3 flex w-0 flex-col gap-3">
              <motion.span
                variants={skewEffect_child}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
                className="text-xs text-neutral-500 dark:text-white"
              >
                Dashboard
              </motion.span>
              <motion.span
                variants={skewEffect_child}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  delay: 0.25,
                }}
                className="text-xs text-neutral-500 dark:text-white"
              >
                Expenses
              </motion.span>{" "}
              <motion.span
                variants={skewEffect_child}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
                className="text-xs text-neutral-500 dark:text-white"
              >
                Wallet
              </motion.span>{" "}
              <motion.span
                variants={skewEffect_child}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  delay: 0.15,
                }}
                className="text-xs text-neutral-500 dark:text-white"
              >
                Whishlist
              </motion.span>
            </motion.div>
            <div className="mx-19 h-30 w-px skew-2 bg-linear-to-b from-transparent via-neutral-400 to-transparent dark:via-white"></div>
            <div className="absolute right-0 flex h-full w-42 skew-x-2 flex-col gap-2">
              <motion.div
                variants={skewEffect_child}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
                className="mx-auto h-8 w-38 rounded-md bg-linear-to-r from-white to-neutral-50 dark:from-neutral-700 dark:to-neutral-950"
              >
                <span className="text-shadow-2xl ml-3 text-xs text-blue-400">
                  car expenses
                </span>
              </motion.div>
              <motion.div
                variants={skewEffect_child}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  delay: 0.23,
                }}
                className="mx-auto h-8 w-38 rounded-md bg-linear-to-r from-white to-neutral-50 dark:from-neutral-700 dark:to-neutral-950"
              >
                <span className="text-shadow-2xl ml-3 text-xs text-red-300">
                  monthly bills
                </span>
              </motion.div>
              <motion.div
                variants={skewEffect_child}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  delay: 0.15,
                }}
                className="mx-auto h-8 w-38 rounded-md bg-linear-to-r from-white to-neutral-50 dark:from-neutral-700 dark:to-neutral-950"
              >
                <span className="text-shadow-2xl ml-3 text-xs text-teal-400">
                  last month saving
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
