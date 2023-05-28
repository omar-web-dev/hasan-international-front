import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div className="mt-20">
      <div className="text-center max-w-[600px] mx-auto">
        <h2 className="my_h2">Blog</h2>
      
      </div>
      <div className="grid grid-cols-3 gap-10 my-10">
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
      </div>
    </div>
  );
};

export default Blog;
