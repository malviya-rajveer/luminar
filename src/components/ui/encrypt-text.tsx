"use client";

import { motion, Variants } from "motion/react";

motion;
export const Encrypted_Text = () => {
  const word_Enter_varient = {
    hover: {
      translateX: 80,
      transition: { duration: 1.5 },
    },
  };
  const word_exit_varient = {
    hover: {
      translateX: 15,
      transition: {
        duration: 1.8,
      },
    },
  };
  const word_stagger = {
    hover: {
      transition: {
        delayChildren: 0,
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    animate: {
      transition: {
        delayChildren: 3,
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  return (
    <motion.div
      className="group absolute inset-0 z-10 flex items-center justify-center grayscale-500 transition-all duration-100 ease-in-out hover:grayscale-0"
      initial="initial"
      whileHover="hover"
      animate="animate"
    >
      <motion.div className="h-10 w-20 translate-x-4.5 overflow-hidden">
        <motion.div
          variants={word_Enter_varient}
          initial={{
            translateX: 0,
          }}
          className="mt-4 bg-linear-to-r from-rose-400 to-blue-500 bg-clip-text text-lg font-medium text-transparent"
        >
          $5000
        </motion.div>
      </motion.div>
      <div className="absolute mt-4 h-25 w-[1.8px] bg-linear-to-b from-transparent via-blue-500 to-transparent dark:via-white">
        <div className="dark:via-blue absolute h-25 w-[3px] bg-linear-to-b from-transparent via-blue-500 to-transparent opacity-0 blur-[10px] transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
      </div>

      <motion.div className="mt-7.5 h-10 w-29 translate-x-4 overflow-hidden">
        <motion.div
          variants={word_exit_varient}
          initial={{
            translateX: -120,
          }}
          className="pt-0.5 text-emerald-400"
        >
          <motion.div variants={word_stagger}>
            {"Y$9Wr#C5&".split("").map((char, idx, arr) => {
              console.log(char);
              return (
                <motion.span
                  className="inline-block"
                  // variants={letter}
                  key={char + idx}
                >
                  {char}
                </motion.span>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>
      <div></div>
    </motion.div>
  );
};
