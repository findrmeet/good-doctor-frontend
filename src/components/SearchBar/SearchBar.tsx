import { MapPin, Search, Stethoscope } from "lucide-react";
import PrimaryBtn from "../Button/PrimaryBtn";

export default function SearchBar() {
  return (
    <div className="flex items-center bg-white rounded-full shadow-md px-2 py-1 max-w-xl w-full">
      <div className="flex items-center flex-1 px-3">
        <Stethoscope className="text-blue-400 mr-2" />
        <input
          className="outline-none w-full text-sm"
          placeholder="Cardiologist"
        />
      </div>

      <div className="w-px h-6 bg-gray-200" />

      <div className="flex items-center flex-1 px-3">
        <MapPin className="text-blue-400 mr-2" />
        <input className="outline-none w-full text-sm" placeholder="Dhaka" />
      </div>

      <PrimaryBtn className="flex gap-2 py-2 px-4 hover:scale-105 transition-transform duration-1000">
        <Search />
        Search
      </PrimaryBtn>
    </div>
  );
}
