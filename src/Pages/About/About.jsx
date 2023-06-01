import { useEffect } from "react";
import HeadImage from "../../Components/HeadImage/HeadImage";

const About = () => {
  useEffect(() => {
    return () => {
      document.title = "Hasan International / about";
    };
  }, []);

  return (
    <div>
      <div>
        <HeadImage
          text={"About us"}
          image={
            "https://hawkmed.com.cn/wp-content/uploads/2021/12/160610965300119296f.jpg"
          }
        />
      </div>
      <div className="max-w-[1200px] mx-auto">
        <h1>this is a About page</h1>
      </div>
    </div>
  );
};

export default About;
