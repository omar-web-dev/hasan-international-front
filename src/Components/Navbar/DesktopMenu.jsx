import { Link } from "react-router-dom";

function DesktopMenu() {
  return (
    <div className="lg:block hidden">
      {/************************ desktop menu start here *************************/}

      <ul className="flex gap-11 mt-2 items-center">
      {/************************  menu item *************************/}
        <li className="relative">
          <Link
            className="flex pr-2 items-center uppercase text-[15px] font-Inter font-bold"
            to={"/home"}
          >
            Home
          </Link>
        </li>


        <li className="relative">
          <Link
            className="flex items-center uppercase text-[15px] font-Inter font-bold"
            to={"/service"}
          >
            Service
          </Link>
        </li>

        <li className="relative">
          <Link
            className="flex items-center uppercase text-[15px] font-Inter font-bold"
            to={"/about-us"}
          >
            About Us
          </Link>
        </li>
        <li className="relative">
          <Link
            className="flex items-center uppercase text-[15px] font-Inter font-bold"
            to={"/contact"}
          >
            Contact
          </Link>
        </li>
        <li className="relative">
          <Link
            className="flex items-center uppercase text-[15px] font-Inter font-bold"
            to={"/blog"}
          >
            Blog
          </Link>
        </li>
      </ul>

      {/************************ desktop menu end here *************************/}
    </div>
  );
}

export default DesktopMenu;
