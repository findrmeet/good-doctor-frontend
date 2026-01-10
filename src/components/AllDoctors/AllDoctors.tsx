"use client";
import DoctorCard from "./DoctorCard";
import OutlineBtn from "../Button/OutlineBtn";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionInfo from "../SectionInfo/SectionInfo";

type Doctor = {
  id: number;
  name: string;
  image: string;
  qualifications: string;
  specialty: string;
  hospital: string;
  reviewsCount: number;
  experienceYears: number;
  fee: number;
};

const AllDoctors = () => {
  const [viewAllDoc, setViewAllDoc] = useState<boolean>(false);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const toggleViewAll = () => setViewAllDoc(!viewAllDoc);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await fetch("/doctors.data.json");
        const data = await res.json();
        setDoctors(data);
      } catch (error) {
        console.error("Failed to fetch doctors:", error);
      }
    };

    fetchDoctors();
  }, []);

  const visibleDoctors = doctors.slice(0, 3);
  const hiddenDoctors = doctors.slice(3);

  // Animation variants for hidden doctors
  const doctorVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  return (
    <section className="space-y-10 custom-container py-18">
      {/* Section header */}
      <div className="space-y-2">
        <SectionInfo
          title="Book Our Popular Specialists"
          subtitle="Most trusted doctors based on patient reviews and success rates"
        />
      </div>

      {/* Doctors grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {/* Always visible doctors */}
        {visibleDoctors.map((doctor, index) => (
          <DoctorCard key={doctor.id ?? index} {...doctor} />
        ))}

        {/* Hidden doctors with animation */}
        <AnimatePresence>
          {viewAllDoc &&
            hiddenDoctors.map((doctor, index) => (
              <motion.div
                key={doctor.id ?? `hidden-${index}`}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={doctorVariants}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <DoctorCard {...doctor} />
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      {/* Toggle button */}
      <div className="flex justify-center">
        <OutlineBtn className="flex gap-1 p-3 " onClick={toggleViewAll}>
          View All Doctor
          <ChevronDown
            size={18}
            className={` transition duration-300 ${
              viewAllDoc ? "rotate-180" : ""
            }`}
          />
        </OutlineBtn>
      </div>
    </section>
  );
};

export default AllDoctors;
