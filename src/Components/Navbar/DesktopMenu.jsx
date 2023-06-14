import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const DesktopMenu = ({ menu }) => {
  return (
    <div className="lg:block hidden">
      {/************************ desktop menu start here *************************/}

      <ul className="flex mt-2 items-center">
        {/************************  menu item *************************/}

        {menu?.map((item) => (
          <li key={item?._id} className="relative">
            <Link
              className="text-[#f2b5ff] hover:bg-[#0a0a0a] hover:text-[#06eb12] rounded-[15px] py-1 px-2 mx-1 items-center uppercase text-[15px] font-Inter font-bold"
              to={item?.slug}
            >
              {item?.name}
            </Link>
          </li>
        ))}
      </ul>

      {/************************ desktop menu end here *************************/}
    </div>
  );
};

// ==================== type handling  ===================\\

DesktopMenu.propTypes = {
  menu: PropTypes.array.isRequired,
};

export default DesktopMenu;
