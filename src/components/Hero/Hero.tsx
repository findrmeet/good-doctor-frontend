import SearchBar from "../SearchBar/SearchBar";
import HeroImage from "./HeroImage";
import HeroSubtitle from "./HeroSubtitle";
import HeroTitle from "./HeroTitle";

const Hero = () => {
  return (
    <div className="relative h-150 sm:h-200 flex justify-center items-center sm:items-start bg-[url('/hero-bg.png')] bg-cover bg-center overflow-hidden ">
      {/* Overlay image behaving like background */}
      <img
        src="/hero-bg-overlay.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay pointer-events-none"
      />

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center gap-8 w-2xl mt-8 px-4">
        <HeroTitle />
        <HeroSubtitle />
        <SearchBar />
        <HeroImage />
      </div>
    </div>
  );
};

export default Hero;
