"use client";
import {
  IconBarbell,
  IconBrandMcdonalds,
  IconPlane,
  IconWallet,
} from "@tabler/icons-react";
import { motion } from "motion/react";

export const Controlled_spending = () => {
  const beam_variants = {
    initial: {
      opacity: 0,
    },
    hover: {
      opacity: 1,
    },
  };
  return (
    <motion.div
      className="gro absolute inset-0 flex flex-col items-center"
      initial="initial"
      whileHover="hover"
    >
      <div className="relative mt-30 size-13 overflow-hidden rounded-2xl bg-transparent shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:bg-transparent">
        <div className="absolute inset-[0.9px] z-10 flex items-center justify-center rounded-[16px] bg-neutral-100 dark:bg-neutral-700">
          <IconWallet
            className="stroke-neutral-400 dark:stroke-white"
            size={28}
          ></IconWallet>
        </div>
        <motion.div
          variants={beam_variants}
          className="absolute h-full w-full scale-150 animate-spin [background-image:conic-gradient(at_center,transparent,var(--color-blue-400)_20%,transparent_30%)] transition-all duration-700"
        ></motion.div>
        <motion.div
          variants={beam_variants}
          className="absolute h-full w-full scale-130 animate-spin [background-image:conic-gradient(at_center,transparent,var(--color-rose-400)_20%,transparent_30%)] [animation-delay:0.4s]"
        ></motion.div>
      </div>
      <motion.div className="absolute top-42 flex flex-col items-center dark:stroke-amber-50/50">
        <motion.svg height={133} width={100} className="">
          <motion.line
            // animate="hover"
            variants={beam_variants}
            x1={50}
            y1={0}
            x2={50}
            y2={133}
            stroke="url(#green_Beam-77)"
            fill=""
            className=""
            strokeWidth={2.5}
          />
          <line
            x1={50}
            y1={0}
            x2={50}
            y2={133}
            stroke=""
            fill=""
            className="stroke-neutral-300 dark:stroke-amber-50/50"
            strokeWidth={1}
          />
          <defs>
            <motion.linearGradient
              gradientUnits="userSpaceOnUse"
              id={"green_Beam-77"}
              variants={beam_variants}
              initial={{
                y1: "-30%",
                y2: "-10%",
                x1: "0%",
                x2: "0%",
              }}
              whileHover={{
                y1: "100%",
                y2: "120%",
                x1: "0%",
                x2: "0%",
              }}
              //   animate="hover"
              transition={{
                duration: 0.9,
                repeat: Infinity,
                repeatType: "loop",
                delay: 0,
                repeatDelay: 2,
                ease: "linear",
              }}
            >
              <stop
                offset="0"
                stopColor={"oklch(79.2% 0.209 151.711)"}
                stopOpacity="0"
              ></stop>
              <stop
                offset="1"
                stopColor={"oklch(79.2% 0.209 151.711)"}
                stopOpacity="1"
              ></stop>
              <stop
                offset="1"
                stopColor={"oklch(79.2% 0.209 151.711)"}
                stopOpacity="0"
              ></stop>
            </motion.linearGradient>
          </defs>
        </motion.svg>
        <div className="-mt-1">
          <svg height={10} width={135}>
            <line
              x1={0}
              y1={5}
              x2={135}
              y2={5}
              stroke=""
              className="stroke-neutral-300 dark:stroke-amber-50/50"
              strokeWidth={1.3}
            />
          </svg>
        </div>

        <div className="-m-1 flex gap-14">
          <motion.svg height={50} width={10}>
            <motion.line
              variants={beam_variants}
              x1={5}
              y1={0}
              x2={5}
              y2={50}
              stroke="url(#green_Beam4)"
              fill=""
              className=""
              strokeWidth={2.5}
            />
            <line
              x1={5}
              y1={0}
              x2={5}
              y2={50}
              stroke=""
              fill=""
              className="stroke-neutral-300 dark:stroke-amber-50/50"
              strokeWidth={1}
            />
            <defs>
              <motion.linearGradient
                gradientUnits="userSpaceOnUse"
                id={"green_Beam4"}
                variants={beam_variants}
                initial={{
                  y1: "-50%",
                  y2: "-10%",
                  x1: "0%",
                  x2: "0%",
                }}
                whileHover={{
                  y1: "100%",
                  y2: "150%",
                  x1: "0%",
                  x2: "0%",
                }}
                // animate="hover"
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 1,
                  repeatDelay: 2,
                  ease: "linear",
                }}
              >
                <stop
                  offset="0"
                  stopColor={"oklch(79.2% 0.209 151.711)"}
                  stopOpacity="0"
                ></stop>
                <stop
                  offset="1"
                  stopColor={"oklch(79.2% 0.209 151.711)"}
                  stopOpacity="1"
                ></stop>
                <stop
                  offset="1"
                  stopColor={"oklch(79.2% 0.209 151.711)"}
                  stopOpacity="0"
                ></stop>
              </motion.linearGradient>
            </defs>
          </motion.svg>
          {/*  */}
          {/*  */}
          {/*  */}
          <motion.svg height={50} width={10}>
            <motion.line
              variants={beam_variants}
              x1={5}
              y1={0}
              x2={5}
              y2={50}
              stroke="url(#green_Beam4)"
              fill=""
              className=""
              strokeWidth={2.5}
            />
            <line
              x1={5}
              y1={0}
              x2={5}
              y2={50}
              stroke=""
              fill=""
              className="stroke-neutral-300 dark:stroke-amber-50/50"
              strokeWidth={1}
            />
          </motion.svg>
          {/*  */}
          {/*  */}
          {/*  */}
          <motion.svg height={50} width={10}>
            <motion.line
              variants={beam_variants}
              x1={5}
              y1={0}
              x2={5}
              y2={50}
              stroke="url(#green_Beam4)"
              fill=""
              className=""
              strokeWidth={2.5}
            />
            <line
              x1={5}
              y1={0}
              x2={5}
              y2={50}
              stroke=""
              fill=""
              className="stroke-neutral-300 dark:stroke-amber-50/50"
              strokeWidth={1}
            />
          </motion.svg>
        </div>
      </motion.div>
      <div className="mt-45 flex gap-10">
        <IconPlane
          className="stroke-neutral-400 dark:stroke-white"
          size={26}
        ></IconPlane>
        <IconBrandMcdonalds
          className="stroke-neutral-400 dark:stroke-white"
          size={26}
        ></IconBrandMcdonalds>
        <IconBarbell
          className="stroke-neutral-400 dark:stroke-white"
          size={26}
        ></IconBarbell>
      </div>
    </motion.div>
  );
};
