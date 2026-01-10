import AllDoctors from "@/components/AllDoctors/AllDoctors";
import Hero from "@/components/Hero/Hero";
import Marquee from "@/components/Marquee/Marquee";
import Specialities from "@/components/Specialities/Specialities";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <AllDoctors />
      <Specialities />
    </>
  );
}
