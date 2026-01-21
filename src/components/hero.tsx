"use client";
import Image from "next/image";
import { Magical_grid } from "./ui/magical-grid";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
export const Hero = () => {
  return (
    <div className="relative z-0 flex h-[130vh] w-full flex-col items-center overflow-hidden bg-white mask-b-from-70% mask-b-to-92% dark:bg-black">
      <div className="absolute inset-0 -z-20 mask-b-from-70% mask-b-to-95%">
        <Magical_grid></Magical_grid>
      </div>
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="mt-[30vh] flex flex-col items-center justify-center text-center dark:text-white"
      >
        <h1
          className={cn(
            "bg-linear-to-b from-stone-900 to-neutral-500 bg-clip-text pb-2 font-semibold tracking-tight text-transparent md:pb-4 dark:text-white",
            "text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
            "min-w-90 md:w-full",
          )}
        >
          Expense management without the stress.
        </h1>
        <p className="w-80 text-sm text-neutral-600 md:w-full lg:text-[16px] xl:text-lg dark:text-neutral-300">
          Our AI transforms data into clear insights, helping you act with speed
          and Clarity
        </p>
        <p className="pt-0.5 text-sm text-neutral-600 lg:text-[16px] xl:text-lg dark:text-neutral-300">
          get free dashboard expiriens now.{" "}
        </p>
        <motion.button
          initial={{
            scale: 1,
          }}
          whileTap={{
            scale: 0.96,
          }}
          className={cn(
            "group relative flex w-auto justify-center rounded-2xl tracking-wider",
            "bg-linear-to-b from-neutral-700 to-neutral-800 text-white",
            "ring-2 ring-stone-800/70 text-shadow-black text-shadow-xs",
            "px-3 py-1.5 lg:px-5 lg:py-2 xl:px-5 xl:py-2",
            "mt-6 lg:mt-8 xl:mt-8",
            "text-[11px] lg:text-[12px] xl:text-sm dark:from-neutral-700 dark:to-neutral-900/90 dark:text-white dark:ring-stone-900",
          )}
        >
          visit dashboard
          <div className="absolute -bottom-0.5 hidden h-px w-40 bg-linear-to-r from-transparent via-white to-transparent opacity-0 transition-all duration-200 ease-in-out group-hover:opacity-100 dark:block"></div>
        </motion.button>
      </motion.div>

      <div className="absolute inset-x-70 inset-y-50 top-120 bottom-0 -z-10 blur-[46px]">
        <div className="absolute inset-y-0 left-0 w-100 bg-yellow-200/70 dark:inset-0 dark:bg-white/60"></div>
        <div className="absolute inset-y-0 -right-0 w-100 bg-fuchsia-300/70 dark:bg-white/60"></div>
      </div>
      <motion.div
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="relative z-0 mt-[14vh] size-90 mask-b-from-50% mask-b-to-80% md:size-170 xl:size-200"
      >
        <Image
          src={"/image.png"}
          className="z-10 object-cover"
          height={800}
          width={800}
          alt=""
        ></Image>
      </motion.div>
      <div className="absolute top-20 right-0 -z-10 blur-[100px]">
        <div
          className={cn(
            "h-[137vh] w-[57vw] bg-blue-400/40 dark:bg-rose-400/70",
            "[clip-path:_polygon(23%_0,_69%_29%,_97%_44%,_100%_80%,_80%_100%,_20%_100%,_9%_60%,_6%_41%)]",
          )}
        ></div>
      </div>
      <div className="absolute top-20 left-0 -z-10 rotate-y-180 blur-[100px]">
        <div
          className={cn(
            "h-[137vh] w-[57vw] bg-pink-400/45 dark:bg-indigo-400/70",
            "[clip-path:_polygon(23%_0,_69%_29%,_97%_44%,_100%_80%,_80%_100%,_20%_100%,_9%_60%,_6%_41%)]",
          )}
        ></div>
      </div>
    </div>
  );
};
