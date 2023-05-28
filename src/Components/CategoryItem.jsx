import { Link } from "react-router-dom";

const CategoryItem = () => {
  const categories = [
    { category: "All" },
    { category: "item-1" },
    { category: "item-2" },
    { category: "item-3" },
    { category: "item-4" },
    { category: "item-5" },
  ];

  return (
    <div>
      {/* post categories */}
      <div className="flex items-center justify-start mt-4 mb-4">
        {categories.map((category, index) => (
          <Link
            key={index}
            to="#"
            className="px-2 py-1 font-bold  mr-4 border-b-4 active:text-white active:bg-green-500 border-white hover:border-green-500"
          >
            {category.category}
          </Link>

        ))}
      </div>
    </div>
  );
};

export default CategoryItem;
