const NavMenu = () => {
  return (
    <ul className=" gap-7 text-lg font-medium hidden sm:flex">
      <li className="hover:text-blue-500 transition-colors duration-400 cursor-pointer">
        Home
      </li>
      <li className="hover:text-blue-500 transition-colors duration-400 cursor-pointer">
        Find Doctor
      </li>
      <li className="hover:text-blue-500 transition-colors duration-400 cursor-pointer">
        Order Medicine
      </li>
      <li className="hover:text-blue-500 transition-colors duration-400 cursor-pointer">
        Specialties
      </li>
      <li className="hover:text-blue-500 transition-colors duration-400 cursor-pointer">
        Health Articles
      </li>
      <li className="hover:text-blue-500 transition-colors duration-400 cursor-pointer">
        About Us
      </li>
      <li className="hover:text-blue-500 transition-colors duration-400 cursor-pointer">
        Contact
      </li>
    </ul>
  );
};

export default NavMenu;
