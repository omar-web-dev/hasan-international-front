import {
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import {
  TfiLinkedin
} from "react-icons/Tfi";
import { Link } from "react-router-dom";
import WithButton from "../WithButtin";

const SocialIcons = () => (

  <div className="lg:flex mt-2 gap-2 justify-end">
    {/************************ Social components start hear *************************/}
    {/* Singin button */}
    <WithButton color="black" bg="bg-yellow-500" submitValue={"Sign In"} />
    <Link
      to="#"
      target="_blank"
      className={`flex rounded-lg items-center lg:px-3 py-2 px-2 my-[2px] lg:my-0 text-white bg-[#1873eb] `}
    >
      <span className="sr-only">Facebook</span>
      <FaFacebookF className="lg:h-5 lg:w-5 w-3 h-3" />
    </Link>
    
    <Link
      to="#"
      target="_blank"
      className={`flex rounded-lg items-center lg:px-3 py-2 px-2 my-[2px] lg:my-0 text-white bg-[#1873eb] `}
    >
      <span className="sr-only">Twitter</span>
      <FaTwitter className="lg:h-5 lg:w-5 w-3 h-3" />
    </Link>

    <Link
      to="#"
      target="_blank"
      className={`flex rounded-lg items-center  text-white  `}
    >
      <span className="sr-only">Instagram</span>
      <img className="lg:h-10 lg:w-10 w-[28px] h-6 lg:my-0 my-[2px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png?20210403190622"></img>
    </Link>

    <Link
      to="#"
      target="_blank"
      className={`flex rounded-lg items-center lg:px-3 py-2 px-2 my-[2px] lg:my-0 text-white bg-[#1873eb] `}
    >
      <span className="sr-only">Twitter</span>
      <TfiLinkedin className="lg:h-5 lg:w-5 w-3 h-3" />
    </Link>
    <Link
      to="#"
      target="_blank"
      className={`flex rounded-lg items-center lg:px-3 py-2 px-2 my-[2px] lg:my-0 text-white bg-[#1873eb] `}
    >
      <span className="sr-only">Twitter</span>
      <FiMail className="lg:h-5 lg:w-5 w-3 h-3" />
    </Link>

   
  </div>
);

export default SocialIcons;
