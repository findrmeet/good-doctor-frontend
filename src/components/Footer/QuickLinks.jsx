import { ArrowRight } from "lucide-react";

export const QuickLinks = () => {
  return (
    <div>
      <h2 className="text-xl border-b pb-1 border-blue-500">Quick Links</h2>

      <div className="mt-4 space-y-2 text-sm font-light">
        <div className="hover:translate-x-1 transition cursor-pointer hover:text-blue-500">
          <ArrowRight size={20} className="inline mr-1" /> Home
        </div>
        <div className="hover:translate-x-1 transition cursor-pointer hover:text-blue-500">
          <ArrowRight size={20} className="inline mr-1" /> Find Doctors
        </div>
        <div className="hover:translate-x-1 transition cursor-pointer hover:text-blue-500">
          <ArrowRight size={20} className="inline mr-1" /> Book Appointment
        </div>
        <div className="hover:translate-x-1 transition cursor-pointer hover:text-blue-500">
          <ArrowRight size={20} className="inline mr-1" /> Download App
        </div>
        <div className="hover:translate-x-1 transition cursor-pointer hover:text-blue-500">
          <ArrowRight size={20} className="inline mr-1" /> Blog / Health Tips
        </div>
        <div className="hover:translate-x-1 transition cursor-pointer hover:text-blue-500">
          <ArrowRight size={20} className="inline mr-1" /> Contact Us
        </div>
        <div className="hover:translate-x-1 transition cursor-pointer hover:text-blue-500">
          <ArrowRight size={20} className="inline mr-1" /> Help / FAQs
        </div>
      </div>
    </div>
  );
};
