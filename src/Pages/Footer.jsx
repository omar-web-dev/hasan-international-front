import { FaCaretRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Payments from "./Payments/Payments";

const Footer = () => {
  const footerItems = [
    { _id: "1", subItem: "Home", slug: "home", icon: "FaCaretRight" },
    { _id: "2", subItem: "About us", slug: "about-us", icon: "FaCaretRight" },
    { _id: "3", subItem: "Product", slug: "product", icon: "FaCaretRight" },
    { _id: "4", subItem: "Service", slug: "service", icon: "FaCaretRight" },
    { _id: "5", subItem: "Contact", slug: "contact", icon: "FaCaretRight" },
  ];

  return (
    <>
      
      <footer className=" bg-gray-800">
        <div className="container mx-auto pt-8 pb-4 max-w-[1200px] ">
          <div className=" flex justify-around">
            {/* *** first section */}
            <div className="w-1/4">
              <nav className="mb-4">
                <ul>
                  {footerItems.map((footerItem) => {
                    return (
                      <li
                        key={footerItem._id}
                        className="flex items-center text-gray-200"
                      >
                        <FaCaretRight className="mr-3" />
                        <Link to={footerItem.slug}>{footerItem.subItem}</Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>{" "}
            </div>
            <div className="w-3/4 flex flex-col ">
              <Payments />
            </div>
          </div>
          <p className="text-white text-center -mt-8">
            © Hasan International fze. All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
