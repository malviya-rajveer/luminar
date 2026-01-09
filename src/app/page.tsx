import { Grid } from "@/components/grid";
import { Hero } from "@/components/hero";
import { Testimonial } from "@/components/testimonial";

export default function Home() {
  return (
    <div className="font-inter h-full bg-white dark:bg-black">
      <Hero></Hero>
      <Grid></Grid>
      <Testimonial></Testimonial>
    </div>
  );
}
