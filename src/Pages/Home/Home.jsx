import ShippingArea from "./ShippingArea";
import OurProduct from "./OurProducts/OurProducts";
import Therapy from "./Therapy";
import Category from "./Category/Category";
import Safety from "./Safety";
import Intelligence from "./Intelligence";
import Contact from "./ContactSection/ContactSection";
import Header from "./Header/Header";
import MySlider from "../../Components/MySlider/MySlider";
import { useEffect } from "react";

import { NewProduct } from "../NewProduct/NewProduct";
// import { NewProduct } from "../NewProduct/NewProduct";

const Home = () => {
  useEffect(() => {
    return () => {
      document.title = "Hasan International / home";
    };
  }, []);

  return (
    <div>
      <Header />
      <MySlider/>
      <div className="max-w-[1200px] mx-auto">
        <ShippingArea />
        <NewProduct />
        {/* <HawkMedical />
        <HawkMedical2 /> */}
        <OurProduct />
        <Therapy />
        <Category />
        <Intelligence />
        <Safety />
        {/* <BlogSection /> */}
      </div>
      <Contact />
    </div>
  );
};

export default Home;
