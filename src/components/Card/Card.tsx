import { Building2, ChevronRight, Star } from "lucide-react";
import SecondaryBtn from "../Button/SecondaryBtn";
import Image from "next/image";

const Card = () => {
  return (
    <div className="border p-4 rounded-2xl w-140 border-gray-300 flex flex-col gap-3">
      <div className="flex gap-4">
        <Image
          src={"/doc-img.png"}
          width={120}
          height={164}
          alt="doctor image"
          className="rounded-xl"
        />
        <div className="flex flex-col justify-between text-sm">
          <h2 className="font-bold text-2xl">Dr. Jasmin Ara Zaman</h2>
          <p>MBBS, Diploma (Gynae & Obs), FCPS (Gynae & Obs)</p>
          <div>
            <span className="text-[#0070DF] bg-blue-100 rounded-full px-2 py-1.5">
              Gynaecologist & Obstetrician{" "}
            </span>
          </div>
          <div className="flex gap-2">
            <Building2 color="#0070DF" /> Popular Hospital & Diagnostics, Bogura
          </div>
          <div className="text-lg font-semibold flex gap-2">
            <span className="flex -space-x-1">
              <Star size={16} fill="#FCD34D" stroke="none" />
              <Star fill="#FCD34D" stroke="none" />
              <Star size={16} fill="#FCD34D" stroke="none" />
            </span>
            4.8 <span className="text-gray-400 font-normal">(125)</span>
          </div>
        </div>
      </div>
      <div className="pt-2 border-t border-blue-300 border-dashed flex">
        <div className="flex flex-col gap-1 flex-1">
          <span className="font-bold"> 5+ Years</span>
          <span className="text-[#8A99AF]">of Professional Experience</span>
        </div>
        <div className="flex justify-between  flex-1 items-end">
          <h1 className="text-[#0070DF] font-bold text-xl">৳ 560</h1>
          <div>
            <SecondaryBtn className="flex gap-1 py-2 px-4 items-center">
              Doctor Details <ChevronRight />
            </SecondaryBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
