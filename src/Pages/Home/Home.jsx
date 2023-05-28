import NewProduct from "../NewProduct/NewProduct";
import SLider from "../../Components/Slider/Slider";
import ShippingArea from "./ShippingArea";
import HawkMedical from "./HawkMedical";
import HawkMedical2 from "./HawkMedical2";
import OurProduct from "./OurProducts/OurProducts";
import Therapy from "./Therapy";
import Category from "./Category/Category";
import Safety from "./Safety";
import Intelligence from "./Intelligence";
import Contact from "./ContactSection/ContactSection";
import BlogSection from "./BlogSection/BlogSection";

const Home = () => {
  return (
    <>
      <SLider />
      <div className="max-w-[1200px] mx-auto">
        <ShippingArea />
        <NewProduct />
        <HawkMedical />
        <HawkMedical2 />
        <OurProduct />
        <Therapy />
        <Category />
        <Intelligence />
        <Safety />
        <BlogSection />
      </div>
      <Contact />
    </>
  );
};

export default Home;
