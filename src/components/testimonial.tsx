"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "usehooks-ts";
const profiles = [
  {
    photo: "/profile-1.png",
  },
  {
    photo: "/profile-2.png",
  },
  {
    photo: "/profile-3.png",
  },
  {
    photo: "/profile-4.png",
  },
  {
    photo: "/profile-5.png",
  },
  {
    photo: "/profile-6.png",
  },
  {
    photo: "/profile-7.png",
  },
  {
    photo: "/profile-8.png",
  },
  {
    photo: "/profile-9.png",
  },
  {
    photo: "/profile-10.png",
  },
  {
    photo: "/profile-11.png",
  },
  {
    photo: "/profile-12.png",
  },
  {
    photo: "/profile-13.png",
  },
  {
    photo: "/profile-14.png",
  },
  {
    photo: "/profile-15.png",
  },
  {
    photo: "/profile-16.png",
  },
  //   {
  //     photo: "/profile-17.png",
  //   },
  // //   {
  // //     photo: "/profile-1.png",
  // //   },
  // //   {
  // //     photo: "/profile-2.png",
  // //   },
  // //   {
  // //     photo: "/profile-3.png",
  // //   },
];
interface Profiles {
  photo: string;
}

export const Testimonial = () => {
  const isLg = useMediaQuery("(min-width: 1024px)");

  const [shuffledProfile, setProfile] = useState<Profiles[]>([]);
  const [shuffledProfile2, setProfile2] = useState<Profiles[]>([]);
  const [shuffledProfile3, setProfile3] = useState<Profiles[]>([]);
  const [shuffledProfile4, setProfile4] = useState<Profiles[]>([]);
  const [shuffledProfile5, setProfile5] = useState<Profiles[]>([]);

  useEffect(() => {
    const shuffledProfile = [...profiles].sort(() => Math.random() - 0.5);

    const shuffledProfile2 = [...profiles].sort(() => Math.random() - 0.5);

    const shuffledProfile3 = [...profiles].sort(() => Math.random() - 0.5);

    const shuffledProfile4 = [...profiles].sort(() => Math.random() - 0.5);

    const shuffledProfile5 = [...profiles].sort(() => Math.random() - 0.5);
    setProfile(shuffledProfile);
    setProfile2(shuffledProfile2);
    setProfile3(shuffledProfile3);
    setProfile4(shuffledProfile4);
    setProfile5(shuffledProfile5);
  }, []);

  const text_Variant = {
    initial: {
      opacity: 0,
      y: 10,
      scale: 0.89,
      filter: "blur(10px)",
      skew: 30,
    },
    hover: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      scale: 0.9,
      skew: 0,
      transition: {
        duration: 0.3,
      },
    },
  };
  const text_Variant2 = {
    initial: {
      opacity: 1,
    },
  };
  const button_Varient = {
    initial: {
      opacity: 0,
    },
    hover: {
      opacity: 1,
      transiton: {
        duration: 0.3,
      },
    },
  };
  const button_Varient2 = {
    initial: {
      opacity: 1,
    },
  };
  return (
    <div className="relative z-0 flex h-[100vh] w-full flex-col justify-center gap-5 overflow-x-hidden">
      <div className="relative z-50 mt-[10vh] text-center font-medium text-neutral-800 lg:pb-10 lg:text-2xl xl:text-3xl dark:text-white">
        Wanna see what we have achived.
      </div>
      <NotTranslated_Photos
        shuffledProfile={shuffledProfile}
      ></NotTranslated_Photos>
      <Translated_Photos shuffledProfile={shuffledProfile2}></Translated_Photos>
      <NotTranslated_Photos
        shuffledProfile={shuffledProfile3}
      ></NotTranslated_Photos>
      <Translated_Photos shuffledProfile={shuffledProfile4}></Translated_Photos>
      <NotTranslated_Photos
        shuffledProfile={shuffledProfile5}
      ></NotTranslated_Photos>
      <motion.div
        initial="initial"
        whileHover="hover"
        className={cn(
          "absolute inset-x-0 top-10 z-0 flex h-[90vh] flex-col items-center justify-center mask-b-from-90% mask-b-to-100% transition-colors duration-200 ease-in-out lg:mt-9 xl:mt-0",
          "bg-white/0 backdrop-blur-[5px]",
          "dark:bg-black/50",
          "lg:backdrop-blur-[0px] lg:dark:bg-black/0",
          "lg:hover:backdrop-blur-[5px] lg:hover:dark:bg-black/50",
          "lg:hover:bg-white/50",
        )}
      >
        <motion.div
          className={cn(
            "flex flex-col text-center font-semibold tracking-tight text-neutral-800",
            "text-2xl md:text-5xl md:leading-13 xl:text-7xl xl:leading-20 dark:text-white",
          )}
          variants={isLg ? text_Variant : text_Variant2}
        >
          We have helped 1000 of peoples,
          <br /> reclaim control over their spendings
        </motion.div>
        <motion.div
          variants={isLg ? button_Varient : button_Varient2}
          className="mt-5 flex gap-4"
        >
          <motion.button
            initial={{
              scale: 1,
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                duration: 0.3,
              },
            }}
            className={cn(
              "rounded-2xl bg-neutral-800 tracking-wide text-white dark:bg-white dark:text-black",
              "cursor-pointer px-3 py-2 text-[12px]",
              "md:px-4 md:py-2 md:text-sm",
            )}
          >
            connect now
          </motion.button>
          <motion.button
            initial={{
              scale: 1,
            }}
            whileTap={{
              scale: 0.9,
              transition: {
                duration: 0.3,
              },
            }}
            className="cursor-pointer text-sm tracking-wide text-neutral-800 md:text-lg dark:text-white"
          >
            Email us!
          </motion.button>
        </motion.div>
      </motion.div>
      <div className="absolute right-0 bottom-20 -z-10 blur-[100px]">
        <div
          className={cn(
            "hidden h-50 w-80 bg-blue-400/40 bg-linear-to-b md:block dark:from-transparent dark:to-rose-400",
            "[clip-path:_polygon(23%_0,_69%_29%,_97%_44%,_100%_80%,_80%_100%,_20%_100%,_9%_60%,_6%_41%)]",
          )}
        ></div>
      </div>
      <div className="absolute bottom-20 left-0 -z-10 rotate-y-180 blur-[100px]">
        <div
          className={cn(
            "hidden h-50 w-80 bg-pink-400/45 md:block dark:bg-indigo-300",
            "[clip-path:_polygon(23%_0,_69%_29%,_97%_44%,_100%_80%,_80%_100%,_20%_100%,_9%_60%,_6%_41%)]",
          )}
        ></div>{" "}
      </div>
      <div className="h-20 w-full"></div>
    </div>
  );
};

