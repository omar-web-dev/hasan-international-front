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

  <div className="flex gap-2 justify-end">
    {/************************ Social components start hear *************************/}
    {/* Singin button */}
    <WithButton color="black" bg="bg-yellow-500" submitValue={"Singin"} />
    <Link
      to="#"
      target="_blank"
      className={`flex rounded-lg items-center px-3 py-2 text-white bg-[#1873eb] `}
    >
      <span className="sr-only">Facebook</span>
      <FaFacebookF className="h-5 w-5" />
    </Link>
    
    <Link
      to="#"
      target="_blank"
      className={`flex rounded-lg items-center px-3 py-2 text-white bg-[#1873eb] `}
    >
      <span className="sr-only">Twitter</span>
      <FaTwitter className="h-5 w-5" />
    </Link>

    <Link
      to="#"
      target="_blank"
      className={`flex rounded-lg items-center  text-white  `}
    >
      <span className="sr-only">Instagram</span>
      <img className="h-10 w-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png?20210403190622"></img>
    </Link>

    <Link
      to="#"
      target="_blank"
      className={`flex rounded-lg items-center px-3 py-2 text-white bg-[#1873eb] `}
    >
      <span className="sr-only">Twitter</span>
      <TfiLinkedin className="h-5 w-5" />
    </Link>
    <Link
      to="#"
      target="_blank"
      className={`flex rounded-lg items-center px-3 py-2 text-white bg-[#1873eb] `}
    >
      <span className="sr-only">Twitter</span>
      <FiMail className="h-5 w-5" />
    </Link>

   
  </div>
);

export default SocialIcons;
