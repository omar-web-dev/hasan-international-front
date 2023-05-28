import { Link } from "react-router-dom";

function DesktopMenu({scrollPosition}) {
  return (
    <div className="lg:block hidden">
      {/************************ desktop menu start here *************************/}

      <ul className="flex mt-2 items-center">
      {/************************  menu item *************************/}
        <li className="relative">
          <Link
            className={`${ scrollPosition > 0 ? " text-white hover:bg-white hover:text-green-500" : "text-green-500 hover:bg-green-500 hover:text-white"} flex py-2 px-5  items-center uppercase text-[15px] font-Inter font-bold`}
            to={"/home"}
          >
            Home
          </Link>
        </li>


        <li className="relative">
          <Link
            className={`${ scrollPosition > 0 ? " text-white hover:bg-white hover:text-green-500" : "text-green-500 hover:bg-green-500 hover:text-white"} flex py-2 px-5  items-center uppercase text-[15px] font-Inter font-bold`}
            to={"/service"}
          >
            Service
          </Link>
        </li>

        <li className="relative">
          <Link
            className={`${ scrollPosition > 0 ? " text-white hover:bg-white hover:text-green-500" : "text-green-500 hover:bg-green-500 hover:text-white"} flex py-2 px-5  items-center uppercase text-[15px] font-Inter font-bold`}
            to={"/about-us"}
          >
            About Us
          </Link>
        </li>
        <li className="relative">
          <Link
            className={`${ scrollPosition > 0 ? " text-white hover:bg-white hover:text-green-500" : "text-green-500 hover:bg-green-500 hover:text-white"} flex py-2 px-5  items-center uppercase text-[15px] font-Inter font-bold`}
            to={"/contact"}
          >
            Contact
          </Link>
        </li>
        <li className="relative">
          <Link
            className={`${ scrollPosition > 0 ? " text-white hover:bg-white hover:text-green-500" : "text-green-500 hover:bg-green-500 hover:text-white"} flex py-2 px-5  items-center uppercase text-[15px] font-Inter font-bold`}
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
