import { useState, useEffect, useRef } from "react";


import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";


const MenuItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);
  
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };



  return (
    <>
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
          >
          </button>
          <Dropdown
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) :  !items.url && items.submenu ?(
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
              <Link to={items.path}>{items.title}</Link>
          </button>
          <Dropdown
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
       
         <Link to={items.path} >{items.title}</Link>
      )}
    </li>
    </>
  );
};

export default MenuItems;
