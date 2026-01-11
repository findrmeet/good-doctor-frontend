import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export const FooterLogo = () => {
  return (
    <div className="max-w-xs space-y-4">
      <div className="text-2xl font-thin">
        <span className="text-blue-500 font-bold">GOOD</span>DOCTOR
      </div>
      <p className="text-lg font-semibold">Book Doctors. Anytime. Anywhere.</p>
      <p className="text-sm">
        We’re a digital healthcare platform built to make quality medical care
        more accessible, affordable, and convenient — empowering you to consult
        with trusted doctors anytime, from anywhere, with complete privacy and
        care.
      </p>

      <div className="flex  gap-4 pt-4">
        {/* Facebook  */}
        <span className="bg-[#171717] rounded-full p-3 text-white hover:bg-[#0070DF] cursor-pointer transition duration-300 border-slate-800 border">
          <Facebook size={20} />
        </span>

        {/* Instagram  */}
        <span className="bg-[#171717] rounded-full p-3 text-white hover:bg-[#0070DF] cursor-pointer transition duration-300 border-slate-800 border">
          <Instagram size={20} />
        </span>

        {/* LinkedIn  */}
        <span className="bg-[#171717] rounded-full p-3 text-white hover:bg-[#0070DF] cursor-pointer transition duration-300 border-slate-800 border">
          <Linkedin size={20} />
        </span>

        {/* X   */}
        <span className="bg-[#171717] rounded-full p-3 text-white hover:bg-[#0070DF] cursor-pointer transition duration-300 border-slate-800 border">
          <Twitter size={20} />
        </span>

        {/* YouTube  */}
        <span className="bg-[#171717] rounded-full p-3 text-white hover:bg-[#0070DF] cursor-pointer transition duration-300 border-slate-800 border">
          <Youtube size={20} />
        </span>
      </div>
    </div>
  );
};
