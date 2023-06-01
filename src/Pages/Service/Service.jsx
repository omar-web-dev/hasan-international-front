import { useEffect } from "react";
import CategoryItem from "../../Components/CategoryItem";
import HeadImage from "../../Components/HeadImage/HeadImage";
import OurProductCard from "../Home/OurProducts/OurProductCard";

const Service = () => {

  useEffect(() => {
    return () => {
      document.title = "Hasan International / service";
    };
  }, []);
  
  return (
    <div>
      <HeadImage text={"Our Service"} image={"https://hawkmed.com.cn/wp-content/uploads/2021/12/160610965300119296f.jpg"}/>
      <div className="max-w-[1200px] mx-auto">
        <CategoryItem />
        <div className="grid grid-cols-3 gap-10 my-10">
        <OurProductCard/>
        <OurProductCard/>
        <OurProductCard/>
        <OurProductCard/>
        <OurProductCard/>
        <OurProductCard/>
        <OurProductCard/>
        <OurProductCard/>
      </div>
      </div>
    </div>
  );
};

export default Service;
