type OutlineBlueBtnProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const OutlineBlueBtn: React.FC<OutlineBlueBtnProps> = ({
  onClick,
  className = "",
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer border border-blue-300  text-blue-500 rounded-full text-xs ${className} transition-colors duration-300 text-nowrap hover:text-white hover:bg-blue-500`}
    >
      {children}
    </button>
  );
};

export default OutlineBlueBtn;
