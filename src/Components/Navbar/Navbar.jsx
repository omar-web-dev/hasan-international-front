import { useEffect, useState } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import SocialIcons from "../SocialIcons/SocialIcons";
import Logo from "../Logo/logo";
import { FaCartArrowDown } from "react-icons/fa";

{
  /************** Navbar start here *****************/
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
      <div className="bg-[#242a44]">
        {/* navbar start hear */}
        <nav
          className={`z-50 w-full bg-[#242a44] lg:relative ${
            scrollPosition > 0 ? "navbar-bg " : "primary-navbar"
          }`}
        >
          <div className=" bg-[#242a44]">
            <div className=" py-3 max-w-[1200px] bg-[#242a44] text-black mx-auto ">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <div className="w-28">
                    <Logo />
                  </div>
                  <div className="text-black ">
                    <div className={`text-center -ml-4 text-white `}>
                      <h1 className="text-[40px] capitalize -mb-3 -mt-2 ">
                        hasan international FZE
                      </h1>
                      <h3
                        className={`text-[14px] font-normal capitalize text-[#81ecec]`}
                      >
                        water treatment plant & medical equipment manufacturer &
                        supplier
                      </h3>
                      <div className="flex flex-nowrap -ml-1 ">
                        <DesktopMenu scrollPosition={scrollPosition} />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="">
                    <SocialIcons />
                  </div>
                  <div className="flex justify-end">
                    <div className="relative h-8 w-10 mt-5">
                      <FaCartArrowDown className=" h-8 w-8 text-white" />
                      <span className="absolute -top-3 right-0 w-5 h-5 text-[12px] justify-center items-center flex text-white rounded-full bg-[#EA2027]">
                        10
                      </span>
                    </div>
                  </div>
                </div>
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
