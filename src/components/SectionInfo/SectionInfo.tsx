type SectionInfoProps = {
  title: string;
  subtitle: string;
};

const SectionInfo: React.FC<SectionInfoProps> = ({ title, subtitle }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="font-medium text-gray-500">{subtitle}</p>
    </div>
  );
};

export default SectionInfo;