const NotTranslated_Photos = ({
  shuffledProfile,
}: {
  shuffledProfile: Profiles[];
}) => {
  return (
    <div className="pointer-events-none flex gap-0.5 md:h-20 md:gap-2 lg:gap-4 xl:gap-8">
      {shuffledProfile.map((data, idx) => {
        return (
          <div
            className="size-11 rounded-full md:size-11 lg:size-13 xl:size-15"
            key={idx}
          >
            <Image
              src={data.photo}
              alt=""
              height={60}
              width={60}
              className="h-full w-full rounded-full object-cover"
            ></Image>
          </div>
        );
      })}
    </div>
  );
};

const Translated_Photos = ({
  shuffledProfile,
}: {
  shuffledProfile: Profiles[];
}) => {
  return (
    <div className="pointer-events-none flex gap-0.5 md:h-20 md:translate-x-10 md:gap-2 lg:gap-4 xl:gap-8">
      {shuffledProfile.map((data, idx) => {
        return (
          <div
            className="size-11 rounded-full md:size-11 lg:size-13 xl:size-15"
            key={idx}
          >
            <Image
              src={data.photo}
              alt=""
              height={60}
              width={60}
              className="h-full w-full rounded-full object-cover"
            ></Image>
          </div>
        );
      })}
    </div>
  );
};
