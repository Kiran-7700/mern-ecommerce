import  navItems  from "./NavItem";
import MenuItems from "./MenuItems";
const Navbar = () => {
  return (
    <nav>
      <ul className="menus">
        {navItems.map((menu, index) => {
          return <MenuItems items={menu} key={index}  />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;