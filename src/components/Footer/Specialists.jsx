import { ArrowRight } from "lucide-react";

export const Specialists = () => {
  return (
    <div>
      <h2 className="text-xl border-b pb-1 border-blue-500">
        Popular Specialties
      </h2>

      <div className="mt-4 space-y-2 text-sm font-light">
        <div className="hover:translate-x-1 transition cursor-pointer hover:text-blue-500">
          <ArrowRight size={20} className="inline mr-1" /> General Physician
        </div>
        <div className="hover:translate-x-1 transition cursor-pointer hover:text-blue-500">
          <ArrowRight size={20} className="inline mr-1" /> Gynecology &
          Pregnancy
        </div>
        <div className="hover:translate-x-1 transition cursor-pointer hover:text-blue-500">
          <ArrowRight size={20} className="inline mr-1" /> Pediatrics
        </div>
        <div className="hover:translate-x-1 transition cursor-pointer hover:text-blue-500">
          <ArrowRight size={20} className="inline mr-1" /> Dermatology (Skin &
          Hair)
        </div>
        <div className="hover:translate-x-1 transition cursor-pointer hover:text-blue-500">
          <ArrowRight size={20} className="inline mr-1" /> Psychiatry & Mental
          Health
        </div>
        <div className="hover:translate-x-1 transition cursor-pointer hover:text-blue-500">
          <ArrowRight size={20} className="inline mr-1" />
          Nutrition & Diet
        </div>
        <div className="hover:translate-x-1 transition cursor-pointer hover:text-blue-500">
          <ArrowRight size={20} className="inline mr-1" /> Cardiology
        </div>
        <div className="hover:translate-x-1 transition cursor-pointer hover:text-blue-500">
          <ArrowRight size={20} className="inline mr-1" /> Dentistry
        </div>
      </div>
    </div>
  );
};
