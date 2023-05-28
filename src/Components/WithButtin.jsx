import { FaRocket } from "react-icons/fa";
import { Button } from "@material-tailwind/react";

const WithButton = ({ submitValue, color, bg }) => {
  return (
    <Button className={`flex justify-center items-center px-4 py-2 ${bg} text-${color} transition duration-300 transform hover:scale-80`}>
      {submitValue}
    </Button>
  );
};

export default WithButton;
