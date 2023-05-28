import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    <>
        {/* this is a category section */}
      <div className="mt-20">
        <div className="text-center max-w-[600px] mx-auto">
          <h2 className="my_h2">Category</h2>
        </div>
        <div className="grid grid-cols-3 gap-10 my-10">
        {/* category card */}
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
    </>
  );
};

export default Category;
