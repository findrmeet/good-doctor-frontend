type OutlineBtnProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const OutlineBtn: React.FC<OutlineBtnProps> = ({
  onClick,
  className = "",
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer border border-gray-300  text-[#8A99AF] rounded-full text-xs ${className} transition-colors duration-300 text-nowrap`}
    >
      {children}
    </button>
  );
};

export default OutlineBtn;
