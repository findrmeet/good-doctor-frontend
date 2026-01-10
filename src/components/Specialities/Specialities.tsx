"use client";
import { ChevronDown } from "lucide-react";
import PrimaryBtn from "../Button/PrimaryBtn";
import SectionInfo from "../SectionInfo/SectionInfo";
import SpecialitiesCard from "./SpecialitiesCard";
import specialistData from "../../../public/specilist.data.json";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Specialities = () => {
  const [showAllSpecialities, setShowAllSpecialities] =
    useState<boolean>(false);

  const visibleSpecialists = specialistData.slice(0, 14);
  const hiddenSpecialists = specialistData.slice(14);

  // Animation variants
  const specialistVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  return (
    <section className="space-y-10 bg-linear-to-br from-green-100 via-white to-blue-100 ">
      <div className="custom-container py-18 space-y-10">
        <SectionInfo
          title="Your Health, Our Priority — 33+ Experts Across Specialties"
          subtitle="Talk to doctors who listen, guide, and care."
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 ">
          {/* Always visible specialists */}
          {visibleSpecialists.map((specialist) => (
            <SpecialitiesCard
              key={specialist.id}
              src={specialist.src}
              name={specialist.name}
              details={specialist.details}
            />
          ))}

          {/* Hidden specialists with animation */}
          <AnimatePresence>
            {showAllSpecialities &&
              hiddenSpecialists.map((specialist, index) => (
                <motion.div
                  key={specialist.id}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={specialistVariants}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <SpecialitiesCard
                    src={specialist.src}
                    name={specialist.name}
                    details={specialist.details}
                  />
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        <div className="flex justify-center">
          <PrimaryBtn
            className="flex gap-1 items-center py-3 px-4 transition"
            onClick={() => setShowAllSpecialities((prev) => !prev)}
          >
            {showAllSpecialities
              ? "View Less Specialties"
              : "View More Specialties"}
            <ChevronDown
              size={20}
              className={`transition-transform duration-300 ${
                showAllSpecialities ? "rotate-180" : ""
              }`}
            />
          </PrimaryBtn>
        </div>
      </div>
    </section>
  );
};

export default Specialities;
