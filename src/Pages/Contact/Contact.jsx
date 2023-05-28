import ContactForm from "../../Components/ContactForm";
import HeadImage from "../../Components/HeadImage/HeadImage";

const Contact = () => {
  return (
    <>
      <HeadImage
        text={"Contact"}
        image={
          "https://hawkmed.com.cn/wp-content/uploads/2021/12/160610965300119296f.jpg"
        }
      />
      <div>
        <ContactForm/>
      </div>
    </>
  );
};

export default Contact;
