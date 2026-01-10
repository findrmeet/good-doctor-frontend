"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Marquee = () => {
  return (
    <div className="bg-blue-500 overflow-hidden py-3 z-10">
      <motion.ul
        className="flex gap-4 whitespace-nowrap text-white"
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          duration: 100, // adjust speed
          ease: "linear",
          repeat: Infinity, // infinite loop
        }}
      >
        <li>Medicines & Supplies</li>
        <Image src="/line.svg" width={64} height={1} alt="line" />
        <li>Talk to Doctor</li>
        <Image src="/line.svg" width={64} height={1} alt="line" />
        <li>Lab Testing Services</li>
        <Image src="/line.svg" width={64} height={1} alt="line" />
        <li>Home Care Services</li>
        <Image src="/line.svg" width={64} height={1} alt="line" />
        <li>Health Care Services</li>
        <Image src="/line.svg" width={64} height={1} alt="line" />
        <li>Hospital & Clinics</li>
        <Image src="/line.svg" width={64} height={1} alt="line" />
        <li>Dental Care Services</li>
        <Image src="/line.svg" width={64} height={1} alt="line" />
        <li>Physiotherapy</li>
        <Image src="/line.svg" width={64} height={1} alt="line" />
        <li>Vaccination Programs</li>
        <Image src="/line.svg" width={64} height={1} alt="line" />
        <li>Nutrition & Diet Consultation</li>
        <Image src="/line.svg" width={64} height={1} alt="line" />
        <li>Mental Health Support</li>
        <Image src="/line.svg" width={64} height={1} alt="line" />
        <li>Ambulance Services</li>
        <Image src="/line.svg" width={64} height={1} alt="line" />
        <li>Eye Care & Optometry</li>
        <Image src="/line.svg" width={64} height={1} alt="line" />
        <li>Hearing & Audiology Services</li>
        <Image src="/line.svg" width={64} height={1} alt="line" />
        <li>Chiropractic Services</li>
        <Image src="/line.svg" width={64} height={1} alt="line" />
        <li>Wellness Programs</li>
        <Image src="/line.svg" width={64} height={1} alt="line" />
        <li>Home Laboratory Testing</li>
        <Image src="/line.svg" width={64} height={1} alt="line" />
        <li>Telemedicine Consultations</li>
        <Image src="/line.svg" width={64} height={1} alt="line" />
        <li>Cardiology Services</li>
        <Image src="/line.svg" width={64} height={1} alt="line" />
        <li>Pediatrics Care</li>
        <Image src="/line.svg" width={64} height={1} alt="line" />
        <li>Geriatric Services</li>
        <Image src="/line.svg" width={64} height={1} alt="line" />
      </motion.ul>
    </div>
  );
};

export default Marquee;
