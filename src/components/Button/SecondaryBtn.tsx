type SecondaryBtnProps = {
  className?: string;
  children: React.ReactNode;
};

const SecondaryBtn: React.FC<SecondaryBtnProps> = ({
  className = "",
  children,
}) => {
  return (
    <button
      className={`cursor-pointer bg-[#74B7C7] rounded-full text-white hover:bg-teal-600 ${className} transition-colors duration-300 text-nowrap`}
    >
      {children}
    </button>
  );
};

export default SecondaryBtn;
