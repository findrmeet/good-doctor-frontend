"use client";
import DoctorCard from "./DoctorCard";
import OutlineBtn from "../Button/OutlineBtn";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

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

  return (
    <section className="space-y-10 custom-container py-18">
      {/* all doctors section details */}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold"> Book Our Popular Specialists</h2>
        <p className="font-medium text-gray-500">
          Most trusted doctors based on patient reviews and success rates
        </p>
      </div>

      {/* doctors grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {/* Always visible */}
        {visibleDoctors.map((doctor, index) => (
          <DoctorCard key={doctor.id ?? index} {...doctor} />
        ))}

        {/* Conditionally visible */}
        {viewAllDoc &&
          hiddenDoctors.map((doctor, index) => (
            <DoctorCard key={doctor.id ?? `hidden-${index}`} {...doctor} />
          ))}
      </div>

      <div className="flex justify-center">
        <OutlineBtn className="flex gap-1 p-3 group" onClick={toggleViewAll}>
          View All Doctor
          <ChevronDown
            size={18}
            className="group-hover:translate-y-0.5 transition duration-300"
          />
        </OutlineBtn>
      </div>
    </section>
  );
};

export default AllDoctors;
