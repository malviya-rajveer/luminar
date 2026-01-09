"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const Varient = {
  initial: {
    translateX: 500,
  },
  animate: {
    translateX: -750,
    transition: {
      duration: 10,
      delay: 0.2,
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

export const Auto_Storing = () => {
  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="absolute inset-0 flex h-full w-full items-center justify-center gap-3"
    >
      <motion.div variants={Varient} className="flex gap-7">
        <Token_bar className="top-10 from-green-400" word="$10k"></Token_bar>
        <Token_bar className="" word="$200"></Token_bar>
        <Token_bar word="$30k" className="top-40"></Token_bar>
        <Token_bar word="$700"></Token_bar>
      </motion.div>{" "}
      <motion.div variants={Varient} className="flex gap-7">
        <Token_bar className="top-23" word="$10k"></Token_bar>
        <Token_bar className="" word="$200"></Token_bar>
        <Token_bar word="$30k" className="top-18"></Token_bar>
        <Token_bar word="$700"></Token_bar>
      </motion.div>{" "}
      <motion.div variants={Varient} className="flex gap-7">
        <Token_bar className="top-27" word="$10k"></Token_bar>
        <Token_bar className="" word="$200"></Token_bar>
        <Token_bar word="$30k" className="top-15"></Token_bar>
        <Token_bar word="$700"></Token_bar>
      </motion.div>{" "}
      <motion.div variants={Varient} className="flex gap-7">
        <Token_bar className="top-27" word="$10k"></Token_bar>
        <Token_bar className="" word="$200"></Token_bar>
        <Token_bar word="$30k" className="top-20"></Token_bar>
        <Token_bar word="$700"></Token_bar>
      </motion.div>{" "}
      <motion.div variants={Varient} className="flex gap-7">
        <Token_bar className="top-27" word="$10k"></Token_bar>
        <Token_bar className="" word="$200"></Token_bar>
        <Token_bar word="$30k" className="top-27"></Token_bar>
        <Token_bar word="$700"></Token_bar>
      </motion.div>{" "}
      <motion.div variants={Varient} className="flex gap-7">
        <Token_bar className="top-15" word="$10k"></Token_bar>
        <Token_bar className="" word="$200"></Token_bar>
        <Token_bar word="$30k" className="top-27"></Token_bar>
        <Token_bar word="$700"></Token_bar>
      </motion.div>{" "}
      <motion.div variants={Varient} className="flex gap-7">
        <Token_bar className="top-20" word="$10k"></Token_bar>
        <Token_bar className="" word="$200"></Token_bar>
        <Token_bar word="$30k" className="top-27"></Token_bar>
        <Token_bar word="$700"></Token_bar>
      </motion.div>{" "}
    </motion.div>
  );
};

const Token_bar = ({
  className,
  word,
}: {
  className?: string;
  word: string;
}) => {
  return (
    <div className="relative flex w-10 items-center justify-center">
      <div
        style={{
          maskImage:
            "linear-gradient(to bottom,transparent,black 30%,transparent 90%)",
        }}
        className="h-50 w-[0.1px] border border-r-0 border-dashed border-neutral-400"
      ></div>
      <div
        className={cn(
          "absolute top-10 z-10 flex h-4 w-10 items-center justify-center rounded-md bg-linear-to-r from-rose-400 to-blue-500 text-xs text-white",
          className,
        )}
      >
        {word}
      </div>
    </div>
  );
};
