import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import WithButton from "../WithButtin";

const SocialIcons = ({ rounded }) => (

  <div className="flex gap-2 mt-4">
    {/************************ Social components start hear *************************/}
    {/* Singin button */}
    <WithButton color="black" bg="bg-yellow-500" submitValue={"Singin"} />
    <Link
      to="#"
      target="_blank"
      className={`flex ${rounded}-full items-center px-4 py-2 bg-yellow-500 hover:bg-orange-500 text-gray-500 hover:text-gray-950 transition duration-300 transform hover:scale-80`}
    >
      <span className="sr-only">Facebook</span>
      <FaFacebookF className="h-4 w-" />
    </Link>
    <Link
      to="#"
      target="_blank"
      className={`flex ${rounded}-full items-center  px-4 py-2 bg-yellow-500 hover:bg-orange-500 text-gray-500 hover:text-gray-950 transition duration-300 transform hover:scale-80`}
    >
      <span className="sr-only">Twitter</span>
      <FaTwitter className="h-4 w-" />
    </Link>
    <Link
      to="#"
      target="_blank"
      className={`flex ${rounded}-full items-center px-4 py-2 bg-yellow-500 hover:bg-orange-500 text-gray-500 hover:text-gray-950 transition duration-300 transform hover:scale-80`}
    >
      <span className="sr-only">Instagram</span>
      <FaInstagram className="h-4 w-" />
    </Link>
    <Link
      to="#"
      target="_blank"
      className={`flex ${rounded}-full items-center px-4 py-2 bg-yellow-500 hover:bg-orange-500 text-gray-500 hover:text-gray-950 transition duration-300 transform hover:scale-80`}
    >
      <span className="sr-only">LinkedIn</span>
      <FaLinkedin className="h-4 w-" />
    </Link>
  </div>
);

export default SocialIcons;
