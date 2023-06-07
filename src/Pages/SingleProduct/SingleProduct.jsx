import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import HeadImage from "../../Components/HeadImage/HeadImage";
import product1 from "../../assets/app-1.jpeg";
import { useState } from "react";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);

  const sp = {
    id: 1,
    img: product1,
    title: "SAMSUNG Galaxy Tab A7 Lite 8.7 32GB WiFi Android Tablet,",
    rating: 5,
    regularPrice: 1200,
    sellPrice: 1990,
    descriptions: [
      {
        title: "LIGHT AND PORTABLE:",
        des: " With its compact 8.7” screen, slim design and sturdy metal frame, Galaxy Tab A7 Lite tablet is perfectly sized for entertainment on the go; Easy for everyone to carry and travel with, especially kids. Technology: TFT",
      },
      {
        title: "LIGHT AND PORTABLE:",
        des: " With its compact 8.7” screen, slim design and sturdy metal frame, Galaxy Tab A7 Lite tablet is perfectly sized for entertainment on the go; Easy for everyone to carry and travel with, especially kids. Technology: TFT",
      },
    ],
    note: "This device features an upgraded metal frame that helps protect against everyday hiccups; It's made to be durable, so your tablet keeps working even when handled by children’s accident-prone hands",
    eSell: true,
  };
  const maxRating = 5;
  const rating = sp.rating;

  const pricePercentage = (sp?.regularPrice - sp?.sellPrice) / 100;

  const handleIncrement = () => {
    if (quantity < 5) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // my cards
  const carts = [{ id: 1 }, { id: 2 }];

  const [cart, setCart] = useState(carts);

  const handleAddToCart = (productId) => {
    const selectedProduct = sp.find((product) => product.id === productId);
    if (selectedProduct) {
      setCart([...cart, selectedProduct]);
      alert(`Product added to cart. ID: ${productId}`);
    } else {
      alert(`Product not found. ID: ${productId}`);
    }
  };

  return (
    <>
      <HeadImage
        text={"Single-product"}
        image={
          "https://hawkmed.com.cn/wp-content/uploads/2021/12/160610965300119296f.jpg"
        }
      />
      <div className="max-w-[1200px] mt-32 mx-auto flex items-start mb-10">
        {/* 1st section  for image */}
        <div className="w-2/5 pr-2 relative">
          <div className="sticky top-0 bottom-0 w-[450px] h-[350px] pr-2">
            <img className="rounded-lg h-full" src={sp?.img} alt="" />
          </div>
        </div>

        {/* 2nd section for product details */}
        <div className="w-2/5 pr-6 justify-center">
          <div className=" text-lg text-black">{sp?.title}</div>
          <hr className="w-full h-[2px] my-2 bg-gray-300" />
          <div className="flex">
            <div className="flex items-center">
              {Array.from({ length: maxRating }, (_, index) => (
                <span key={index}>
                  {index + 1 <= rating ? (
                    <AiFillStar className="text-yellow-500" />
                  ) : (
                    <AiOutlineStar className="text-gray-500" />
                  )}
                </span>
              ))}
            </div>
            <div className="w-[150px]">1 Ratings</div>
            {/* <div className="w-[50px] border h-[100px]">678 answered questions</div> */}
          </div>
          {sp?.eSell ? (
            <>
              <div className="flex ">
                <div className="text-red-500 text-xl mr-2">
                  {" "}
                  {pricePercentage}
                  {"% "}
                </div>
                <div className=" flex">
                  <p className="text-xl"> $</p>
                  <p className="text-3xl"> {sp?.sellPrice}</p>
                </div>
              </div>
              <div className=" text-lg">
                {" "}
                <del>${sp?.regularPrice}</del>
              </div>
            </>
          ) : (
            <div className="py-1">
              <button className="py-2  px-10 bg-blue-100 text-blue-900">
                {" "}
                Contact now
              </button>
            </div>
          )}
          <div>
            <hr className="w-full h-[2px] my-2 bg-gray-300" />

            <strong>About this item</strong>
            <ul>
              {sp?.descriptions.map((description, index) => (
                <li key={index}>
                  <span className="dot-icon">&#8226;</span> {/* Dot icon */}
                  <strong>{description.title}</strong> {description.des}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* 3rd section for buy information  */}
        <div className="w-1/5 border rounded-lg p-5">
          <div className="flex items-start">
            <p className="">$</p>
            <p className="text-2xl pt-0">{sp?.sellPrice}</p>
            <p className="">.00</p>
          </div>
          <p className="py-1">$1.30 Shipping to UAE</p>
          <p className="py-1">
            Delivery Friday, June 16. Order within 11 hrs 22 mins
          </p>
          <p className="py-1">Deliver to UAE</p>
          <p className="py-1 text-[#007600]">In Stock</p>
          <p className="py-1 text-gray-800 ">Quantity</p>
          <div className="flex justify-center items-center my-1">
            <button
              onClick={handleDecrement}
              className="border px-4 py-1 font-bold bg-red-50 text-red-500"
            >
              -
            </button>
            <p className="px-10"> {quantity}</p>
            <button
              onClick={handleIncrement}
              className="border px-4 py-1 font-bold bg-blue-50 text-blue-500"
            >
              +
            </button>
          </div>

          <div className="mt-3">
            <button
              onClick={() => handleAddToCart(sp.id)}
              className="w-full cursor-pointer  border py-1 bg-[#ffd817] text-center rounded-full"
            >
              Add to Card
            </button>
            <button className="mb-1 w-full cursor-pointer  border py-1 bg-[#ffa51f] text-center rounded-full">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <hr className="w-full h-[2px] my-2 bg-gray-300" />
      <div className="py-44 border ">
        <h1>this is a relative products sections</h1>
      </div>

      {/* this is a my cards */}
      <div className="mx-auto flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
        <h2 className="text-xl font-semibold">My cart</h2>
        <ul className="flex flex-col divide-y divide-gray-700">
          <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
                alt="Polaroid camera"
              />
              <div className="flex flex-col justify-between w-full pb-4">
                <div className="flex justify-between w-full pb-2 space-x-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                      Polaroid camera
                    </h3>
                    <p className="text-sm dark:text-gray-400">Classic</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">59.99€</p>
                    <p className="text-sm line-through dark:text-gray-600">
                      75.50€
                    </p>
                  </div>
                </div>
                <div className="flex text-sm divide-x">
                  <button
                    type="button"
                    className="flex items-center px-2 py-1 pl-0 space-x-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                      <rect width="32" height="200" x="168" y="216"></rect>
                      <rect width="32" height="200" x="240" y="216"></rect>
                      <rect width="32" height="200" x="312" y="216"></rect>
                      <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                    </svg>
                    <span>Remove</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center px-2 py-1 space-x-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                    </svg>
                    <span>Add to favorites</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
          <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=675&amp;q=80"
                alt="Replica headphones"
              />
              <div className="flex flex-col justify-between w-full pb-4">
                <div className="flex justify-between w-full pb-2 space-x-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                      Replica headphones
                    </h3>
                    <p className="text-sm dark:text-gray-400">White</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">99.95€</p>
                    <p className="text-sm line-through dark:text-gray-600">
                      150€
                    </p>
                  </div>
                </div>
                <div className="flex text-sm divide-x">
                  <button
                    type="button"
                    className="flex items-center px-2 py-1 pl-0 space-x-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                      <rect width="32" height="200" x="168" y="216"></rect>
                      <rect width="32" height="200" x="240" y="216"></rect>
                      <rect width="32" height="200" x="312" y="216"></rect>
                      <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                    </svg>
                    <span>Remove</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center px-2 py-1 space-x-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                    </svg>
                    <span>Add to favorites</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
          <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                src="https://images.unsplash.com/phodark:to-1594549181132-9045fed330ce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=675&amp;q=80"
                alt="Set of travel chargers"
              />
              <div className="flex flex-col justify-between w-full pb-4">
                <div className="flex justify-between w-full pb-2 space-x-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                      Set of travel chargers
                    </h3>
                    <p className="text-sm dark:text-gray-400">Black</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">8.99€</p>
                    <p className="text-sm line-through dark:text-gray-600">
                      15.99€
                    </p>
                  </div>
                </div>
                <div className="flex text-sm divide-x">
                  <button
                    type="button"
                    className="flex items-center px-2 py-1 pl-0 space-x-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                      <rect width="32" height="200" x="168" y="216"></rect>
                      <rect width="32" height="200" x="240" y="216"></rect>
                      <rect width="32" height="200" x="312" y="216"></rect>
                      <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                    </svg>
                    <span>Remove</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center px-2 py-1 space-x-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                    </svg>
                    <span>Add to favorites</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="space-y-1 text-right">
          <p>
            Total amount:
            <span className="font-semibold">357 €</span>
          </p>
          <p className="text-sm dark:text-gray-400">
            Not including taxes and shipping costs
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-6 py-2 border rounded-md dark:border-violet-400"
          >
            Back
            <span className="sr-only sm:not-sr-only">to shop</span>
          </button>
          <button
            type="button"
            className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400"
          >
            <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
