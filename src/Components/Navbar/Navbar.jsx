import { useEffect, useState } from "react";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import DesktopSidebar from "./DesktopSidebar";
import SocialIcons from "../SocialIcons/SocialIcons";
import Logo from "../Logo/logo";

{
  /************************ Navbar start here *************************/
}

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

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
      <div className="">
        <nav
          className={`z-50 w-full px-3 lg:relative ${
            scrollPosition > 0 ? "navbar-bg " : "primary-navbar"
          }`}
        >
          <div
            className={`${
              scrollPosition > 0 ? "hidden" : "flex justify-end items-center"
            }`}
            style={{ transition: "0.3s" }}
          >
            <SocialIcons />
          </div>

          <div className="max-w-[1200px] font-Cuprum py-3  text-black mx-auto">
            {sidebar && <DesktopSidebar setSidebar={setSidebar} />}
            <div className="flex justify-between items-center flex-col">
              {/* Logo Here */}
              <div className="flex items-center">
                <Logo />
                <div>
                  <div className="text-green-500">
                    <h1 className="text-5xl">HASAN INTERNATIONAL FZE</h1>
                    <h3 className="text-[20.6px]">
                      WATER TREATMENT PLANT AND MEDICAL EQUIPMENT SUPPLIER
                    </h3>
                  </div>
                  {/* Desktop Menu */}
                  <DesktopMenu scrollPosition={scrollPosition} />
                </div>
              </div>

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
