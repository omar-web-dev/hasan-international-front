import { Link } from "react-router-dom";

function DesktopMenu({ scrollPosition }) {
  return (
    <div className="lg:block hidden">
      {/************************ desktop menu start here *************************/}

      <ul className="flex mt-2 items-center">
        {/************************  menu item *************************/}
        <li className="relative">
          <Link
            className="text-[#f2b5ff] hover:bg-[#0a0a0a] hover:text-[#06eb12] ml-4 rounded-[15px] py-1 px-2 mx-1 items-center uppercase text-[15px] font-Inter font-bold"
            to={"/home"}
          >
            Home
          </Link>
        </li>

        <li className="relative">
          <Link
            className=" text-[#f2b5ff] hover:bg-[#0a0a0a] hover:text-[#06eb12] rounded-[15px] py-1 px-2 mx-1 items-center uppercase text-[15px] font-Inter font-bold"
            to={"/about-us"}
          >
            About Us
          </Link>
        </li>

        <li className="relative">
          <Link
            className=" text-[#f2b5ff] hover:bg-[#0a0a0a] hover:text-[#06eb12] rounded-[15px] py-1 px-2 mx-1 items-center uppercase text-[15px] font-Inter font-bold"
            to={"/product"}
          >
            Product
          </Link>
        </li>

        <li className="relative">
          <Link
            className=" text-[#f2b5ff] hover:bg-[#0a0a0a] hover:text-[#06eb12] rounded-[15px] py-1 px-2 mx-1 items-center uppercase text-[15px] font-Inter font-bold"
            to={"/service"}
          >
            Service
          </Link>
        </li>

        <li className="relative">
          <Link
            className=" text-[#f2b5ff] hover:bg-[#0a0a0a] hover:text-[#06eb12] rounded-[15px] py-1 px-2 mx-1 items-center uppercase text-[15px] font-Inter font-bold"
            to={"/contact"}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/************************ desktop menu end here *************************/}
    </div>
  );
}

export default DesktopMenu;
