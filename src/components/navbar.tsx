"use client";

import { cn } from "@/lib/utils";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";
import { useState } from "react";

export const Navbar = () => {
  const [product, setProduct] = useState(false);
  const [resources, setResources] = useState(false);
  const { theme, setTheme } = useTheme();
  return (
    <div className="fixed top-0 z-50 h-14 w-full border border-x-0 border-t-0 border-b-neutral-400 backdrop-blur-sm dark:border-b-white/40">
      <motion.div
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
        }}
        className={cn(
          "mx-auto flex h-full items-center justify-between",
          "md:w-2xl lg:w-4xl xl:w-6xl",
        )}
      >
        <div
          className={cn(
            "relative pl-2 font-sans text-[22px] font-semibold text-neutral-600 md:pl-0 dark:text-white",
          )}
        >
          Luminar
          <span className="text-2xl text-red-400">.</span>
          <div className="absolute -bottom-[2px] h-2 w-20">
            <div className="absolute h-1 w-20 bg-linear-to-r from-green-300 via-rose-400 to-transparent blur-[5px] dark:from-blue-600 dark:via-red-500"></div>
            <div className="absolute h-px w-20 bg-linear-to-r from-green-300 via-rose-400 to-transparent dark:from-blue-600 dark:via-red-400"></div>
          </div>
        </div>
        <div
          className={cn(
            "mr-2 flex items-center justify-between text-sm md:w-[460px] lg:w-xl xl:w-[700px]",
          )}
        >
          <div className="hidden md:block md:flex md:gap-2 lg:gap-4">
            <motion.div
              onHoverStart={() => setProduct(true)}
              onHoverEnd={() => setProduct(false)}
              className="relative inline-block cursor-pointer"
            >
              <div className="text-neutral-800 dark:text-white dark:hover:text-neutral-600">
                Product
              </div>
              <span className="absolute inline-block h-5 w-13"></span>
              <AnimatePresence>
                {product && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 5,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                    className="absolute top-7 -right-50 flex h-77 w-150 justify-center rounded-2xl border border-neutral-300 bg-white/95 backdrop-blur-[3px] dark:border-neutral-800 dark:bg-neutral-950/90"
                  >
                    <div className="absolute top-2.5 flex h-57 w-145 overflow-hidden rounded-xl border border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800/88">
                      <div className="flex h-full w-57 flex-col">
                        <h1 className="mt-3 ml-5 text-[13px] text-stone-500">
                          Core Feature
                        </h1>
                        <HoverCardTextSkeleton
                          heading="Plane"
                          paragraph="Set the product direction with projects and
                          initiatives"
                        ></HoverCardTextSkeleton>
                        <HoverCardTextSkeleton
                          heading="Build"
                          paragraph="Make progress with issue tracking and cycle planning"
                        ></HoverCardTextSkeleton>
                      </div>
                      <div className="h-full w-[0.5px] bg-neutral-500/50"></div>
                      <div className="flex h-full w-80 flex-col">
                        <h1 className="mt-3 ml-5 text-[13px] text-stone-500">
                          More
                        </h1>
                        <div className="flex">
                          <div className="flex flex-col">
                            <HoverCardTextSkeleton
                              heading="Moblie"
                              paragraph="Luminer is in your pocket"
                            />
                            <HoverCardTextSkeleton
                              heading="Customer requests"
                              paragraph="Manage user feedback"
                            />{" "}
                            <HoverCardTextSkeleton
                              heading="Insights"
                              paragraph="Realtime analytics"
                            />
                          </div>
                          <div className="flex flex-col-reverse">
                            <HoverCardTextSkeleton
                              heading="Moblie"
                              paragraph="Luminer is in your pocket"
                            />
                            <HoverCardTextSkeleton
                              heading="Customer requests"
                              paragraph="Manage user feedback"
                            />{" "}
                            <HoverCardTextSkeleton
                              heading="Insights"
                              paragraph="Realtime analytics"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-6 flex w-full">
                      <h3 className="pl-10 font-medium text-neutral-700 dark:text-white">
                        New: Card owners{" "}
                        <span className="pl-2 text-stone-400">
                          Permissions for Card-level Settings
                        </span>
                      </h3>
                      <button className="absolute right-7 bottom-[-5px] rounded-xl px-4 py-2 text-[13px] font-medium text-[#828fff] hover:bg-stone-500/40">
                        Get Access
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            {/* //// */}
            {/* //// */}
            <motion.div
              onHoverStart={() => setResources(true)}
              onHoverEnd={() => setResources(false)}
              className="relative inline-block cursor-pointer"
            >
              <div className="text-neutral-800 dark:text-white dark:hover:text-neutral-600">
                Resources
              </div>
              <span className="absolute inline-block h-5 w-13"></span>
              <AnimatePresence>
                {resources && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 5,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                    className="absolute top-7 -right-50 flex h-63 w-150 justify-center rounded-2xl border border-neutral-300 bg-white/95 backdrop-blur-[3px] dark:border-neutral-800 dark:bg-neutral-950/90"
                  >
                    <div className="absolute top-2.5 flex h-57 w-145 overflow-hidden rounded-xl border border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800/88">
                      <div className="flex h-full w-57 flex-col">
                        <h1 className="mt-3 ml-5 text-[13px] text-stone-500">
                          Company
                        </h1>
                        <HoverCardTextSkeleton
                          heading="About"
                          paragraph="Meet the team"
                        ></HoverCardTextSkeleton>
                        <HoverCardTextSkeleton
                          heading="Careers"
                          paragraph="We're hiring"
                        ></HoverCardTextSkeleton>
                      </div>
                      <div className="h-full w-[0.5px] bg-neutral-500/50"></div>
                      <div className="flex h-full w-80 flex-col">
                        <h1 className="mt-3 ml-5 text-[13px] text-stone-500">
                          More
                        </h1>
                        <div className="flex">
                          <div className="flex flex-col">
                            <HoverCardTextSkeleton
                              heading="Moblie"
                              paragraph="Luminer is in your pocket"
                            />
                            <HoverCardTextSkeleton
                              heading="Customer requests"
                              paragraph="Manage user feedback"
                            />{" "}
                            <HoverCardTextSkeleton
                              heading="Insights"
                              paragraph="Realtime analytics"
                            />
                          </div>
                          <div className="flex flex-col-reverse">
                            <HoverCardTextSkeleton
                              heading="Moblie"
                              paragraph="Luminer is in your pocket"
                            />
                            <HoverCardTextSkeleton
                              heading="Customer requests"
                              paragraph="Manage user feedback"
                            />{" "}
                            <HoverCardTextSkeleton
                              heading="Insights"
                              paragraph="Realtime analytics"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            <div className="cursor-pointer text-neutral-800 dark:text-white dark:hover:text-neutral-700">
              pricing
            </div>
            <div className="cursor-pointer text-neutral-800 dark:text-white dark:hover:text-neutral-700">
              customer
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="relative flex cursor-pointer items-center p-4"
            >
              <IconMoon
                className="absolute scale-0 rotate-45 transition-all duration-300 dark:scale-100 dark:rotate-0"
                size={20}
              ></IconMoon>
              <IconSun
                className="absolute scale-100 text-black transition-all duration-300 dark:scale-0 dark:rotate-45"
                size={20}
              ></IconSun>
            </button>
            <button className="cursor-pointer rounded-xl px-4 py-1.5 text-neutral-800 hover:bg-neutral-400/20 dark:text-white">
              Login
            </button>
            <button className="cursor-pointer rounded-xl bg-neutral-600 px-4 py-1.5 text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-white/80">
              sign up
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const HoverCardTextSkeleton = ({
  heading,
  paragraph,
  className,
}: {
  heading: string;
  paragraph: string;
  className?: string;
}) => {
  return (
    <div>
      {" "}
      <div className={cn("mt-4 ml-5", className)}>
        <h2 className="text-[14 px] font-semibold text-neutral-700 dark:text-neutral-100">
          {heading}
        </h2>
        <p className="max-w-40 pt-0.5 text-xs leading-4 text-stone-600 dark:text-stone-400">
          {paragraph}
        </p>
      </div>
    </div>
  );
};
