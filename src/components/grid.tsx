import { cn } from "@/lib/utils";
import { Bar_Chart } from "./ui/barChart";
import { Controlled_spending } from "./ui/controled-spending";
import { Encrypted_Text } from "./ui/encrypt-text";
import { SkewedCard } from "./ui/skewed-component";
import { Auto_Storing } from "./ui/autoStoring";

export const Grid = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Header></Header>
      <div
        className={cn(
          "relative mt-8 mb-[28vh] grid max-h-full w-70 grid-cols-1 gap-3 md:w-[750px] md:grid-cols-3 md:grid-rows-2 md:gap-3 lg:w-4xl",
        )}
      >
        <Grid_skeleton className="group min-h-60">
          <Grid_Headings
            heading="Worry not!!"
            paragraph="Every thing is encrypted"
          ></Grid_Headings>
          <Encrypted_Text></Encrypted_Text>
          <div
            className={cn(
              "absolute inset-10 -z-10 w-full opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-25",
              "[background-size:10px_10px]",
              "[background-image:linear-gradient(to_right,#e4e4e7_1px,tranparent_1px),linear-gradient(to_right,#e4e4e7_1px,tranparent_1px)]",
              "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
            )}
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent 10%,black,transparent 80%)",
            }}
          ></div>
          <div
            className={cn(
              "absolute inset-0 -z-10 w-full opacity-20 transition-all duration-500 ease-in-out group-hover:opacity-100",
              "[background-size:10px_10px]",
              "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
              "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
            )}
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent 10%,black,transparent 85%)",
            }}
          ></div>
        </Grid_skeleton>
        <Grid_skeleton className="group row-span-2 min-h-120 grayscale-100 hover:grayscale-0">
          <div
            className={cn(
              "absolute inset-0 z-10 opacity-5 transition-opacity duration-500 ease-in-out group-hover:opacity-20 dark:opacity-20 dark:group-hover:opacity-25",
              "[mask-image:linear-gradient(to_right,black_0.5px,transparent_1px),linear-gradient(to_top,black_0.7px,transparent_1px)]",
              "[mask-size:11px_11px]",
              "[mask-repeat:repeat]",
              "bg-linear-to-br from-red-500 to-blue-500",
            )}
          ></div>
          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-white/70 [mask-image:radial-gradient(ellipse,transparent_0%,black_85%)] dark:bg-neutral-950"></div>
          <div className="absolute inset-0 z-30">
            <div className="absolute inset-0 bg-linear-140 mask-b-from-0% mask-b-to-90% transition-colors duration-225 ease-in-out dark:from-white/10"></div>
            <Grid_Headings
              heading="Control unnecessary spending"
              paragraph="By AI suggested dicisions"
            />
            <Controlled_spending></Controlled_spending>
          </div>
        </Grid_skeleton>

        <Grid_skeleton className="group min-h-60">
          <Grid_Headings
            heading="Celebrate every small growth"
            paragraph="With our live tracking charts"
          />

          <div className="absolute inset-0 flex flex-col grayscale-100 transition-all duration-300 ease-in-out group-hover:grayscale-0">
            <Bar_Chart></Bar_Chart>
            <div className="mx-auto grid w-61 grid-cols-5 gap-0.5 pb-3 pl-1 text-[12px] text-neutral-700 dark:text-white">
              <h6>week-1</h6>
              <h6>week-2</h6>
              <h6>week-3</h6>
              <h6>week-4</h6>
              <h6>week-5</h6>
            </div>
          </div>
          <div
            className={cn(
              "absolute inset-0 -z-10 w-full opacity-20 transition-all duration-500 ease-in-out group-hover:opacity-100",
              "[background-size:10px_10px]",
              "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
              "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
            )}
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent 10%,black,transparent 80%)",
            }}
          ></div>
        </Grid_skeleton>
        <Grid_skeleton className="z-0 min-h-60">
          <div className="absolute inset-0 z-20">
            <SkewedCard></SkewedCard>
            <div
              className={cn(
                "absolute inset-0 -z-10 w-full opacity-20 transition-all duration-500 ease-in-out group-hover:opacity-100",
                "[background-size:10px_10px]",
                "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
              )}
              style={{
                maskImage:
                  "linear-gradient(to bottom, transparent 10%,black,transparent 80%)",
              }}
            ></div>
          </div>
          <div className="absolute z-10">
            <Grid_Headings
              className="mt-44 w-60"
              heading="Simplicity"
              paragraph="Our work is to make it simple for you"
            ></Grid_Headings>
          </div>
        </Grid_skeleton>
        <Grid_skeleton className="group z-0 min-h-60 grayscale-100 hover:grayscale-0">
          <div className="absolute z-10 h-full w-full">
            <Auto_Storing></Auto_Storing>
          </div>
          <div
            className={cn(
              "absolute inset-0 -z-10 w-full opacity-20 transition-all duration-500 ease-in-out group-hover:opacity-50",
              "[background-size:10px_10px]",
              "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
              "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
            )}
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent 10%,black,transparent 80%)",
            }}
          ></div>
          <Grid_Headings
            className="mt-44"
            heading="Automated storing"
            paragraph="automate the storing of trasactions"
          ></Grid_Headings>
        </Grid_skeleton>
      </div>
    </div>
  );
};

const Grid_skeleton = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative inset-0 z-0 overflow-hidden rounded-2xl bg-neutral-50/40 dark:bg-neutral-950",
        "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04),0px_0px_2px_#bdbdbd]",
        className,
      )}
    >
      <div className="absolute inset-0 bg-linear-140 mask-b-from-0% mask-b-to-90% transition-colors duration-225 ease-in-out dark:from-white/10"></div>

      {children}
    </div>
  );
};

const Header = () => {
  return (
    <div className="mt-[9vh] mb-5 max-w-xl text-center">
      <h2 className="bg-linear-to-b from-stone-900 to-neutral-500 bg-clip-text pb-1 text-2xl font-semibold text-transparent md:text-[40px] dark:text-white">
        Small steps to{" "}
        <a className="bg-linear-120 from-rose-400 via-fuchsia-500 to-blue-400 bg-clip-text text-transparent">
          freedom
        </a>
      </h2>
      <p className="w-85 text-[13px] text-neutral-600 md:w-full md:text-[16px] dark:text-neutral-400">
        Smart expense management helps you track spending, control costs, and
        make confident financial decisions — isn't it great.
      </p>
    </div>
  );
};

const Grid_Headings = ({
  heading,
  paragraph,
  className,
}: {
  heading: string;
  paragraph: string;
  className?: string;
}) => {
  return (
    <div className={cn("mt-7 ml-6", className)}>
      <h3 className="relative z-0 text-[13.5px] font-medium text-neutral-800 dark:text-white">
        {heading}
      </h3>
      <p className="mt-1 text-[12px] text-neutral-600 dark:text-neutral-300">
        {paragraph}
      </p>
    </div>
  );
};
