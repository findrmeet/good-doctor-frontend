import Image, { StaticImageData } from "next/image";

type SpecialitiesCardProps = {
  src: string | StaticImageData;
  name: string;
  details: string;
};

const SpecialitiesCard: React.FC<SpecialitiesCardProps> = ({
  src,
  name,
  details,
}) => {
  return (
    <div className=" flex justify-center flex-col gap-2 p-2 items-center">
      <Image src={src} height={72} width={72} alt={name} />
      <h2 className="font-semibold text-center">{name}</h2>
      <p className="text-xs font-medium text-center">{details}</p>
    </div>
  );
};

export default SpecialitiesCard;
