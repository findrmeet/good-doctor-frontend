"use client";

import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PrimaryBtn from "../Button/PrimaryBtn";
import SectionInfo from "../SectionInfo/SectionInfo";
import SymptomCard from "./SymptomCard";
import symptoms from "../../../public/symptoms.data.json";
import { useState } from "react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

const ChooseBySymptom = () => {
  const [viewAll, setViewAll] = useState(false);

  const visibleSymptoms = symptoms.slice(0, 6);
  const hiddenSymptoms = symptoms.slice(6);

  return (
    <section className="space-y-10 custom-container py-18">
      <SectionInfo
        title="Match with the Right Specialist for Your Problem"
        subtitle="Browse & Consult from Our Full Doctor Panel."
      />

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Always visible */}
        {visibleSymptoms.map((item) => (
          <motion.div key={item.id} variants={cardVariants}>
            <SymptomCard {...item} />
          </motion.div>
        ))}

        {/* Animated show / hide */}
        <AnimatePresence>
          {viewAll &&
            hiddenSymptoms.map((item) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <SymptomCard {...item} />
              </motion.div>
            ))}
        </AnimatePresence>
      </motion.div>

      <div className="flex justify-center">
        <PrimaryBtn
          className="flex gap-1 items-center py-3 px-4"
          onClick={() => setViewAll((prev) => !prev)}
        >
          {viewAll ? "View Less Symptoms" : "View More Symptoms"}
          <motion.span
            animate={{ rotate: viewAll ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={20} />
          </motion.span>
        </PrimaryBtn>
      </div>
    </section>
  );
};

export default ChooseBySymptom;
