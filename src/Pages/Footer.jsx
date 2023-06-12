import { FaCaretRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Payments from "./Payments/Payments";
import { FiMail, FiPhoneCall } from "react-icons/fi";

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
          <div className={`mt-4 -mb-10 flex flex-col justify-end `}>
                    <p
                      className={`text-end text-md text-white`}
                    >
                      Level 9, The office 4, One Central, <br /> World Trade
                      Center, Dubai-UAE
                    </p>
                    <div className={`flex items-center justify-end`}>
                      <FiMail className="mr-2 text-md text-[#3498db]" />
                      <p
                        className={"text-[18px]"}
                      >
                        hasaninternational2020@gmail.com{" "}
                      </p>
                    </div>
                    <div className="flex items-center justify-end">
                      <FiPhoneCall className="mr-2  text-green-300 " />
                      <p
                        className={"text-[18px]"}
                      >
                        +971566258802 || +971561758023
                      </p>
                    </div>
                  </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
