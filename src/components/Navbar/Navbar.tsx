import PrimaryBtn from "../Button/PrimaryBtn";
import Logo from "../Logo/Logo";
import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <nav className="flex justify-between py-4 custom-container">
      <Logo />
      <div className="flex items-center gap-6">
        <NavMenu />
        <div>
          <PrimaryBtn className="text-lg py-3 px-5">Login</PrimaryBtn>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
