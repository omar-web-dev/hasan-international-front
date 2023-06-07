import { useEffect } from "react";

import { NewProduct } from "../NewProduct/NewProduct";
import Application from "../Application";
import Brand from "../Brands/Brands";
// import { NewProduct } from "../NewProduct/NewProduct";

const Home = () => {
  useEffect(() => {
    return () => {
      document.title = "Hasan International / home";
    };
  }, []);

  return (
    <div className="pt-32 bg-[#bdc3c7]">
      <div className="max-w-[1200px] mx-auto">
        <NewProduct />
        <Application/>
        <Brand />
      </div>
    </div>
  );
};

export default Home;
