import { FooterLogo } from "./FooterLogo";
import { QuickLinks } from "./QuickLinks";
import { Specialists } from "./Specialists";
import { Services } from "./Services";
import { DownloadApp } from "./DownloadApp";
import { Circle } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black text-white ">
      <div className="custom-container justify-between flex gap-8 py-8 flex-col xl:flex-row sm px-6 md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:flex">
        {/* logo  */}
        <FooterLogo />

        {/* quick link  */}
        <QuickLinks />

        {/* popular specialist  */}
        <Specialists />

        {/* our services  */}
        <Services />

        {/* download app  */}
        <DownloadApp />
      </div>

      <div className="flex flex-col lg:flex-row text-center justify-between custom-container text-sm py-4 px-6 border-t border-gray-800 text-gray-300 gap-2 items-center">
        <p>Copyright © 2025 GoodDoctor. All Right Reserved </p>

        <div className="flex gap-2 flex-wrap items-center justify-center">
          <Link href={"#"} className="hover:text-blue-500">
            Terms & Conditions
          </Link>
          <Circle
            size={8}
            fill="oklch(62.3% 0.214 259.815)"
            stroke="oklch(62.3% 0.214 259.815)"
          />
          <Link href={"#"} className="hover:text-blue-500">
            Privacy Policy
          </Link>
          <Circle
            size={8}
            fill="oklch(62.3% 0.214 259.815)"
            stroke="oklch(62.3% 0.214 259.815)"
          />
          <Link href={"#"} className="hover:text-blue-500">
            Refund Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};
