import Image from "next/image";

const Marquee = () => {
  return (
    <div className="bg-blue-500 overflow-hidden py-3 z-10">
      <ul className="loop-scrol flex gap-4 w-max text-white">
        <li>Medicines & Supplies</li>
        <Image src={"/line.svg"} width={64} height={1} alt="line" />
        <li>Talk to Doctor</li>
        <Image src={"/line.svg"} width={64} height={1} alt="line" />
        <li>Medicines & Supplies</li>
        <Image src={"/line.svg"} width={64} height={1} alt="line" />
        <li>Lab Testing Services</li>
        <Image src={"/line.svg"} width={64} height={1} alt="line" />
        <li>Home Care Services</li>
        <Image src={"/line.svg"} width={64} height={1} alt="line" />
        <li>Health Care Services</li>
        <Image src={"/line.svg"} width={64} height={1} alt="line" />
        <li>Hospital & Clinics</li>
        <Image src={"/line.svg"} width={64} height={1} alt="line" />
        <li>Lab Testing Services</li>
        <Image src={"/line.svg"} width={64} height={1} alt="line" />
      </ul>
    </div>
  );
};

export default Marquee;
