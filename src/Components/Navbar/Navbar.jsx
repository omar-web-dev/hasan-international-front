import DesktopMenue from "./DesktopMenue";
import MobileMenu from "./MobileMenu";
import SocialIcons from "../SocialIcons/SocialIcons";
import Logo from "../Logo/Logo";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menu = [
    { _id: 1, name: "home", slug: "/home" },
    { _id: 2, name: "about us", slug: "/about-us" },
    { _id: 3, name: "product", slug: "/product" },
    { _id: 4, name: "service", slug: "/service" },
    { _id: 5, name: "contact", slug: "/contact" },
  ];

  return (
    <nav className="navbar-section sticky top-0 z-50">
      <div className="bg-[#242a44] px-3 md:px-5">
        {/* ================ navbar start hear ==================== */}

        <div className={`z-50 w-full bg-[#242a44] lg:relative `}>
          <div className=" bg-[#242a44]">
            <div className="py-3 max-w-[1200px] bg-[#242a44] text-black mx-auto ">
              <div className="lg:flex justify-between">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className=" w-24 lg:w-28">
                      {/* ================ logo ==================== */}
                      <Logo />
                    </div>

                    <div className="text-black ">
                      <div
                        className={`lg:text-center text-start ml-1 lg:-ml-4 text-white `}
                      >
                        <h1 className=" md:text-[40px] text-[18px] capitalize lg:-mb-3 lg:-mt-2 ">
                          hasan international FZE
                        </h1>
                        <h3
                          className={` md:text-[14px] text-[10px] lg:block font-normal capitalize text-[#81ecec]`}
                        >
                          water treatment plant & medical equipment manufacturer
                          & supplier
                        </h3>

                        {/* ======================== Desktop Menu =============== */}

                        <div className="flex flex-nowrap -ml-1 ">
                          <DesktopMenue menu={menu} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*  =========================== Mobile Menu =========================== */}

                  <div className="transition-transform duration-1000 ease-in">
                    <MobileMenu menu={menu} />
                  </div>
                </div>
                <div>
                  {/* ======================== Social Icon =============== */}

                  <div className="hidden lg:block">
                    <SocialIcons />
                  </div>
                  <div className="hidden lg:flex justify-end">
                    <Link to={"my-carts"} className="relative h-8 w-10 mt-5">
                      <FaCartArrowDown className=" h-8 w-8 text-white" />
                      <span className="absolute -top-3 right-0 w-5 h-5 text-[12px] justify-center items-center flex text-white rounded-full bg-[#EA2027]">
                        10
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

{
  /************************ Navbar end here *************************/
}

export default Navbar;
