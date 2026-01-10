import { ChevronDown } from "lucide-react";
import PrimaryBtn from "../Button/PrimaryBtn";
import SectionInfo from "../SectionInfo/SectionInfo";
import SpecialitiesCard from "./SpecialitiesCard";
import specialistData from "../../../public/specilist.data.json";

const Specialities = () => {
  return (
    <section className="space-y-10 bg-gradient-to-br from-green-100 via-white to-blue-100">
      <div className="custom-container py-18 space-y-10">
        <SectionInfo
          title="Your Health, Our Priority — 33+ Experts Across Specialties"
          subtitle="Talk to doctors who listen, guide, and care."
        />

        {/* Use border-separate and negative margins */}
        <div className="bg-white">
          <div className="grid grid-cols-7">
            {specialistData.map((specialist) => (
              <SpecialitiesCard
                key={specialist.id}
                src={specialist.src}
                name={specialist.name}
                details={specialist.details}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <PrimaryBtn className="flex gap-1 items-center py-3 px-4">
            View More Specialties <ChevronDown size={20} />
          </PrimaryBtn>
        </div>
      </div>
    </section>
  );
};

export default Specialities;
