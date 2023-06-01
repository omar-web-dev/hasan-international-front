import { FaCaretRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialIcons from "../Components/SocialIcons/SocialIcons";
import WithButton from "../Components/WithButtin";
import Logo from "../Components/Logo/logo";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubscriber = () => {};

  return (
    <footer className=" bg-gray-800">
      <div className="container mx-auto py-8 px-8 max-w-[1200px] ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-between">
          {/* *** first section */}
          <div className="w-full  md:text-left">
            <div className="flex items-center">
              <Logo />
              <div className="text-green-500">
                <h1 className="text-xl">HASAN INTERNATIONAL FZE</h1>
                <h3 className="text-[9px]">
                  WATER TREATMENT PLANT AND MEDICAL EQUIPMENT SUPPLIER
                </h3>
              </div>
            </div>
            <p className="text-white ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis velit temporibus expedita alias quae perferendis
              officiis consequatur ab iure voluptas?
            </p>
            {/* <SocialIcons rounded='rounded'/> */}
          </div>
          {/* *** meddle section */}
          <div className="w-full md:px-10 ">
            <h5 className="uppercase text-black  font-bold mb-4">
              Goto
            </h5>
            <nav className="mb-4">
              <ul>
                <li className="flex items-center text-gray-200">
                  <FaCaretRight className="mr-3" />
                  <Link to="/service">
                  Service  
                  </Link>
                </li>
                <li className="flex items-center text-gray-200">
                  <FaCaretRight className="mr-3" />
                  <Link to="/about-us">
                    About Us
                  </Link>
                </li>
                
                <li className="flex items-center text-gray-200">
                  <FaCaretRight className="mr-3" />
                  <Link to="/blog">
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>{" "}
          </div>

          {/* *** last section */}
          <form
            className="w-full text-black "
            onSubmit={handleSubmit(handleSubscriber)}
          >
            <div className="text-green-500">
              <p className="sm_pre_text">+888 8888-8888888</p>
              <p className="sm_pre_text">info@hasan-nternational.com</p>
            </div>
            <div className="mb-4 mt-2">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                {...register("name", { required: "Name is required" })}
              />
              {errors?.name && (
                <span className="text-red-200">{errors.name.message}</span>
              )}
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                {...register("email", { required: "Email is required" })}
              />
              {errors?.email && (
                <span className="text-red-200">{errors.email.message}</span>
              )}
            </div>
            <WithButton color='white' bg='bg-green-500' submitValue="SUBSCRIBE" />
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
