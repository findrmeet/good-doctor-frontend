import { ChevronDown } from "lucide-react";
import PrimaryBtn from "../Button/PrimaryBtn";
import SectionInfo from "../SectionInfo/SectionInfo";
import SpecialitiesCard from "./SpecialitiesCard";

const Specialities = () => {
  return (
    <section className="space-y-10   bg-linear-to-br from-green-100 via-white to-blue-100">
      <div className="custom-container py-18">
        <SectionInfo
          title="Your Health, Our Priority — 33+ Experts Across Specialties"
          subtitle="Talk to doctors who listen, guide, and care."
        />
        <div className="grid grid-cols-7 ">
          <SpecialitiesCard
            src={"/General Physician.png"}
            name={"General Physician"}
            details="Common illnesses, fever & checkups"
          />
          <SpecialitiesCard
            src={"/General Physician.png"}
            name={"General Physician"}
            details="Common illnesses, fever & checkups"
          />
          <SpecialitiesCard
            src={"/General Physician.png"}
            name={"General Physician"}
            details="Common illnesses, fever & checkups"
          />
          <SpecialitiesCard
            src={"/General Physician.png"}
            name={"General Physician"}
            details="Common illnesses, fever & checkups"
          />
          <SpecialitiesCard
            src={"/General Physician.png"}
            name={"General Physician"}
            details="Common illnesses, fever & checkups"
          />
          <SpecialitiesCard
            src={"/General Physician.png"}
            name={"General Physician"}
            details="Common illnesses, fever & checkups"
          />
          <SpecialitiesCard
            src={"/General Physician.png"}
            name={"General Physician"}
            details="Common illnesses, fever & checkups"
          />
          <SpecialitiesCard
            src={"/General Physician.png"}
            name={"General Physician"}
            details="Common illnesses, fever & checkups"
          />
        </div>
        <div className="flex justify-center">
          <PrimaryBtn className="flex gap-1 items-center py-3  px-4">
            View More Specialties <ChevronDown size={20} />
          </PrimaryBtn>
        </div>
      </div>
    </section>
  );
};

export default Specialities;
