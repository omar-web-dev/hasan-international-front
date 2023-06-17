import { useState } from "react";
import Category from "../../Components/Category/Category";
import prodcut1 from "../../assets/application/app-1.jpeg";
import prodcut2 from "../../assets/application/app-2.jpeg";
import prodcut3 from "../../assets/application/app-3.jpeg";
import prodcut4 from "../../assets/application/app-4.jpeg";
import prodcut5 from "../../assets/application/app-5.jpeg";
import prodcut6 from "../../assets/application/app-6.jpeg";
import prodcut7 from "../../assets/application/app-7.jpeg";
import prodcut9 from "../../assets/application/app-9.png";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FiXCircle } from "react-icons/fi";

const Product = () => {
  // category items
  const categories = [
    { mainCategory: "E-sell" },
    {
      mainCategory: "Medical equipment",
      subCategories: [
        {
          name: "Nephrology",
          // subSubCategories: [
          //   {
          //     name: "Dialysis machine",
          //   },
          //   // {
          //   //   name: "Dialysis water Treatment plant",
          //   //   subSubSubCategories: [
          //   //     {
          //   //       name: "Single bed water treatment plant",
          //   //       manufacturers: ["China made", "USA made", "German made"],
          //   //     },
          //   //     {
          //   //       name: "Central water treatment plant",
          //   //       manufacturers: ["China made", "USA made", "German made"],
          //   //     },
          //   //   ],
          //   // },
          //   {
          //     name: "Dialyzer reprocessing machine",
          //     manufacturers: ["China made", "USA made"],
          //   },
          //   {
          //     name: "Dialyzer reprocessing chemical",
          //   },
          //   {
          //     name: "Dialysis disposable",
          //     subSubSubCategories: [
          //       "Dialyzer",
          //       "Blood tubing set",
          //       "Fistula needle",
          //       "Catheter",
          //     ],
          //   },
          //   {
          //     name: "Dialysis chair",
          //     manufacturers: ["China made", "Turkey made"],
          //   },
          //   {
          //     name: "Dialysis wall box",
          //   },
          // ],
        },
        {
          name: "ICU",
          subSubCategories: [
            "ICU Ventilator",
            "Patient monitor",
            "Defibrillator",
            "Infusion pump",
            "Syringe pump",
          ],
        },
        {
          name: "Blood pressure monitoring device",
          manufacturers: ["Japan made", "Korea made"],
        },
        {
          name: "Hospital furniture",
          subSubCategories: ["Bed", "Trolly", "Cabinet"],
        },
        {
          name: "Lab equipment",
          subSubCategories: ["De Ionized Water treatment plant"],
        },
        {
          name: "Disposable items",
          subSubCategories: ["Industrial and commercial water treatment plant"],
        },
      ],
    },
    {
      mainCategory: "Industrial and commercial water treatment plant",
      subCategories: [
        {
          name: "Reverse osmosis plant",
          subSubCategories: ["Commercial", "Industrial"],
        },
        {
          name: "Iron remove plant",
          subSubCategories: ["Commercial", "Industrial"],
        },
        {
          name: "Activated carbon filter",
          subSubCategories: ["Commercial", "Industrial"],
        },
        {
          name: "Water softener",
          subSubCategories: ["Commercial", "Industrial"],
        },
        {
          name: "DM Water plant",
          subSubCategories: ["Commercial", "Industrial"],
        },
      ],
    },
    {
      mainCategory: "Domestic water treatment plant",
      subCategories: [
        { name: "Household water purifier" },
        { name: "Central water purifier" },
      ],
    },
    {
      mainCategory: "Small bottle water filling line",
      subCategories: [
        { name: "Washing-Filing-Capping machine" },
        {
          name: "Labeling machine",
          subSubCategories: ["BOPP label machine", "Shrink label machine"],
        },
        { name: "Packaging machine" },
        {
          name: "Molding machine",
          subSubCategories: [
            "Injection molding machine",
            "Blow molding machine",
          ],
        },
      ],
    },
    {
      mainCategory: "5 Gallon bottle water filling line",
      subCategories: [
        { name: "Washing-Filling-Capping Machine" },
        { name: "Inside and outside brush washing machine" },
      ],
    },
    {
      mainCategory: "Gallon bottle water filling line",
      subCategories: [
        { name: "Washing-Filling-Capping Machine" },
        { name: "Inside and outside brush washing machine" },
      ],
    },
    {
      mainCategory: "Filter media",
      subCategories: [
        { name: "Iron remove media" },
        { name: "Activated carbon" },
        { name: "Cation Resin" },
        { name: "Anion Resin" },
        { name: "RO antiscalent" },
        { name: "PP filter" },
        { name: "RO membrane" },
      ],
    },
  ];

  // product items
  const products = [
    { id: 1, img: prodcut1, title: "This is a products-1" },
    { id: 2, img: prodcut2, title: "This is a products-2" },
    { id: 3, img: prodcut3, title: "This is a products-3" },
    { id: 4, img: prodcut4, title: "This is a products-4" },
    { id: 5, img: prodcut5, title: "This is a products-5" },
    { id: 6, img: prodcut6, title: "This is a products-6" },
    { id: 7, img: prodcut7, title: "This is a products-7" },
    { id: 8, img: prodcut7, title: "This is a products-7" },
    { id: 9, img: prodcut9, title: "This is a products-9" },
    { id: 10, img: prodcut6, title: "This is a products-6" },
    { id: 11, img: prodcut7, title: "This is a products-7" },
    { id: 12, img: prodcut9, title: "This is a products-9" },
    { id: 13, img: prodcut7, title: "This is a products-7" },
    { id: 14, img: prodcut7, title: "This is a products-7" },
    { id: 15, img: prodcut7, title: "This is a products-7" },
    { id: 16, img: prodcut7, title: "This is a products-7" },
  ];

  const dataArray = Array.from({ length: 16 });

  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  const totalPages = 5;
  const currentPage = 3;

  const handlePageClick = () => {
    // Handle logic when a pagination button is clicked
    // console.log(`Go to page ${page}`);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#bdc3c7] pt-3 ">
      <div className=" bg-[#bdc3c7] ">

      <h2 className=" my_h2 text-[#5f27cd] ">Product</h2>
        <div className="lg:hidden px-3 md:px-5 -mt-10 ">
          <button className="text-xl" onClick={toggleOpen}>{isOpen ? <FiXCircle className="text-red-500"/> : <FiMenu/>}</button>
          {isOpen && (
            <div className="absolute">
              <div className=" top-0 app px-2 w-full left-0 relative h-[56vh] md:h-[350px] lg:h-[75vh] bg-white mr-1" style={{ width: "calc(100% - 12px)" }}>
                {categories.map((category, i) => (
                  <Category
                    key={i}
                    name={category.mainCategory}
                    subCategories={category.subCategories}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        
      </div>
      <div className="mt-3 max-w-[1200px] mx-auto flex">
        <div className="category hidden lg:block w-[300px]">
          <div className="app px-2 relative h-[75vh] bg-white mr-1">
            {categories.map((category, i) => (
              <Category
                key={i}
                name={category.mainCategory}
                subCategories={category.subCategories}
              />
            ))}
          </div>
        </div>
        <div className="product w-full lg:ml-2 mb-6 px-3 md:px-5 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 justify-justify-between">
            {isLoading
              ? dataArray.map((_, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded shadow animate-pulse"
                  >
                    <div className="bg-gray-300 mb-2 rounded h-[150px] animate-pulse w-full"></div>
                    <div className="h-6 bg-gray-300 rounded w-full animate-pulse"></div>
                  </div>
                ))
              : products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white p-4 rounded shadow "
                  >
                    <Link to={`/single-product/${product.id}`} key={product.id}>
                      <img
                        src={product.img}
                        alt={product.title}
                        className="w-full h-auto mb-2"
                      />
                    </Link>
                    <h3 className="text-center text-lg font-bold">
                      {product.title}
                    </h3>
                  </div>
                ))}
          </div>
        </div>
      </div>
      <div className="mx-auto flex justify-center pb-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`mr-2 px-4 py-2 rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => handlePageClick(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Product;
