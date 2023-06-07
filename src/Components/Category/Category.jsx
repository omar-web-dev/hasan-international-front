import { useState } from "react";

const Category = ({ name, subCategories, subSubCategories }) => {
  const [isHovered, setIsHovered] = useState(false);


  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="category "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul>
        <li className="py-1 ">
          <p className="py-1 px-2 border w-full">{name}</p>
        </li>
        <li>
          <ul>
            <li>
              {isHovered && (
                <div className="h-[65vh]  sub-categories absolute top-0 left-[230px] w-[230px] bg-white">
                  {subCategories &&
                    subCategories.map((subCategory, i) => (
                      <Category
                        key={i * 2}
                        name={subCategory.name}
                        subSubCategories={subCategory.subSubCategories}
                      />
                    ))}
                  {subSubCategories && (
                    <div className="h-[65vh] absolute top-0 left-[20px] w-[300px] bg-white">
                      {subSubCategories.map((subSubCategory, i) => (
                        <p className="py-1 px-2 my-1 border w-full" key={i * 3}>{subSubCategory}</p>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Category;
