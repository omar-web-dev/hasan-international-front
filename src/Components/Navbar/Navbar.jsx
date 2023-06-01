import { useEffect, useState } from "react";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import SocialIcons from "../SocialIcons/SocialIcons";
import Logo from "../Logo/logo";

{
  /************************ Navbar start here *************************/
}

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  {
    /************************ scroll effect *************************/
  }
  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div>
        {/* navbar start hear */}
        <nav
          className={`z-50 w-full px-3 lg:relative ${
            scrollPosition > 0 ? "navbar-bg " : "primary-navbar"
          }`}
        >
          <div className="max-w-[1200px] font-Cuprum py-3  text-black mx-auto">
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <div className="w-28">
                  <Logo />
                </div>
                <div className="text-black flex justify-center">
                  <div
                    className={`text-center ${
                      scrollPosition > 0 ? "" : "text-white"
                    } `}
                  >
                    <h1 className="text-[52.4px] -mb-2">
                      HASAN INTERNATIONAL FZE
                    </h1>
                    <h3
                      className={`text-[22.3px] font-normal ${
                        scrollPosition > 0 ? "text-[#433302]" : "text-[yellow]"
                      }   `}
                    >
                      WATER TREATMENT PLANT AND MEDICAL EQUIPMENT SUPPLIER
                    </h3>
                  </div>
                </div>
              </div>
              <div className="">
                <SocialIcons />
                <div className={`mt-4 -mb-10 flex flex-col justify-end `}>
                  <p
                    className={`text-end text-md  ${
                      scrollPosition > 0 ? " " : "text-white"
                    }`}
                  >
                    Level 9, The office 4, One Central, <br /> World Trade
                    Center, Dubai-UAE
                  </p>
                  <div className={`flex items-center justify-end`}>
                    <FiMail className="mr-2 text-md text-[#3498db]" />
                    <p
                      className={`text-[18px]  ${
                        scrollPosition > 0 ? " " : "text-white"
                      }`}
                    >
                      hasaninternational2020@gmail.com{" "}
                    </p>
                  </div>
                  <div className="flex items-center justify-end">
                    <FiPhoneCall className={`mr-2   ${
            scrollPosition > 0 ? "text-green-800 " : "text-green-600"
          }`} />
                    <p
                      className={`text-[18px]  ${
                        scrollPosition > 0 ? " " : "text-white"
                      }`}
                    >
                      +971566258802 || +971561758023
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="flex flex-nowrap ml-[88px]">
              <DesktopMenu scrollPosition={scrollPosition} />
            </div>
            <div className="flex justify-between">
              {/* Logo Here */}

              <div>
                {/* MobileMenu */}
                <div className="transition-transform duration-1000 ease-in">
                  <MobileMenu />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

{
  /************************ Navbar end here *************************/
}

export default Navbar;
