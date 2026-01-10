"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const items = [
  "Medicines & Supplies",
  "Talk to Doctor",
  "Lab Testing Services",
  "Home Care Services",
  "Health Care Services",
  "Hospital & Clinics",
  "Dental Care Services",
  "Physiotherapy",
  "Vaccination Programs",
  "Nutrition & Diet Consultation",
  "Mental Health Support",
  "Ambulance Services",
  "Eye Care & Optometry",
  "Hearing & Audiology Services",
  "Chiropractic Services",
  "Wellness Programs",
  "Home Laboratory Testing",
  "Telemedicine Consultations",
  "Cardiology Services",
  "Pediatrics Care",
  "Geriatric Services",
];

const Marquee = () => {
  const renderItems = () =>
    items.flatMap((item, idx) => [
      <li key={`item-${idx}`} className="flex items-center">
        {item}
      </li>,
      idx !== items.length - 1 && (
        <Image
          key={`line-${idx}`}
          src="/line.svg"
          width={64}
          height={1}
          alt="line"
          className="mx-4"
        />
      ),
    ]);

  return (
    <div className="bg-blue-500 overflow-hidden py-3 z-10">
      <motion.ul
        className="flex whitespace-nowrap text-white"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 50, // adjust speed
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* Duplicate content for seamless scroll */}
        <>{renderItems()}</>
        <>{renderItems()}</>
      </motion.ul>
    </div>
  );
};

export default Marquee;
