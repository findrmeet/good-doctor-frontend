import { Building2, ChevronRight, Star } from "lucide-react";
import SecondaryBtn from "../Button/SecondaryBtn";
import Image from "next/image";

type DoctorCardProps = {
  name: string;
  image: string;
  qualifications: string;
  specialty: string;
  hospital: string;
  experienceYears: number;
  fee: number;
  reviewsCount: number;
};

const DoctorCard = ({
  image,
  name,
  qualifications,
  specialty,
  hospital,
  experienceYears,
  fee,
  reviewsCount,
}: DoctorCardProps) => {
  return (
    <div className="border p-4 rounded-2xl border-gray-300 flex flex-col gap-3">
      <div className="flex gap-4">
        <Image
          src={image}
          width={120}
          height={164}
          alt={name}
          className="rounded-xl"
        />

        <div className="flex flex-col justify-between text-xs">
          <h2 className="font-bold text-2xl">{name}</h2>
          <p>{qualifications}</p>
          <div>
            <span className="text-[#0070DF] bg-blue-100 rounded-full px-2 py-1.5">
              {specialty}
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <Building2 size={16} color="#0070DF" />
            {hospital}
          </div>
          <div className="text-lg font-semibold flex gap-2">
            <span className="flex -space-x-1">
              <Star size={16} fill="#FCD34D" stroke="none" />
              <Star fill="#FCD34D" stroke="none" />
              <Star size={16} fill="#FCD34D" stroke="none" />
            </span>
            4.8{" "}
            <span className="text-gray-400 font-normal">({reviewsCount})</span>
          </div>
        </div>
      </div>
      <div className="pt-2 border-t border-blue-300 border-dashed flex">
        <div className="flex flex-col gap-1 flex-1">
          <span className="font-bold">{experienceYears}+ Years</span>
          <span className="text-[#8A99AF]">of Professional Experience</span>
        </div>
        <div className="flex justify-between  flex-1 items-end">
          <h1 className="text-[#0070DF] font-bold text-xl pb-1">৳ {fee}</h1>
          <div>
            <SecondaryBtn className="flex gap-1 py-2 px-4 items-center group text-sm">
              Doctor Details{" "}
              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition duration-400"
              />
            </SecondaryBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
