import HeadImage from "../../Components/HeadImage/HeadImage";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <>
      <HeadImage
        text={"Our Blog"}
        image={
          "https://hawkmed.com.cn/wp-content/uploads/2021/12/160610965300119296f.jpg"
        }
      />
        <div className="max-w-[1200px] mx-auto grid grid-cols-3 gap-10 my-10">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
    </>
  );
};

export default Blog;
