type PrimaryBtnProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const PrimaryBtn: React.FC<PrimaryBtnProps> = ({
  onClick,
  className = "",
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer bg-blue-500 rounded-full text-white hover:bg-blue-600 ${className} transition-colors duration-300 text-nowrap`}
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;
