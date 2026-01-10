import { ChevronDown } from "lucide-react";
import PrimaryBtn from "../Button/PrimaryBtn";
import SectionInfo from "../SectionInfo/SectionInfo";
import SymptomCard from "./SymptomCard";
import symptoms from "../../../public/symptoms.data.json";
const ChooseBySymptom = () => {
  return (
    <section className="space-y-10 custom-container py-18">
      <SectionInfo
        title="Match with the Right Specialist for Your Problem"
        subtitle="Browse & Consult from Our Full Doctor Panel."
      />
      <div className="grid grid-cols-6 gap-6">
        {symptoms.map((item) => (
          <SymptomCard
            key={item.id}
            imgSrc={item.imgSrc}
            category={item.category}
            common_issues={item.common_issues}
            specialist={item.specialist}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <PrimaryBtn className="flex gap-1 items-center py-3 px-4">
          View More Symptoms
          <ChevronDown size={20} />
        </PrimaryBtn>
      </div>
    </section>
  );
};

export default ChooseBySymptom;
