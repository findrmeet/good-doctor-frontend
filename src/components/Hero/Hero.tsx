import SearchBar from "../SearchBar/SearchBar";
import HeroImage from "./HeroImage";
import HeroSubtitle from "./HeroSubtitle";
import HeroTitle from "./HeroTitle";

const Hero = () => {
  return (
    <div className="h-200 flex justify-center bg-[url('/hero-bg.png')] bg-cover bg-center">
      <img
        className="absolute mix-blend-overlay h-200"
        src="./hero-bg-overlay.png"
      />
      <div className="flex flex-col items-center gap-8 w-2xl mt-8 relative">
        <HeroTitle />
        <HeroSubtitle />
        <SearchBar />
        <HeroImage />
      </div>
    </div>
  );
};

export default Hero;
