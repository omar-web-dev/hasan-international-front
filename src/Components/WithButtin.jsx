import { FaRocket } from "react-icons/fa";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const WithButton = ({ submitValue, color, bg }) => {
  return (
    <Link to="./sing-in">
      <Button
        className={`flex justify-center items-center px-4 py-2 ${bg} text-${color} transition duration-300 capitalize transform hover:scale-80`}
      >
        {submitValue}
      </Button>
    </Link>
  );
};

export default WithButton;
