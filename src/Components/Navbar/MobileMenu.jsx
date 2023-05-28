import  { useEffect, useState } from "react";
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  return (
   <div className="">
     <div  className="lg:hidden block ">
      {isOpen ? (
        <RxCross2 className="hidden" onClick={() => setIsOpen(!isOpen)} />
      ) : (
        <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-8 h-6 flex flex-col justify-between items-center mdl:hidden text-4xl text-[#64ffda] cursor-pointer overflow-hidden group"
      >
        <span className="w-full h-[5px] bg-[#ffcc1d] inline-flex transform group-hover:translate-x-1 transition-all ease-in-out duration-300"></span>

        <span className="w-full h-[5px] bg-[#64ffda] inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>

        <span className="w-full h-[5px] bg-[#ffcc1d] inline-flex transform group-hover:translate-x-1 transition-all ease-in-out duration-300"></span>
      </div>


      )}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-[#3657cd] z-0 w-3/4 custom-scroll top-0 right-0 max-h-screen absolute p-2 overflow-y-auto"
        >
          <div className="">
            <div className="cursor-pointer sticky top-2 z-50">
            <RxCross2 className="text-3xl hover:text-red-600 duration-200" onClick={() => setIsOpen(!isOpen)} />
            
            </div>

           
            <div className="min-h-screen">
              <ul className="flex items-center flex-col mt-3 z-0">
                <li className="sm-menu-style">
                  <Link
                    className="flex items-center "
                    onClick={() => setActive("home")}
                    to={"/"}
                  >
                    Home{" "}
                    <MdOutlineArrowDropDown className="w-6 h-6"/>
                  </Link>
                </li>
                <li>
                  {active == "home" && (
                    <div className="min-w-48 p-2  min-h-max rounded-lg w-full  mt-2 transition-all duration-500 ">
                      <ul
                        onClick={() => setIsOpen(false)}
                        onMouseLeave={() => setActive("")}
                      >
                        <li onClick={() => setIsOpen(false)}>
                          <Link className="mobile-sub-menu-style" to={"/"}>
                            Home 1
                          </Link>
                        </li>
                        <li onClick={() => setIsOpen(false)}>
                          <Link
                            className="mobile-sub-menu-style"
                            to={"/home-two"}
                          >
                            Home 2
                          </Link>
                        </li>
                        <li onClick={() => setIsOpen(false)}>
                          <Link
                            className="mobile-sub-menu-style"
                            to={"/home-three"}
                          >
                            Home 3
                          </Link>
                        </li>
                      </ul>
                      <div className="z-50"></div>
                    </div>
                  )}
                </li>
                <li className="sm-menu-style">
                  <span
                    className="flex items-center "
                    onClick={() => setActive("pages")}
                  >
                    Pages
                    <MdOutlineArrowDropDown className="w-6 h-6"/>
                  </span>
                </li>
                <li>
                  {active == "pages" && (
                    <div className="min-w-48 p-2  min-h-max rounded-lg w-full  mt-2 transition-all duration-500">
                      <ul className="" onMouseLeave={() => setActive("")}>
                        <li>
                          <Link
                            className="mobile-sub-menu-style"
                            to={"/aboutus"}
                          >
                            AboutUs
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="mobile-sub-menu-style"
                            to={"/productlist"}
                          >
                            ProductList
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="mobile-sub-menu-style"
                            to={"/singleproduct"}
                          >
                            SingleProduct
                          </Link>
                        </li>
                        <li>
                          <Link className="mobile-sub-menu-style" to={"/cart"}>
                            Cart
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="mobile-sub-menu-style"
                            to={"/checkout"}
                          >
                            CheckOut
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="mobile-sub-menu-style"
                            to={"/ourteam"}
                          >
                            OurTeam
                          </Link>
                        </li>

                        <li>
                          <Link
                            className="mobile-sub-menu-style"
                            to={"/pricingplan"}
                          >
                            PricingPlan
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="mobile-sub-menu-style"
                            to={"/ourservices"}
                          >
                            Our Services
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="mobile-sub-menu-style"
                            to={"/spywareprotection"}
                          >
                            SpywareProtection
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="mobile-sub-menu-style"
                            to={"/contactus"}
                          >
                            ContactUs
                          </Link>
                        </li>
                        <li>
                          <Link className="mobile-sub-menu-style" to={"/faqs"}>
                            Faqs
                          </Link>
                        </li>

                        <li>
                          <Link className="mobile-sub-menu-style" to={"*"}>
                            NotFoundPage
                          </Link>
                        </li>
                      </ul>
                      <div className="z-50"></div>
                    </div>
                  )}
                </li>
                <li className="sm-menu-style">
                  <span
                    className="flex items-center justify-center "
                    onClick={() => setActive("blog")}
                    
                  >
                    Blogs{" "}
                    <MdOutlineArrowDropDown className="w-6 h-6"/>
                  </span>
                </li>
                <li>
                  {active == "blog" && (
                    <div className="min-w-48 p-2  min-h-max rounded-lg w-full  mt-2 transition-all duration-500">
                      <ul
                        onClick={() => setIsOpen(false)}
                        onMouseLeave={() => setActive("")}
                      >
                        <li>
                          <Link
                            className="mobile-sub-menu-style"
                            to={"/bloglist"}
                          >
                            BlogList
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="mobile-sub-menu-style"
                            to={"/blogitem"}
                          >
                            BlogsItem
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="mobile-sub-menu-style"
                            to={"/blogdetails"}
                          >
                            BlogDetails
                          </Link>
                        </li>
                      </ul>
                      <div className="z-50"></div>
                    </div>
                  )}
                </li>
                <li className="sm-menu-style">
                  <Link
                    className="flex gap-2 items-center mr-8 "
                    onClick={() => setActive("shop")}
                    to={"/"}
                  >
                    Shop
                  </Link>
                </li>
                <li className="sm-menu-style mr-3">
                  <Link to={"/contactus"}>Contact</Link>
                </li>
                <li>
                <div className="flex  gap-4 mt-6">
            <a href="" target="_blank">
              {" "}
              <span className="w-8 h-8  text-textYellow bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-[#64ffda] cursor-pointer hover:translate-y-2 transition-all duration-300">
                <FaFacebookF />
              </span>
            </a>

            <a href="" target="_blank">
              {" "}
              <span className="w-8 h-8 text-textYellow bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-[#64ffda] cursor-pointer hover:translate-y-2 transition-all duration-300">
                <AiOutlineTwitter />
              </span>
            </a>

            <a
              href=""
              target="_blank"
            >
             
              <span className="w-8 h-8 text-textYellow bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-[#64ffda] cursor-pointer hover:translate-y-2 transition-all duration-300">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </div>
   </div>
  );
}
export default MobileMenu;