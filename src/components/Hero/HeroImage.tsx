import Image from "next/image";

const HeroImage = () => {
  return (
    <Image src={"/doctor.png"} height={417} width={540} alt="doctor image" />
  );
};

export default HeroImage;
