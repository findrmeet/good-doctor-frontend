import { ArrowRight } from "lucide-react";

export const Services = () => {
  return (
    <div>
      <h2 className="text-xl border-b pb-1 border-blue-500">Our Services</h2>

      <div className="mt-4 space-y-2 text-sm font-light">
        <div className="hover:translate-x-1 transition cursor-pointer hover:text-blue-500">
          <ArrowRight size={20} className="inline mr-1" /> Online Video
          Consultation
        </div>
        <div className="hover:translate-x-1 transition cursor-pointer hover:text-blue-500">
          <ArrowRight size={20} className="inline mr-1" /> In-Person
          Appointments
        </div>
        <div className="hover:translate-x-1 transition cursor-pointer hover:text-blue-500">
          <ArrowRight size={20} className="inline mr-1" /> Prescription
          Management
        </div>
        <div className="hover:translate-x-1 transition cursor-pointer hover:text-blue-500">
          <ArrowRight size={20} className="inline mr-1" /> Health Tips & Blogs
        </div>
        <div className="hover:translate-x-1 transition cursor-pointer hover:text-blue-500">
          <ArrowRight size={20} className="inline mr-1" /> Specialist Booking
        </div>
        <div className="hover:translate-x-1 transition cursor-pointer hover:text-blue-500">
          <ArrowRight size={20} className="inline mr-1" />
          Emergency Support
        </div>
      </div>
    </div>
  );
};
