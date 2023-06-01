import { useEffect, useState } from "react";

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
          {/* <div
            className={`${
              scrollPosition > 0 ? "hidden" : "flex justify-end items-center"
            }`}
            style={{ transition: "0.3s" }}
          >
            <SocialIcons />
          </div> */}

          <div className="max-w-[1200px] font-Cuprum py-3  text-black mx-auto">
            <div className="flex items-start justify-between">
              <div className="w-28">
                <Logo />
              </div>
              <div className="text-black flex justify-center">
                <div
                  className={`text-center ${
                    scrollPosition > 0 ? "" : "text-white"
                  } `}
                >
                  <h1 className="text-5xl mb-2">HASAN INTERNATIONAL FZE</h1>
                  <h3 className="text-[20.6px] font-normal">
                    WATER TREATMENT PLANT AND MEDICAL EQUIPMENT SUPPLIER
                  </h3>
                </div>
              </div>
              <SocialIcons />
            </div>

            {/* Desktop Menu */}
            <div className="flex justify-center flex-nowrap ">
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
